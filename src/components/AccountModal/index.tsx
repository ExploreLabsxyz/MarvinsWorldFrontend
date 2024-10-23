"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { updateUser, clearUser } from "@/store/slices/userSlice";
import { setIsAccountModalOpen } from "@/store/slices/serverSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SERVER_URL } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import { ImageUpload } from "@/components/ImageUpload";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as amplitude from "@amplitude/analytics-browser";

export function AccountModal() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { isAccountModalOpen } = useSelector(
    (state: RootState) => state.servers
  );
  const { getAccessToken, logout } = usePrivy();

  const [username, setUsername] = useState(user?.username || "");
  const [description, setDescription] = useState(user?.bio || "");
  const [pfp, setPfp] = useState<File | null>(null);

  const handleUpdateAccount = async () => {
    if (!user) return;

    const accessToken = await getAccessToken();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("bio", description);
    if (pfp) {
      formData.append("pfp", pfp);
    }

    try {
      const response = await fetch(`${SERVER_URL}/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to update account");
      }

      const updatedUser = await response.json();
      dispatch(updateUser(updatedUser));
      dispatch(setIsAccountModalOpen(false));
    } catch (error) {
      console.error("Error updating account:", error);
    }
  };

  const handleImageChange = (file: File) => {
    setPfp(file);
  };

  const handleLogout = () => {
    if (user) {
      amplitude.track("User Logged Out", { userId: user?.id });
      logout();
      dispatch(clearUser());
      dispatch(setIsAccountModalOpen(false));
    }
  };

  return (
    <Dialog
      open={isAccountModalOpen}
      onOpenChange={(open) => dispatch(setIsAccountModalOpen(open))}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Account Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ImageUpload
            currentImage={user?.pfp}
            onImageChange={handleImageChange}
            fallback={user?.username?.[0] || "U"}
          />
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-between">
            <Button onClick={handleUpdateAccount}>Update Account</Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
