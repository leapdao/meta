# Testnet

We run a testnet as a PoA-operator. This section outlines the setup we use.

## Overview

_TBD topology: sentinels, validator_

### Plasma Contracts

_TBD_

### Governance

_TBD_

### Load Balancer

_TBD_

### Node

#### Config file

Config file is needed to join the network. Relevant config files for different networks can be found on [Releases](https://github.com/leapdao/leap-contracts/releases) page of `leap-contracts` repo.

Pass the correct config file with `--config` option when starting leap-node.

Example: `leap-node --config=/home/ubuntu/leap-testnet.json`

#### Database

Node keeps it's data in `~/.lotion/network/<network>-<networkId>/` folder.

_TBD: folder structure_


#### Key management

_TBD_

#### Startup command

_TBD_

#### Process management

We use `systemd` to run a leap node.
[Config example](https://github.com/leapdao/leap-node/blob/master/setup/cloud/leap.systemd.service).

Check node status: `service leap-node status`.

Start/Stop the node: `sudo service leap-node start/stop`.

Restart the node: `sudo service leap-node restart`.

#### Validator setup

If the node is a validator, it needs to have ether on it's address in order to submit periods to the root network.

#### Logging

We log to [STDOUT](https://12factor.net/logs).

Print logs with `journalctl -u leap-node`.
Follow with `journalctl -u leap-node -f`.

#### Database backup

We commit the node's database in a local git repo, so it can be recovered in case of corruption (e.g. conflicting votes submitted by 2/3 of validators).

To setup a process do the following:

1. Init git repo

   ```sh
   cd ~/.lotion
   git init
   ```

2. Setup a cron job to commit changes every 10 minutes.

   Install `jq` package: `sudo apt-get install jq`.

   Run `crontab -e` and add the following:

   ```sh
   # Commit new data every 10 minutes
   */10 * * * * cd /home/ubuntu/.lotion && git add . && git commit -m 'Block height '`curl -s localhost:26659/status | jq .result.sync_info.latest_block_height | sed s/\"//g`

   # Compact git repo once a day leaving only 60 latest commits (10 hours worth of data)
   0 8 * * * cd /home/ubuntu/.lotion && git rev-parse HEAD~60 > .git/shallow && git gc --prune=now
   ```

#### Monitoring

_TBD: peeper_

### Bridge UI

_TBD_

### Sniper rifle service

_TBD_

## Operations

### Refill validator address with ether.
[Peeper](#Monitoring]) service notifies when the balance goes low.

### Review and register tokens as requested

Token requests are coming into #testnet channel in LeapDAO Slack.

Review token:
- token has source verified on Etherscan
- token is either ERC20, ERC721 or ERC1948. ERC721 need to support ERC165 as well.
- token implements metadata support (e.g. `name` and `symbol`)
