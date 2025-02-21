'use client';

import { createContext, useState } from "react";

export type RangeValueContextType = {
  minValue: number;
  maxValue: number;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;
}

const RangeValueContext = createContext<RangeValueContextType>({} as RangeValueContextType);

const RangeValueProvider = ({ children }: { children: React.ReactNode }) => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(500);

  return (
    <RangeValueContext.Provider value={{ minValue, maxValue, setMinValue, setMaxValue }}>
      {children}
    </RangeValueContext.Provider>
  )
};

export { RangeValueContext, RangeValueProvider };