import { useState } from "react";

export const useContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);

  return {
    isOpen,
    openContactForm,
    closeContactForm,
    setIsOpen
  };
};
