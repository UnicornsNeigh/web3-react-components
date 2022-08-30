import styled from "styled-components";

import Coinbase from "./wallet/Coinbase";
import Metamask from "./wallet/MetaMask";
import WalletConnect from "./wallet/WalletConnect";

const Wrap = styled.div`
  width: 300px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const Wallet = () => {
  return (
    <Wrap>
      <Coinbase />
      <Metamask />
      <WalletConnect />
    </Wrap>
  );
};

export default Wallet;
