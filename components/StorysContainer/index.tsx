import React from "react";
import Storys from "../Storys";

import { Container } from "./styles";

const StorysContainer: React.FC = () => {
  return (
    <Container>
      <Storys />
      <Storys />
      <Storys />
      <Storys />
    </Container>
  );
};

export default StorysContainer;
