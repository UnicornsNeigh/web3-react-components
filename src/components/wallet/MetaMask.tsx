import React from "react";
import metamask from "../../assets/img/metamask.png";
import WalletOption from "./WalletOption";

import { metaMask } from "../../connectors/metaMask";

const Metamask = () => {
  return (
    <WalletOption
      onClick={() => {
        metaMask
          .activate()
          .then((success) => {
            console.log(success);
          })
          .catch((err) => {
            console.log("failed");
            console.log(err);
          });
      }}
      text="MetaMask"
      src={metamask.src}
    />
  );
};

export default Metamask;
