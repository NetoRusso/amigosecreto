'use client';

import { createContext, useState } from "react";

export type ModalOpenContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}


const ModalOpenContext = createContext<ModalOpenContextType>({} as ModalOpenContextType);

const ModalOpenProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ModalOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalOpenContext.Provider>
  )
};

export { ModalOpenContext, ModalOpenProvider };