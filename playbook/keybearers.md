## Keybearer Role


### Setting up Gnosis Safe to work with Bounty Payouts

Bounty Payout Contract on Mainnet: `0x600932fc01b906967a98d4d13c779c64347755b5`

1. Use our fork at safe.leapdao.org (see leadao/leap-safe repo for source code)
2. Approve Bounty Payout contract to pull DAI from your Safe: create a contract interaction TX to `0x6B175474E89094C44Da98b954EedeAC495271d0F` (DAI). Call `approve` for `0x600932fc01b906967a98d4d13c779c64347755b5` and supply big enough value e.g. `30000000000000000000000`.
3. Whitelist your safe on Bounty Payout contract: call `addWhitelisted(<your safe address>)` from the Bounty Payout admin account (LeapDAO General Escrow Multisig or LeapDAO Safe) 
4. Enable DAI token in your Safe
5. (optional, needed to use fee refund feature) Deposit enough ether in your Safe (at least 0.1 should be available at the tx execution time)

### Fee refund feature

New experimental feature is available on safe.leapdao.org now: ability to refund execution tx fee from the safe itself, so that tx execution is “free” for the signers.

To use it, you safe should have enough ether at the the tx execution time (at least 0.1). Then you can set "Refund execution tx fee" checkbox when creating new bounty payout tx.
