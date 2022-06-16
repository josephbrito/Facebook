import Image from "next/image";
import React from "react";

import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
  text: string;
}

const Options: React.FC<Props> = ({ children, text }: Props) => {
  return (
    <Container>
      {children}
      <span>{text}</span>
    </Container>
  );
};

export default Options;
