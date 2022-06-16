import React from "react";
import Post from "../Post";
import Status from "../Status";
import Storys from "../Storys";
import StorysContainer from "../StorysContainer";

import { Container } from "./styles";

const HomePageCenter: React.FC = () => {
  return (
    <Container>
      <StorysContainer />
      <Status />
      <Post />
    </Container>
  );
};

export default HomePageCenter;
