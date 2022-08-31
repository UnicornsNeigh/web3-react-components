import React from "react";
import type { NextPage } from "next";
import { Wallet } from "../dist/components/index";
import { print } from "../dist/connectors/walletConnect";

const Home: NextPage = () => {
  print("hi");

  return <Wallet />;
};

export default Home;
