# Testnet Upgrade, 9 August 2019

## Upgrade ExitHandler

```
truffle(rinkeby)> (await FastExitHandler.new()).address

'0x7224ee317e29369e1106695d0c2013C639394E87'
```

```
truffle(rinkeby)> (await ExitHandlerProxy.at("0x26a937302cc6A0A7334B210de06136C8C61BA885")).contract.methods.upgradeTo("0x7224ee317e29369e1106695d0c2013C639394E87").encodeABI()

'0x3659cfe60000000000000000000000007224ee317e29369e1106695d0c2013c639394e87'
```

```
multisig> Call `propose("0x26a937302cc6A0A7334B210de06136C8C61BA885", "0x3659cfe60000000000000000000000007224ee317e29369e1106695d0c2013c639394e87")` for MinGov contract at `0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## Upgrade Bridge

```
truffle(rinkeby)> (await Bridge.new()).address

'0xB703EaBbf5453107E12212205f4e27eB610463d3'
```

```
truffle(rinkeby)> (await BridgeProxy.at("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9")).contract.methods.upgradeTo("0xB703EaBbf5453107E12212205f4e27eB610463d3").encodeABI()

'0x3659cfe6000000000000000000000000b703eabbf5453107e12212205f4e27eb610463d3'
```

```
multisig> Call `propose("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9", "0x3659cfe6000000000000000000000000b703eabbf5453107e12212205f4e27eb610463d3")` for MinGov contract at `0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## Upgrade Operator

```
truffle(rinkeby)> (await PoaOperator.new()).address

'0xE1BDb2e17351DE79f9Df23c1756FC0d7C46483F6'
```

```
truffle(rinkeby)> (await OperatorProxy.at("0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9")).contract.methods.upgradeTo("0xE1BDb2e17351DE79f9Df23c1756FC0d7C46483F6").encodeABI()

'0x3659cfe6000000000000000000000000e1bdb2e17351de79f9df23c1756fc0d7c46483f6'
```

```
multisig> Call `propose("0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9", "0x3659cfe6000000000000000000000000e1bdb2e17351de79f9df23c1756fc0d7c46483f6")` for MinGov contract at `0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## deploy new governance, same proposal time (600 seconds)

```
truffle(rinkeby)> (await MinGov.new(600)).address

'0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d'
```

## transfer it to Rinkeby Multisig

```
truffle(rinkeby)> (await MinGov.at("0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d")).transferOwnership
("0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf")
```

## encode `changeAdmin("0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d")`

```
truffle(rinkeby)> (await AdminUpgradeabilityProxy.at("0x26a937302cc6A0A7334B210de06136C8C61BA885")).contract.methods.changeAdmin("0xdD067b6ed19929Cc79d84ce9Ff25bE31Ae5B3d5d").encodeABI()

'0x8f283970000000000000000000000000dd067b6ed19929cc79d84ce9ff25be31ae5b3d5d'
```

## change admin for ExitHandlerProxy

```
multisig> Call `propose("0x26a937302cc6A0A7334B210de06136C8C61BA885", "0x8f283970000000000000000000000000dd067b6ed19929cc79d84ce9ff25be31ae5b3d5d")` for MinGov contract at `0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## change admin for BridgeProxy

```
multisig> Call `propose("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9", "0x8f283970000000000000000000000000dd067b6ed19929cc79d84ce9ff25be31ae5b3d5d")` for MinGov contract at `0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## change admin for OperatorProxy

```
multisig> Call `propose("0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9", "0x8f283970000000000000000000000000dd067b6ed19929cc79d84ce9ff25be31ae5b3d5d")` for MinGov contract at `0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## change admin for SwapRegistry

```
multisig> Call `propose("0x282764334d03181dd836e893b45f7cece18a2151", "0x8f283970000000000000000000000000dd067b6ed19929cc79d84ce9ff25be31ae5b3d5d")` for MinGov contract at `0x25ebCA7532A594bd0A044194b3274bCAE337790c` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```