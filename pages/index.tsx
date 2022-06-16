import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomePage from "../components/HomePage";
import HomePageLeft from "../components/HomePageLeft";
import HomePageCenter from "../components/HomePageCenter";

const Home: NextPage = () => (
  <>
    <HomePage>
      <HomePageLeft />
      <HomePageCenter />
    </HomePage>
  </>
);

export default Home;
