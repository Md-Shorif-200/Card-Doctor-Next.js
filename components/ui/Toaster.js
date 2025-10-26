"use client";

import { Toaster } from "sonner";

export default function AppToaster() {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        duration: 4000,
        style: {
          fontSize: "14px",
          borderRadius: "8px",
          padding: "12px 16px",
       
        },
        classNames: {
          toast: "animate-none",
        },
      }}
    />
  );
}
