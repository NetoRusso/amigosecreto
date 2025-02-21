'use client';

import { createContext, useState } from "react";

export type StepContextType = {
  step: number;
  setStep: (step: number) => void;
}

const StepContext = createContext<StepContextType>({} as StepContextType);

const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(0);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  )
}

export  { StepContext, StepProvider };