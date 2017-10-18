    AIP: <to be assigned>
    Title: bite
    Author: Kosta, Johann
    Status: Draft
    Created: 2017-10-18


## Simple Summary

tbd

## Abstract

implement an economy that creates a better experience for more players

## Motivation
tbd

## Specification


1. Create a ticket receipt

  ticket(amount, tier, signerAddr)
  Create api endpoint that can issue receipts in join dialog

2. Burn all NTZ that are transferred to tables

3. Extend table join with ticket data

  

  | NTZ bal | Join Req | Join Comp      | Lose 50 NTZ   | Win 100 NTZ     |
  |---------|----------|----------------|---------------|-----------------|
  | 0 NTZ   | 100      | 0 NTZ, 100 TKT | 0 NTZ, 50 TKT | 100 NTZ, 50 TKT |
  | 50 NTZ  | 100      | 50 NTZ, 50 TKT | 50 TKT        | 100 NTZ, 50 TKT |
  | 100 NTZ | 100      | 100 NTZ, 0 TKT | 50 NTZ        | 150 NTZ         |

  `join(NTZ, TKT)`

  Pass ticket through transfer to table.

  Store initial ticket amount in lineup data.

  Burn ticket immediately.

4. Give table money issuance rights

  Convert TKT that have been lost in the game to NTZ


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
