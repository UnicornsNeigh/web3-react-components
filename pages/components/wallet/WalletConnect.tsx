import walletconnect from "../../assets/svg/wallet-connect.svg";
import WalletOption from "./WalletOption";

import { walletConnect } from "../../connectors/walletConnect";

const Metamask = () => {
  return (
    <WalletOption
      onClick={() => {
        walletConnect
          .activate()
          .then((success) => {
            console.log(success);
          })
          .catch((err) => {
            console.log("failed");
            console.log(err);
          });
      }}
      text="WalletConnect"
      src={walletconnect.src}
    />
  );
};

export default Metamask;
