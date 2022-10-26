import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";

import { Division } from "../HomePageLeft/styles";
import {
  Container,
  WriteBox,
  Photo,
  Input,
  Actions,
  Action,
  ActionName,
} from "./styles";

import { IoMdPhotos } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { BiHappyAlt } from "react-icons/bi";

import { useStatus } from "../../src/context/stausContext";

const Status: React.FC = () => {
  const [text, setText] = useState<string>("");

  const { status, setStatus } = useStatus();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text) {
      setStatus([...status, text]);
      setText("");
    } else {
      return;
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <WriteBox>
        <Photo>
          <Image src="/images/avatar.jpg" height="50px" width="50px" />
        </Photo>
        <Input
          type="text"
          placeholder="No que você está pensando, José?"
          onChange={handleInputChange}
          value={text}
        />
      </WriteBox>
      <Division />
      <Actions>
        <Action>
          <IoMdPhotos />
          <ActionName>Foto/vídeo</ActionName>
        </Action>

        <Action>
          <BsFillPersonFill />
          <ActionName>Marcar amigos</ActionName>
        </Action>

        <Action>
          <BiHappyAlt />
          <ActionName>Sentimento/atividade</ActionName>
        </Action>
      </Actions>
    </Container>
  );
};

export default Status;
