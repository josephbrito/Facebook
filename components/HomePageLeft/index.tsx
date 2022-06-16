import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaUserFriends } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoStorefront } from "react-icons/io5";
import { BsFillDisplayFill } from "react-icons/bs";
import { AiFillClockCircle, AiFillFlag, AiFillStar } from "react-icons/ai";
import { GiEuropeanFlag } from "react-icons/gi";
import { RiClapperboardLine } from "react-icons/ri";
import { IoChevronDownCircle } from "react-icons/io5";
import { CgGames } from "react-icons/cg";
import { ImBooks } from "react-icons/im";
import { GiNinjaStar } from "react-icons/gi";

import Options from "../Options";

import { Container, Division, ShortCut, Title } from "./styles";

const HomePageLeft: React.FC = () => {
  return (
    <Container>
      <Options text="José">
        <Image src="/images/avatar.jpg" height="25px" width="25px" />
      </Options>
      <Options text="Encontrar amigos">
        <FaUserFriends />
      </Options>
      <Options text="Grupos">
        <HiOutlineUserGroup />
      </Options>
      <Options text="Marketplace">
        <IoStorefront />
      </Options>
      <Options text="Watch">
        <BsFillDisplayFill />
      </Options>
      <Options text="Lembranças">
        <AiFillClockCircle />
      </Options>
      <Options text="Salvos">
        <GiEuropeanFlag />
      </Options>
      <Options text="Páginas">
        <AiFillFlag />
      </Options>
      <Options text="Eventos">
        <AiFillStar />
      </Options>
      <Options text="Mais recentes">
        <RiClapperboardLine />
      </Options>
      <Options text="Ver mais">
        <IoChevronDownCircle />
      </Options>
      <Division />
      <ShortCut>
        <Title>
          <h2>Seus atalhos</h2>
          <Link href="/">
            <a className="link">Editar</a>
          </Link>
        </Title>
        <Options text="Critical Ops">
          <CgGames />
        </Options>
        <Options text="Livros">
          <ImBooks />
        </Options>
        <Options text="Naruto">
          <GiNinjaStar />
        </Options>
      </ShortCut>
    </Container>
  );
};

export default HomePageLeft;
