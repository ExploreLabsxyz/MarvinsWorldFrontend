// src/app/page.tsx
"use client";
import StoryStreamer from "@/components/StoryComponent";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-nintendo-light-gray dark:bg-nintendo-gray">
      <StoryStreamer />
    </main>
  );
}
