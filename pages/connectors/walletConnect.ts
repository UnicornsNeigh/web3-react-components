import { initializeConnector } from '@web3-react/core'
import { WalletConnect } from '@web3-react/walletconnect'
// import { URLS } from '../chains'
// yo yo
// wee

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
    (actions) =>
        new WalletConnect({
            actions,
            options: {
                rpc: {
                    1: "https://mainnet.infura.io/v3/57aedaef2c1143a5b89d753a362a3f07"
                },
            },
        })
)
