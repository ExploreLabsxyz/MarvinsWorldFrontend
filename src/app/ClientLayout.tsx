"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  clearUser,
  setAuthenticated,
  setInviteModalOpen,
} from "@/store/slices/userSlice";
import { signIn } from "@/lib/utils";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";
import { InvitesModal } from "@/components/InvitesModal";
import { AccountModal } from "@/components/AccountModal";
import { setIsAccountModalOpen } from "@/store/slices/serverSlice";
import { Loading } from "@/components/Loading";
import * as amplitude from "@amplitude/analytics-browser";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ready, authenticated, user, getAccessToken, login } = usePrivy();
  const dispatch = useDispatch();
  const {
    isInviteModalOpen,
    authenticated: isAuthenticated,
    user: signedInUser,
  } = useSelector((state: RootState) => state.user);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function handleAuth() {
      if (ready) {
        setIsLoading(true);
        if (authenticated && user) {
          try {
            const accessToken = await getAccessToken();
            if (!accessToken) {
              throw new Error("No access token");
            }
            const userData = await signIn(accessToken);
            dispatch(setUser(userData));
            amplitude.setUserId(userData.id);
            dispatch(setAuthenticated(true));
            amplitude.track("User Logged In", { userId: userData.id });
          } catch (error) {
            console.error("Error signing in:", error);
            dispatch(clearUser());
            dispatch(setAuthenticated(false));
          }
        } else {
          dispatch(clearUser());
          dispatch(setAuthenticated(false));
        }
        setIsLoading(false);
      }
    }

    handleAuth();
  }, [ready, authenticated, user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative">
      <div className="fixed top-4 right-4">
        {authenticated ? (
          <Button
            onClick={() => {
              dispatch(setIsAccountModalOpen(true));
              amplitude.track("Open Account Modal", { userId: user?.id });
            }}
          >
            Account
          </Button>
        ) : (
          <Button className="" onClick={login}>
            Login
          </Button>
        )}
      </div>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl font-bold">Yap</h1>
      </div>
      {children}
      <AccountModal />
      <InvitesModal
        isOpen={isInviteModalOpen}
        onClose={() => dispatch(setInviteModalOpen(false))}
      />
    </div>
  );
}
