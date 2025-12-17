// context/ModalContext.tsx
"use client";

import Modal from "@/components/Modal";
import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalConfig = {
  component: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  title?: string;
};

interface ModalContextType {
  openModal: (config: ModalConfig) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<ModalConfig | null>(null);

  const openModal = (newConfig: ModalConfig) => setConfig(newConfig);
  const closeModal = () => setConfig(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* The Actual Modal Component (From previous step) */}
      {config && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          size={config.size}
          title={config.title}
        >
          {config.component}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
};
