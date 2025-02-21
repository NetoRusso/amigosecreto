'use client';
import React, { createContext, useContext, useState } from "react";

export interface DateContextType { 
  selectDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

const DateContext = createContext<DateContextType | undefined>(undefined);


const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <DateContext.Provider value={{ selectDate: selectedDate, setSelectedDate }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = (): DateContextType => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("DateContext não foi encontrado, certifique-se de que o DateProvider esteja sendo usado dentro do seu componente.");
  }
  return context;
}

export { DateContext, DateProvider };