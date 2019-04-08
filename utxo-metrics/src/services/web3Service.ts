
import {Tx, LeapTransaction, TxJSON, Type} from 'leap-core';
import {Block, JsonRpcProvider} from "ethers/providers";
import {ethers} from 'ethers';
import * as utils from 'ethers/utils';

type PlasmaTransaction = LeapTransaction & TxJSON;

export interface TransactionStats {
    deposit: number;
    transfer: number;
    exit: number
}

export class Web3Service {

    private provider: JsonRpcProvider;

    constructor(url: string) {
        this.provider = new ethers.providers.JsonRpcProvider(url);
    }

    public async getTransactionStatistic(from: Date, to: Date) : Promise<TransactionStats> {
        const transactionsStats = {
            deposit: 0,
            transfer: 0,
            exit: 0
        };
        let blockNumber = await this.provider.getBlockNumber();
        let block: Block;
        do {
            block = await this.provider.send(
                'eth_getBlockByNumber',
                [utils.bigNumberify(blockNumber).toHexString(), true]
            );
            block.timestamp = utils.bigNumberify(block.timestamp).toNumber();
            if(block.timestamp < (to.valueOf()/1000)) {
                block.transactions.forEach((tx) => {
                    const type = Tx.fromRaw((tx as any).raw).type;
                    if(type === Type.DEPOSIT) {
                        transactionsStats.deposit++;
                    }
                    if(type === Type.DEPOSIT) {
                        transactionsStats.deposit++;
                    }
                    if(type === Type.EXIT) {
                        transactionsStats.exit++;
                    }
                });
            }
            blockNumber--;
        } while (blockNumber > 0 && block.timestamp > (from.valueOf()/1000));
        return transactionsStats;
    }


}
