import { useState, createContext, ReactNode, useContext } from "react";

interface IPropsStatusContext {
  status: string[];
  setStatus: (arg: string[]) => void;
}

const DEFAULT_VALUE = {
  status: [],
  setStatus: () => {},
};

const Status = createContext<IPropsStatusContext>(DEFAULT_VALUE);

export function StatusProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<string[]>(DEFAULT_VALUE.status);

  return (
    <Status.Provider value={{ status, setStatus }}>{children}</Status.Provider>
  );
}

export function useStatus() {
  const { status, setStatus } = useContext(Status);

  return { status, setStatus };
}
