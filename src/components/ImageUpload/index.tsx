"use client";
// src/components/ImageUpload/index.tsx
import React, { useState, useRef, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  currentImage?: string;
  onImageChange: (file: File) => void;
  fallback?: string;
}

export function ImageUpload({
  currentImage,
  onImageChange,
  fallback = "U",
}: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(
    currentImage
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      handleNewFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      handleNewFile(file);
    }
  };

  const handleNewFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      onImageChange(file);
      // Clean up previous preview URL if it exists
      if (previewUrl && previewUrl !== currentImage) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file (including GIFs).");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center space-y-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div
        className="relative w-24 h-24 cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <Avatar className="w-full h-full">
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        )}
      </div>
      <Button onClick={() => fileInputRef.current?.click()}>
        {previewUrl ? "Change Image" : "Upload Image"}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*,.gif"
        className="hidden"
      />
      <p className="text-sm text-muted-foreground">
        Click or drag and drop to upload an image (including GIFs)
      </p>
    </div>
  );
}
