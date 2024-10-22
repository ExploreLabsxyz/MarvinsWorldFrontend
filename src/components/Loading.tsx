import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <ClipLoader />
    </div>
  );
}
