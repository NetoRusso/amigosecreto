'use client';

import { createContext, useState } from "react";

export type GroupContextType = {
  groupName: string;
  setGroupName: (name: string) => void;
}

const GroupContext = createContext<GroupContextType>({} as GroupContextType);

const GroupProvider = ({ children }: { children: React.ReactNode }) => {

  const [ groupName, setGroupName ] = useState<string>("");

  return (
    <GroupContext.Provider value={{ groupName, setGroupName }}>
      {children}
    </GroupContext.Provider>
  )
}

export  { GroupContext, GroupProvider };