import React, { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { X, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/ImageUpload";
import { toast } from "@/hooks/use-toast";
import { SERVER_URL } from "@/lib/utils";

interface CharacterUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CharacterUploadModal({
  isOpen,
  onClose,
}: CharacterUploadModalProps) {
  const { getAccessToken } = usePrivy();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (file: File) => {
    setImage(file);
  };

  const handleSubmit = async () => {
    if (!image || !name || !description) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields and upload an image.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const accessToken = await getAccessToken();

      // First upload the image
      const imageFormData = new FormData();
      imageFormData.append("image", image);

      const imageResponse = await fetch(`${SERVER_URL}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: imageFormData,
      });
      if (!imageResponse.ok) {
        throw new Error("Failed to upload image");
      }

      const { embeds } = await imageResponse.json();
      const imageObject = embeds[0];
      const imageUrl = imageObject.image;

      // Then create the character with the image URL
      const characterResponse = await fetch(`${SERVER_URL}/characters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name,
          description,
          imageUrl,
        }),
      });
      if (!characterResponse.ok) {
        throw new Error("Failed to create character");
      }

      toast({
        title: "Success",
        description: "Character created successfully!",
      });

      // Reset form and close modal
      setName("");
      setDescription("");
      setImage(null);
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create character. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            Create New Character
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="mb-4">
            <ImageUpload onImageChange={handleImageChange} fallback="C" />
          </div>

          <Input
            placeholder="Character Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          />

          <Textarea
            placeholder="Character Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4"
          />

          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Character...
              </>
            ) : (
              "Create Character"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
