// components/providers/notification-provider.tsx
"use client";

import { Toaster as Sonner } from "sonner";

export function NotificationProvider() {
  return (
    <Sonner
      className="toaster group"
      position="top-center"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-secondary group-[.toaster]:text-primary group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-secondary",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error: "group-[.toast]:bg-error group-[.toast]:text-secondary", // High visibility for errors
        },
      }}
    />
  );
}
