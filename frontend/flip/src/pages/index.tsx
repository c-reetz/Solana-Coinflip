import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Coinflip</title>
        <meta name="description" content="Solana Coinflip" />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
