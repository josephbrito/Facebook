import React from "react";
import { StatusProvider } from "../../src/context/stausContext";
import Header from "../Header";

import { Main } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <StatusProvider>
      <Header profile="/images/avatar.jpg" name="José" />
      <Main>{children}</Main>
    </StatusProvider>
  );
};

export default Layout;
