# Testnet Upgrade, 19 November 2019

## Upgrade ExitHandler

```
truffle(rinkeby)> (await FastExitHandler.new()).address

'0x3bEED3b62f1Aab3DF5C7BFdf19936608F63eAD1A'
```

```
truffle(rinkeby)> (await ExitHandlerProxy.at("0x26a937302cc6A0A7334B210de06136C8C61BA885")).contract.methods.upgradeTo("0x3bEED3b62f1Aab3DF5C7BFdf19936608F63eAD1A").encodeABI()

'0x3659cfe60000000000000000000000003beed3b62f1aab3df5c7bfdf19936608f63ead1a'
```

```
multisig> Call `propose("0x26a937302cc6A0A7334B210de06136C8C61BA885", "0x3659cfe60000000000000000000000003beed3b62f1aab3df5c7bfdf19936608f63ead1a")` for MinGov contract at `0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## Upgrade Bridge

```
truffle(rinkeby)> (await Bridge.new()).address

'0xc612D961FF8aD1bf20370EcF521bd843859D689a'
```

```
truffle(rinkeby)> (await BridgeProxy.at("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9")).contract.methods.upgradeTo("0xc612D961FF8aD1bf20370EcF521bd843859D689a").encodeABI()

'0x3659cfe6000000000000000000000000c612d961ff8ad1bf20370ecf521bd843859d689a'
```

```
multisig> Call `propose("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9", "0x3659cfe6000000000000000000000000c612d961ff8ad1bf20370ecf521bd843859d689a")` for MinGov contract at `0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## Upgrade Operator

```
truffle(rinkeby)> (await PoaOperator.new()).address

'0x5f6E851895C0e2443F54353d972043C229eD1B2c'
```

```
truffle(rinkeby)> (await OperatorProxy.at("0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9")).contract.methods.upgradeTo("0x5f6E851895C0e2443F54353d972043C229eD1B2c").encodeABI()

'0x3659cfe60000000000000000000000005f6e851895c0e2443f54353d972043c229ed1b2c'
```

```
multisig> Call `propose("0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9", "0x3659cfe60000000000000000000000005f6e851895c0e2443f54353d972043c229ed1b2c")` for MinGov contract at `0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## Set Epoch Length to 2

```
truffle(rinkeby)> (await PoaOperator.at("0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9")).contract.methods.setEpochLength(2).encodeABI()

'0x54eea7960000000000000000000000000000000000000000000000000000000000000002'
```

```
multisig> Call `propose("0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9", "0x54eea7960000000000000000000000000000000000000000000000000000000000000002")` for MinGov contract at `0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```