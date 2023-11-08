import { CryptoCurrency } from "@ledgerhq/types-cryptoassets";

export const TICKERS = [
  "BTC",
  "ETH",
  "USDT",
  "BNB",
  "XRP",
  "USDC",
  "SOL",
  "ADA",
  "DOGE",
  "TRX",
  "TON",
  "LINK",
  "MATIC",
  "DOT",
  "WBTC",
  "DAI",
  "LTC",
  "BCH",
  "SHIB",
  "AVAX",
  "LEO",
  "XLM",
  "TUSD",
  "XMR",
  "ATOM",
  "OKB",
  "ETC",
  "UNI",
  "BUSD",
  "NEAR",
  "INJ",
  "EGLD",
  "XTZ",
  "CELO",
  "OSMO",
  "AXL",
  "XPRT",
  "NOM",
];

export const CURRENCIES_LIST: CryptoCurrency[] = [
  {
    type: "CryptoCurrency",
    id: "axelar",
    coinType: 118,
    name: "Axelar",
    managerAppName: "Cosmos",
    ticker: "AXL",
    scheme: "axelar",
    color: "#b2b6bc",
    family: "cosmos",
    units: [
      {
        name: "Axelar",
        code: "AXL",
        magnitude: 6,
      },
      {
        name: "Micro-Axelar",
        code: "uaxl",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        tx: "https://www.mintscan.io/axelar/txs/$hash",
        address: "https://www.mintscan.io/axelar/validators/$address",
      },
    ],
  },
  {
    type: "CryptoCurrency",
    id: "onomy",
    coinType: 118,
    name: "Onomy",
    managerAppName: "Cosmos",
    ticker: "NOM",
    scheme: "onomy",
    color: "#8c94d3",
    family: "cosmos",
    units: [
      {
        name: "Onomy",
        code: "NOM",
        magnitude: 18,
      },
      {
        name: "Micro-Onomy",
        code: "anom",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        tx: "https://www.mintscan.io/onomy-protocol/txs/$hash",
        address: "https://www.mintscan.io/onomy-protocl/validators/$address",
      },
    ],
  },
  {
    type: "CryptoCurrency",
    id: "quicksilver",
    coinType: 118,
    name: "Quicksilver",
    managerAppName: "Cosmos",
    ticker: "QCK",
    scheme: "quicksilver",
    color: "#9b9b9b",
    family: "cosmos",
    units: [
      {
        name: "Quicksilver",
        code: "QCK",
        magnitude: 6,
      },
      {
        name: "Micro-Quicksilver",
        code: "uqck",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        tx: "https://www.mintscan.io/quicksilver/txs/$hash",
        address: "https://www.mintscan.io/quicksilver/validators/$address",
      },
    ],
  },
  {
    type: "CryptoCurrency",
    id: "persistence",
    coinType: 118,
    name: "Persistence",
    managerAppName: "Cosmos",
    ticker: "XPRT",
    scheme: "persistence",
    color: "#e50a13",
    family: "cosmos",
    units: [
      {
        name: "Persistence",
        code: "XPRT",
        magnitude: 6,
      },
      {
        name: "Micro-Persistence",
        code: "uxprt",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        tx: "https://www.mintscan.io/persistence/txs/$hash",
        address: "https://www.mintscan.io/persistence/validators/$address",
      },
    ],
  },
  {
    type: "CryptoCurrency",
    id: "ethereum",
    coinType: 60,
    name: "Ethereum",
    managerAppName: "Ethereum",
    ticker: "ETH",
    scheme: "ethereum",
    color: "#0ebdcd",
    symbol: "Ξ",
    family: "evm",
    blockAvgTime: 15,
    units: [
      {
        name: "ether",
        code: "ETH",
        magnitude: 18,
      },
      {
        name: "Gwei",
        code: "Gwei",
        magnitude: 9,
      },
      {
        name: "Mwei",
        code: "Mwei",
        magnitude: 6,
      },
      {
        name: "Kwei",
        code: "Kwei",
        magnitude: 3,
      },
      {
        name: "wei",
        code: "wei",
        magnitude: 0,
      },
    ],
    ethereumLikeInfo: {
      chainId: 1,
      node: {
        type: "ledger",
        explorerId: "eth",
      },
      explorer: {
        type: "ledger",
        explorerId: "eth",
      },
      gasTracker: {
        type: "ledger",
        explorerId: "eth",
      },
    },
    explorerViews: [
      {
        tx: "https://etherscan.io/tx/$hash",
        address: "https://etherscan.io/address/$address",
        token: "https://etherscan.io/token/$contractAddress?a=$address",
      },
    ],
    keywords: ["eth", "ethereum"],
    explorerId: "eth",
  },
  {
    type: "CryptoCurrency",
    id: "polkadot",
    coinType: 354,
    name: "Polkadot",
    managerAppName: "Polkadot",
    ticker: "DOT",
    scheme: "polkadot",
    color: "#E6007A",
    family: "polkadot",
    units: [
      {
        name: "DOT",
        code: "DOT",
        magnitude: 10,
      },
      {
        name: "planck",
        code: "PLANCK",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        address: "https://polkadot.subscan.io/account/$address",
        tx: "https://polkadot.subscan.io/extrinsic/$hash",
      },
      {
        address: "https://polkascan.io/polkadot/account/$address",
        tx: "https://polkascan.io/polkadot/transaction/$hash",
      },
    ],
    keywords: ["dot", "polkadot"],
  },
  {
    type: "CryptoCurrency",
    id: "solana",
    coinType: 501,
    name: "Solana",
    managerAppName: "Solana",
    ticker: "SOL",
    scheme: "solana",
    color: "#000",
    family: "solana",
    units: [
      {
        name: "SOL",
        code: "SOL",
        magnitude: 9,
      },
      {
        name: "lamports",
        code: "lamports",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        address: "https://explorer.solana.com/address/$address",
        tx: "https://explorer.solana.com/tx/$hash",
      },
      {
        address: "https://solanabeach.io/address/$address",
        tx: "https://solanabeach.io/transaction/$hash",
      },
    ],
    keywords: ["sol", "solana"],
  },
  {
    type: "CryptoCurrency",
    id: "cosmos",
    coinType: 118,
    name: "Cosmos",
    managerAppName: "Cosmos",
    ticker: "ATOM",
    scheme: "cosmos",
    color: "#16192f",
    family: "cosmos",
    units: [
      {
        name: "Atom",
        code: "ATOM",
        magnitude: 6,
      },
      {
        name: "microAtom",
        code: "uatom",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        tx: "https://www.mintscan.io/cosmos/txs/$hash",
        address: "https://www.mintscan.io/cosmos/validators/$address",
      },
    ],
    keywords: ["atom", "cosmos"],
  },
  {
    type: "CryptoCurrency",
    id: "celo",
    coinType: 52752,
    name: "Celo",
    managerAppName: "Celo",
    blockAvgTime: 5,
    ticker: "CELO",
    scheme: "celo",
    color: "#35D07F",
    family: "celo",
    units: [
      {
        name: "CELO",
        code: "CELO",
        magnitude: 18,
      },
    ],
    explorerViews: [
      {
        tx: "https://explorer.celo.org/tx/$hash",
        address: "https://explorer.celo.org/address/$address",
      },
    ],
  },
  {
    type: "CryptoCurrency",
    id: "tezos",
    coinType: 1729,
    name: "Tezos",
    managerAppName: "Tezos Wallet",
    ticker: "XTZ",
    scheme: "tezos",
    color: "#007BFF",
    family: "tezos",
    blockAvgTime: 60,
    units: [
      {
        name: "XTZ",
        code: "XTZ",
        magnitude: 6,
      },
    ],
    explorerViews: [
      {
        tx: "https://tzkt.io/$hash",
        address: "https://tzkt.io/$address",
      },
    ],
  },
  {
    type: "CryptoCurrency",
    id: "elrond",
    coinType: 508,
    name: "MultiversX",
    managerAppName: "MultiversX",
    ticker: "EGLD",
    scheme: "elrond",
    color: "#23F7DD",
    family: "elrond",
    blockAvgTime: 6,
    deviceTicker: "EGLD",
    units: [
      {
        name: "EGLD",
        code: "EGLD",
        magnitude: 18,
      },
    ],
    explorerViews: [
      {
        tx: "https://explorer.elrond.com/transactions/$hash",
        address: "https://explorer.elrond.com/accounts/$address",
      },
    ],
    keywords: ["elrond"],
  },
  {
    type: "CryptoCurrency",
    id: "cardano",
    coinType: 1815,
    name: "Cardano",
    managerAppName: "Cardano ADA",
    ticker: "ADA",
    scheme: "cardano",
    color: "#0A1D2C",
    family: "cardano",
    blockAvgTime: 20,
    units: [
      {
        name: "ada",
        code: "ADA",
        magnitude: 6,
      },
      {
        name: "Lovelace",
        code: "Lovelace",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        tx: "https://cardanoscan.io/transaction/$hash",
        address: "https://cardanoscan.io/address/$address",
        stakePool: "https://cardanoscan.io/pool/$poolId",
      },
    ],
    keywords: ["ada", "cardano"],
  },
  {
    type: "CryptoCurrency",
    id: "osmo",
    coinType: 118,
    name: "Osmosis",
    managerAppName: "Cosmos",
    ticker: "OSMO",
    scheme: "osmo",
    color: "#493c9b",
    family: "cosmos",
    units: [
      {
        name: "Osmosis",
        code: "OSMO",
        magnitude: 6,
      },
      {
        name: "Micro-OSMO",
        code: "uosmo",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        tx: "https://www.mintscan.io/osmosis/txs/$hash",
        address: "https://www.mintscan.io/osmosis/validators/$address",
      },
    ],
  },
  {
    type: "CryptoCurrency",
    id: "near",
    coinType: 397,
    name: "NEAR",
    managerAppName: "NEAR",
    ticker: "NEAR",
    scheme: "near",
    color: "#000",
    family: "near",
    units: [
      {
        name: "NEAR",
        code: "NEAR",
        magnitude: 24,
      },
      {
        name: "yoctoNEAR",
        code: "yoctoNEAR",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        address: "https://explorer.near.org/accounts/$address",
        tx: "https://explorer.near.org/transactions/$hash",
      },
    ],
    keywords: ["near"],
  },
  {
    type: "CryptoCurrency",
    id: "injective",
    coinType: 60,
    name: "Injective",
    managerAppName: "Cosmos",
    ticker: "INJ",
    scheme: "injective",
    color: "#0bd",
    family: "cosmos",
    units: [
      {
        name: "Injective",
        code: "INJ",
        magnitude: 18,
      },
      {
        name: "Micro-Injective",
        code: "inj",
        magnitude: 0,
      },
    ],
    explorerViews: [
      {
        tx: "https://www.mintscan.io/injective/txs/$hash",
        address: "https://www.mintscan.io/injective/validators/$address",
      },
    ],
  },
];
