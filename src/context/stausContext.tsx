import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
} from "react";

type PropsStatusContext = {
  status: string[];
  setStatus: Dispatch<SetStateAction<any>>;
};

const DEFAULT_VALUE = {
  status: [],
  setStatus: () => {},
};

interface Props {
  children: ReactNode;
}

const Status = createContext<PropsStatusContext>(DEFAULT_VALUE);

export function StatusProvider({ children }: Props) {
  const [status, setStatus] = useState(DEFAULT_VALUE.status);
  console.log(status);

  return (
    <Status.Provider value={{ status, setStatus }}>{children}</Status.Provider>
  );
}

export function useStatus() {
  const { status, setStatus } = useContext(Status);

  return { status, setStatus };
}
