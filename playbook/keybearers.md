## Keybearer Role

### Adding Bounty support to Gnosis Safe

Bounty Payout Contract on Mainnet: `0x572d03FD45E85d5ca0BCd3679c99000D23A6b8f1`

1. Use our fork at safe.leapdao.org (see leadao/leap-safe repo for source code)
2. Approve Bounty Payout contract to pull DAI from your Safe: create a custom TX to `0x6B175474E89094C44Da98b954EedeAC495271d0F` (DAI) with msgData `0x095ea7b3000000000000000000000000572d03fd45e85d5ca0bcd3679c99000d23a6b8f100000000000000000000000000000000000000000000021e19e0c9bab2400000`. Or create msg data by yourself (this is an ERC20 `approve` call)
3. Whitelist your safe on Bounty Payout contract: call `addWhitelisted(<your safe address>)` from the Bounty Payout admin account (LeapDAO General Escrow) 
4. Enable DAI token in your Safe
