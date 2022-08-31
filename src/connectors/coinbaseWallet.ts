import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { initializeConnector } from '@web3-react/core'
// import { URLS } from '../chains'
// random

const yo: string = "hi";


interface Bob {
    name: string;
    lastname: string;
}

export const [coinbaseWallet, hooks] = initializeConnector<CoinbaseWallet>(
    (actions) => {
        return new CoinbaseWallet({
            actions,
            options: {
                url: "https://mainnet.infura.io/v3/57aedaef2c1143a5b89d753a362a3f07",

                // @ts-ignore
                appName: 'web3-react',
            },
        })
    }

)



