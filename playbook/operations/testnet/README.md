# LeapDAO testnet

Root network: Rinkeby

JSON RPC: 
- https://testnet-node.leapdao.org
- wss://testnet-node.leapdao.org

Bridge UI: https://testnet.leapdao.org

## Node

Code version: [5.4.1](https://github.com/leapdao/leap-node/releases/tag/v5.4.1)

Validator nodes:
  
- community node (operated by @troggy)
- Evgeni's node (operated by @eshavkun)

## Contracts

Code version: [1.3.1](https://github.com/leapdao/leap-contracts/releases/tag/v1.3.1)


Name | Proxy | Implementation
------------ | ------------- | -----------
Bridge | 0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9[⎆](https://rinkeby.etherscan.io/address/0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9) | ~0xDcCc5b16102c8BfE0356Be979Ca93A2D5167849B~ ~0xc5D81fDEe89EeD1B7F7E3881A32D3Afcd1E59d0e~ ~0xB703EaBbf5453107E12212205f4e27eB610463d3~ 0xc612D961FF8aD1bf20370EcF521bd843859D689a[⎆](https://rinkeby.etherscan.io/address/0xc612D961FF8aD1bf20370EcF521bd843859D689a)
ExitHandler | 0x26a937302cc6A0A7334B210de06136C8C61BA885[⎆](https://rinkeby.etherscan.io/address/0x26a937302cc6A0A7334B210de06136C8C61BA885) | ~0x95D6B9754745b7Fc8A89797DD1e73AA7ee6eE442~ ~0xFd96542514B703e51Bd83911445a2a55A419FEd2~ ~0x7224ee317e29369e1106695d0c2013C639394E87~ 0x3bEED3b62f1Aab3DF5C7BFdf19936608F63eAD1A[⎆](https://rinkeby.etherscan.io/address/0x3bEED3b62f1Aab3DF5C7BFdf19936608F63eAD1A)
PoaOperator | 0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9[⎆](https://rinkeby.etherscan.io/address/0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9) | ~0xAB2c02d49Ccc900301bCA16DB06A3eBF17AA69b0~ ~0xE1BDb2e17351DE79f9Df23c1756FC0d7C46483F6~ 0x5f6E851895C0e2443F54353d972043C229eD1B2c[⎆](https://rinkeby.etherscan.io/address/0x5f6E851895C0e2443F54353d972043C229eD1B2c)
SwapRegistry | 0x282764334d03181dd836e893b45f7cece18a2151[⎆](https://rinkeby.etherscan.io/address/0x282764334d03181dd836e893b45f7cece18a2151) | 0xe6C59C12E84136A7C0165D912585eAa82f680C7A[⎆](https://rinkeby.etherscan.io/address/0xe6C59C12E84136A7C0165D912585eAa82f680C7A)
MinGov | 0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d[⎆](https://rinkeby.etherscan.io/address/0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d) |
LEAP Token | 0xD2D0F8a6ADfF16C2098101087f9548465EC96C98[⎆](https://rinkeby.etherscan.io/address/0xD2D0F8a6ADfF16C2098101087f9548465EC96C98) |


## Config

```
{
  "exitHandlerAddr": "0x26a937302cc6A0A7334B210de06136C8C61BA885",
  "bridgeAddr": "0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9",
  "operatorAddr": "0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9",
  "rootNetworkId": 4,
  "network": "leap-testnet-theta",
  "networkId": 218508104,
  "eventsDelay": 2,
  "bridgeDelay": 6,
  "genesis": {
    "genesis_time": "2019-05-23T12:23:22.546083464Z",
    "chain_id": "test-chain-H5Ijd9",
    "consensus_params": {
      "block": {
        "max_bytes": "22020096",
        "max_gas": "-1",
        "time_iota_ms": "1000"
      },
      "evidence": {
        "max_age": "100000"
      },
      "validator": {
        "pub_key_types": [
          "ed25519"
        ]
      }
    },
    "validators": [
      {
        "address": "4881A447F30F484F046859530083FD27C5F7A70B",
        "pub_key": {
          "type": "tendermint/PubKeyEd25519",
          "value": "Su7amMRUBc+MinqO026cuI3Q4jinwx0KJRdjXDp4Rao="
        },
        "power": "10",
        "name": ""
      }
    ],
    "app_hash": ""
  },
  "peers": [
    "cc30db6d116ca6ff440277c8e13e3ca253a774e7@sen1.testnet.leapdao.org:46691",
    "23d57231b620575c03f0e136fc37b5ec5812bb35@val.testnet.leapdao.org:46691",
    "deb472911a7a0ff3867b39c6ffa375ddbb42db5d@sen2.testnet.leapdao.org:46691",
    "5d27949fb42efc829bdc663f914fe0c069a96f2d@54.72.111.55:46691"
  ],
  "flagHeights": {
    "spend_cond_stricter_rules": 100000,
    "spend_cond_new_bytecode": 41000
  }
}
```

Live version of the config: https://github.com/leapdao/leap-node/blob/master/presets/leap-testnet.json
