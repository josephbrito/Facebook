import React from "react";

import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const HomePage: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default HomePage;
