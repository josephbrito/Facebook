import React from "react";
import Image from "next/image";

import { FiSearch } from "react-icons/fi";
import { HiHome, HiOutlineUserGroup } from "react-icons/hi";
import { FaUserFriends, FaFacebookMessenger, FaBell } from "react-icons/fa";
import { BsFillDisplayFill } from "react-icons/bs";
import { IoStorefront } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineCaretDown } from "react-icons/ai";

import { Container, LeftSide, InputBox, Search, Center, Menu } from "./styles";

interface Props {
  profile: string;
  name: string;
}
<style jsx global>{`
  .photo {
    border-radius: 50%;
  }
`}</style>;

const Header: React.FC<Props> = ({ profile, name }: Props) => {
  return (
    <Container>
      {/* Logo and Input Left */}
      <LeftSide>
        <Image
          src="/images/logo.svg"
          height="100%"
          width="50px"
          className="photo"
        />
        <InputBox>
          <FiSearch />
          <Search placeholder="Pesquisar no Facebook" />
        </InputBox>
      </LeftSide>

      {/* Routes Center */}
      <Center>
        <div>
          <HiHome />
        </div>
        <div>
          <FaUserFriends />
        </div>
        <div>
          <BsFillDisplayFill />
        </div>
        <div>
          <IoStorefront />
        </div>
        <div>
          <HiOutlineUserGroup />
        </div>
      </Center>

      {/* Menu Right */}
      <Menu>
        <div className="profile">
          <div>
            <Image src={profile} height="100%" width="100%" className="photo" />
          </div>
          <span>{name}</span>
        </div>

        <div>
          <CgMenuGridO />
        </div>
        <div>
          <FaFacebookMessenger />
        </div>
        <div>
          <FaBell />
        </div>
        <div>
          <AiOutlineCaretDown />
        </div>
      </Menu>
    </Container>
  );
};

export default Header;
