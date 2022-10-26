import React from "react";

import Image from "next/image";

import { Container, PostContainer, Info, Message, Icons, Icon } from "./styles";

import { useStatus } from "../../src/context/stausContext";

import { AiFillLike } from "react-icons/ai";
import { BsFillChatLeftFill } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { Division } from "../HomePageLeft/styles";

const Post: React.FC = () => {
  const { status } = useStatus();

  return (
    <Container>
      {status &&
        status.map((s) => (
          <PostContainer key={status.length - 1}>
            <Info>
              <Image src="/images/avatar.jpg" height="40" width="40" />
              <span>José</span>
            </Info>

            <Message>{s}</Message>

            <Division />

            <Icons>
              <Icon>
                <AiFillLike />
                <span>Curtir</span>
              </Icon>
              <Icon>
                <BsFillChatLeftFill />
                <span>Comentários</span>
              </Icon>
              <Icon>
                <RiShareForwardFill />
                <span>Compartilhar</span>
              </Icon>
            </Icons>
          </PostContainer>
        ))}
    </Container>
  );
};

export default Post;
