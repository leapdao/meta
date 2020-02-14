# Testnet Upgrade, 25 July 2019

## Upgrading Bridge

Deploy new Bridge contract and get it's address

```
truffle(rinkeby)> (await Bridge.new()).address

'0xc5D81fDEe89EeD1B7F7E3881A32D3Afcd1E59d0e'
```

Encode `upgradeTo` call for proposal. `0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9` is the current Bridge address (proxy), visible on Bridge UI.

```
truffle(rinkeby)> (await BridgeProxy.at("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9")).contract.methods.upgradeTo("0xc5D81fDEe89EeD1B7F7E3881A32D3Afcd1E59d0e").encodeABI()

'0x3659cfe6000000000000000000000000c5d81fdee89eed1b7f7e3881a32d3afcd1e59d0e'
```

Let's check the governance contract (owner) for the bridge.

```
truffle(rinkeby)> (await Bridge.at("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9")).admin()

'0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8'
```

`0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8` is the MinGov contract owned by our Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`.

Submit proposal

```
multisig> Call `propose("0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9", "0x3659cfe6000000000000000000000000c5d81fdee89eed1b7f7e3881a32d3afcd1e59d0e")` for MinGov contract at `0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

Proposal to upgrade the Bridge should be visible on Bridge UI at this point

## Upgrading ExitHandler

Deploy new FastExitHandler

```
truffle(rinkeby)> (await FastExitHandler.new()).address

'0xFd96542514B703e51Bd83911445a2a55A419FEd2'
```

encode `upgradeTo` call for proposal.

```
truffle(rinkeby)> (await ExitHandlerProxy.at("0x26a937302cc6A0A7334B210de06136C8C61BA885")).contract.methods.upgradeTo("0xFd96542514B703e51Bd83911445a2a55A419FEd2").encodeABI()

'0x3659cfe6000000000000000000000000fd96542514b703e51bd83911445a2a55a419fed2'
```

Submit proposal

```
multisig> Call `propose("0x26a937302cc6A0A7334B210de06136C8C61BA885", "0x3659cfe6000000000000000000000000fd96542514b703e51bd83911445a2a55a419fed2")` for MinGov contract at `0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```

## Upgrading SwapRegistry

Deploy new SwapRegistry implementation

```
truffle(rinkeby)> (await SwapRegistry.new()).address

'0xe6C59C12E84136A7C0165D912585eAa82f680C7A'
```

SwapRegistry is `0x282764334d03181dd836e893b45f7cece18a2151`. Let's check it is indeed the correct contract.
It should be the minter for LEAP token (`0xD2D0F8a6ADfF16C2098101087f9548465EC96C98`)

```
truffle(rinkeby)> (await NativeToken.at("0xD2D0F8a6ADfF16C2098101087f9548465EC96C98")).isMinter("0x282764334d03181dd836e893b45f7cece18a2151")

true
```

encode `upgradeTo` call for proposal.

```
truffle(rinkeby)> (await AdminableProxy.at("0x282764334d03181dd836e893b45f7cece18a2151")).contract.methods.upgradeTo("0xe6C59C12E84136A7C0165D912585eAa82f680C7A").encodeABI()

'0x3659cfe6000000000000000000000000e6c59c12e84136a7c0165d912585eaa82f680c7a'
```

Submit proposal. Note that SwapRegistry is owned by _other_ MinGov contract at `0x25ebCA7532A594bd0A044194b3274bCAE337790c`

```
multisig> Call `propose("0x282764334d03181dd836e893b45f7cece18a2151", "0x3659cfe6000000000000000000000000e6c59c12e84136a7c0165d912585eaa82f680c7a")` for MinGov contract at `0x25ebCA7532A594bd0A044194b3274bCAE337790c` via Rinkeby Multisig `0x03CAa70D57c9E98c0CeAf1EF95f9C9459B89f1Bf`
```
