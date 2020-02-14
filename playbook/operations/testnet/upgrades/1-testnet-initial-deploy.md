# Testnet - Initial deployment
Date: 23.05.2019

```sh
yarn run v1.16.0
$ truffle migrate --network rinkeby --reset

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x6abf0e


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        4432235
   > block timestamp:     1558613103
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.624246049855286828
   > gas used:            194607
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.000583821 ETH

   -------------------------------------
   > Total cost:         0.000583821 ETH


2_deploy_token.js
=================
   -------------------------------------
   > Total cost:                   0 ETH


3_deploy_plasma.js
==================
  ♻️  Found token in environment: 0xD2D0F8a6ADfF16C2098101087f9548465EC96C98

   Replacing 'Bridge'
   ------------------
   > block number:        4432238
   > block timestamp:     1558613119
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.622356901855286828
   > gas used:            575862
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.001727586 ETH


   Replacing 'BridgeProxy'
   -----------------------
   > block number:        4432239
   > block timestamp:     1558613136
   > account:             0xb060a799235A33abEc16dBCBc3f437A22B98280E
   > balance:             99.997971943
   > gas used:            676019
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.002028057 ETH

  🕐 Exit duration: 5 minutes
  💰 Exit stake: 100000000000000000

   Replacing 'FastExitHandler'
   ---------------------------
   > block number:        4432240
   > block timestamp:     1558613153
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.604010770855286828
   > gas used:            6115377
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.018346131 ETH


   Replacing 'ExitHandlerProxy'
   ----------------------------
   > block number:        4432241
   > block timestamp:     1558613167
   > account:             0xb060a799235A33abEc16dBCBc3f437A22B98280E
   > balance:             99.99594814
   > gas used:            674601
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.002023803 ETH


   Replacing 'PoaOperator'
   -----------------------
   > block number:        4432242
   > block timestamp:     1558613178
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.601289941855286828
   > gas used:            906943
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.002720829 ETH


   Replacing 'OperatorProxy'
   -------------------------
   > block number:        4432243
   > block timestamp:     1558613191
   > account:             0xb060a799235A33abEc16dBCBc3f437A22B98280E
   > balance:             99.993938329
   > gas used:            669937
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.002009811 ETH


   Replacing 'SwapRegistry'
   ------------------------
   > block number:        4432244
   > block timestamp:     1558613204
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.597156232855286828
   > gas used:            1377903
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.004133709 ETH


   Replacing 'AdminableProxy'
   --------------------------
   > block number:        4432245
   > block timestamp:     1558613217
   > account:             0xb060a799235A33abEc16dBCBc3f437A22B98280E
   > balance:             99.991946761
   > gas used:            663856
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.001991568 ETH

Generated node files in /build/nodeFiles
   -------------------------------------
   > Total cost:         0.034981494 ETH


4_deploy_governance.js
======================
  🕐 Deploying Governance with proposal time: 10 minutes

   Replacing 'MinGov'
   ------------------
   > block number:        4432250
   > block timestamp:     1558613255
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.593170243855286828
   > gas used:            1301736
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.003905208 ETH

  🔄 Transferring ownership for Bridge: 0xDBC015b42497bbb91Ace46cb270e492EbAccecb1
  🔄 Transferring ownership for Operator: 0xEF8818171461F3475Efbcc54ee98e4e7E13A6Cc2
  🔄 Transferring ownership for ExitHandler: 0x1A6F1cd514ed5aC8E38B1bC64Ebf0d4479441069
  🔄 Transferring ownership for SwapRegistry: 0x574a664Fc15791DE428FeFEDc5d21F037d4A3c77
  ⚠ Minting rights could not be set on token: 0xD2D0F8a6ADfF16C2098101087f9548465EC96C98
  ⚠ Add SwapRegistry (0x574a664Fc15791DE428FeFEDc5d21F037d4A3c77) as minter manually.
   -------------------------------------
   > Total cost:         0.003905208 ETH


Summary
=======
> Total deployments:   10
> Final cost:          0.039470523 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6ad7f0


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0xde24ad77a5578eb0b9ae5a5f868c534c18a6d050978776783db159d952df60c1
   > Blocks: 4            Seconds: 62
   > contract address:    0x0133027d1a32F656f31868AE955Df9fCcC9F20e9
   > block number:        4432250
   > block timestamp:     1558613335
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.624201049855286828
   > gas used:            209607
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.000628821 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.000628821 ETH


2_deploy_token.js
=================

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


3_deploy_plasma.js
==================
  ♻️  Found token in environment: 0xD2D0F8a6ADfF16C2098101087f9548465EC96C98

   Replacing 'Bridge'
   ------------------
   > transaction hash:    0x2b8b0639b1f4ca8da64c97eb1f366d561e9e12ea7f8162e58205c911ffb66368
   > Blocks: 1            Seconds: 18
   > contract address:    0xDcCc5b16102c8BfE0356Be979Ca93A2D5167849B
   > block number:        4432265
   > block timestamp:     1558613560
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.622266901855286828
   > gas used:            575862
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.001727586 ETH


   Replacing 'BridgeProxy'
   -----------------------
   > transaction hash:    0x5bceca11cc29cf2be7e30000a35dd789d42247f40c9c0eda3c081c2dd3bb7598
   > Blocks: 1            Seconds: 6
   > contract address:    0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9
   > block number:        4432266
   > block timestamp:     1558613575
   > account:             0xaf0939af286A35DBfab7DEd7c777A5F6E8BE26A8
   > balance:             9.899731365098705339
   > gas used:            796019
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.002388057 ETH

  🕐 Exit duration: 5 minutes
  💰 Exit stake: 100000000000000000

   Replacing 'FastExitHandler'
   ---------------------------
   > transaction hash:    0x6946e3e7bb3cf5f06f576d6e582729385007bee27ad788abb63de58c1ffcbea4
   > Blocks: 1            Seconds: 18
   > contract address:    0x95D6B9754745b7Fc8A89797DD1e73AA7ee6eE442
   > block number:        4432268
   > block timestamp:     1558613605
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.603920770855286828
   > gas used:            6115377
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.018346131 ETH


   Replacing 'ExitHandlerProxy'
   ----------------------------
   > transaction hash:    0x99fa9064879377f7c418560fcea535f5a299c55e4ac8204bf0a73ddd93db37ec
   > Blocks: 1            Seconds: 12
   > contract address:    0x26a937302cc6A0A7334B210de06136C8C61BA885
   > block number:        4432269
   > block timestamp:     1558613620
   > account:             0xaf0939af286A35DBfab7DEd7c777A5F6E8BE26A8
   > balance:             9.897437562098705339
   > gas used:            764601
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.002293803 ETH


   Replacing 'PoaOperator'
   -----------------------
   > transaction hash:    0x4367aa6e256e970ff163646fa808457172130c7d0d9f0c339e820b2bef5423bc
   > Blocks: 3            Seconds: 34
   > contract address:    0xAB2c02d49Ccc900301bCA16DB06A3eBF17AA69b0
   > block number:        4432272
   > block timestamp:     1558613665
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.601199941855286828
   > gas used:            906943
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.002720829 ETH


   Replacing 'OperatorProxy'
   -------------------------
   > transaction hash:    0x827d2c57c6a9a4ece23aa24d023e9ff9aa1416728f904a616d465e5ac2067aa5
   > Blocks: 1            Seconds: 10
   > contract address:    0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9
   > block number:        4432273
   > block timestamp:     1558613680
   > account:             0xaf0939af286A35DBfab7DEd7c777A5F6E8BE26A8
   > balance:             9.895157751098705339
   > gas used:            759937
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.002279811 ETH


   Replacing 'SwapRegistry'
   ------------------------
   > transaction hash:    0x9b036a95f96cb183b88ff42336075c977e49c144e3cd7e2119f3357cf6a8389f
   > Blocks: 2            Seconds: 17
   > contract address:    0x421B07972Ff76c76fbF324a6c4b372Bb0c0b0f95
   > block number:        4432275
   > block timestamp:     1558613710
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.597066232855286828
   > gas used:            1377903
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.004133709 ETH


   Replacing 'AdminableProxy'
   --------------------------
   > transaction hash:    0x356a9c99cb95a9b2285f8c925dcdf7ada49f07279cc6ab3743f2c74e8c12d4b6
   > Blocks: 2            Seconds: 21
   > contract address:    0xc02150cBA7a06CeBD57CCdF66e0872B674479684
   > block number:        4432277
   > block timestamp:     1558613740
   > account:             0xaf0939af286A35DBfab7DEd7c777A5F6E8BE26A8
   > balance:             9.892806183098705339
   > gas used:            783856
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.002351568 ETH

Generated node files in /build/nodeFiles

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.036241494 ETH


4_deploy_governance.js
======================
  🕐 Deploying Governance with proposal time: 10 minutes

   Replacing 'MinGov'
   ------------------
   > transaction hash:    0xed97e4fc071a8f30643b92d703d0d0b01b090e17369f229530693941840e4191
   > Blocks: 1            Seconds: 15
   > contract address:    0xf3B4111c6CdAf82062A6e5EB65e12B76f2E881E8
   > block number:        4432283
   > block timestamp:     1558613831
   > account:             0x6Cb117a635dc7633B42089C607FDFc5c60b7d679
   > balance:             50.592900243855286828
   > gas used:            1361736
   > gas price:           3 gwei
   > value sent:          0 ETH
   > total cost:          0.004085208 ETH

  🔄 Transferring ownership for Bridge: 0xC449D4CD1dEc611d8cA5Fd8167Bf46d6e6d345b9
  🔄 Transferring ownership for Operator: 0xb3356900d56F39c79Bfdc2b625d15B1b5b9262a9
  🔄 Transferring ownership for ExitHandler: 0x26a937302cc6A0A7334B210de06136C8C61BA885
  🔄 Transferring ownership for SwapRegistry: 0xc02150cBA7a06CeBD57CCdF66e0872B674479684
  ⚠ Minting rights could not be set on token: 0xD2D0F8a6ADfF16C2098101087f9548465EC96C98
  ⚠ Add SwapRegistry (0xc02150cBA7a06CeBD57CCdF66e0872B674479684) as minter manually.

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.004085208 ETH


Summary
=======
> Total deployments:   10
> Final cost:          0.040955523 ETH

Done in 896.04s.
```