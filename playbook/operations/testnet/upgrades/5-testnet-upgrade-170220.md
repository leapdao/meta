# Testnet Upgrade, 17 February 2020

Upgrading to leap-contracts@1.4.0

## Update PoaOperator

```sh
truffle(rinkeby)> (await PoaOperator.new()).address

'0x0E6E2B69b563dd1690AE073B55cb24C5A0a2Da9C'
```

```sh
truffle(rinkeby)> (await OperatorProxy.at("0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9")).contract.methods.upgradeTo("0x0E6E2B69b563dd1690AE073B55cb24C5A0a2Da9C").encodeABI()

'0x3659cfe60000000000000000000000000e6e2b69b563dd1690ae073b55cb24c5a0a2da9c'
```

```sh
multisig> Call `propose("0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9", "0x3659cfe60000000000000000000000000e6e2b69b563dd1690ae073b55cb24c5a0a2da9c")` for MinGov contract at `0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## Update ExitHandler

```sh
truffle(rinkeby)> (await FastExitHandler.new()).address

'0x247F8cB4975668cbA93b1D3EEFDe29B4c185C7D6'
```

```sh
truffle(rinkeby)> (await ExitHandlerProxy.at("0x26a937302cc6A0A7334B210de06136C8C61BA885")).contract.methods.upgradeTo("0x247F8cB4975668cbA93b1D3EEFDe29B4c185C7D6").encodeABI()

'0x3659cfe6000000000000000000000000247f8cb4975668cba93b1d3eefde29b4c185c7d6'
```

```sh
multisig> Call `propose("0x26a937302cc6A0A7334B210de06136C8C61BA885", "0x3659cfe6000000000000000000000000247f8cb4975668cba93b1d3eefde29b4c185c7d6")` for MinGov contract at `0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```


## Update Bridge

```sh
truffle(rinkeby)> (await Bridge.new()).address

'0xDE06DB8662542AF5b062a09285d5D52Ed3524a37'
```

```sh
truffle(rinkeby)> (await BridgeProxy.at("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9")).contract.methods.upgradeTo("0xDE06DB8662542AF5b062a09285d5D52Ed3524a37").encodeABI()

'0x3659cfe6000000000000000000000000de06db8662542af5b062a09285d5d52ed3524a37'
```

```sh
multisig> Call `propose("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9", "0x3659cfe6000000000000000000000000de06db8662542af5b062a09285d5d52ed3524a37")` for MinGov contract at `0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```


### Finalize proposals

```sh
truffle(rinkeby)> (await MinGov.at("0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d")).finalize()
```

### Rebuild taken slots bitmap

```sh
truffle(rinkeby)> (await PoaOperator.at("0x0E6E2B69b563dd1690AE073B55cb24C5A0a2Da9C")).rebuildTakenSlots()

```