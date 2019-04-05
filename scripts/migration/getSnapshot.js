const JSBI = require('jsbi');
const ethers = require('ethers');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const { getBalancesAll } = require('./helpers');

const nodeUrl = "http://node1.testnet.leapdao.org:8645";
const rpc = new ethers.providers.JsonRpcProvider(nodeUrl);
const snapshot = './snapshot.csv';

async function run() {
    const unspentsAll = await getBalancesAll(rpc);
    console.log(unspentsAll);
    
    const totalValue = [...unspentsAll].reduce((sum, balance) => {
        return JSBI.add(sum, JSBI.BigInt(balance[1])) }, JSBI.BigInt(0));

    console.log("Total value of all addresses: ", String(totalValue));

    console.log('Writing balances data to CSV file');
    const csvWriter = createCsvWriter({  
        path: snapshot,
        header: ['Address', 'Balance']
    });

    csvWriter  
        .writeRecords([...unspentsAll])
        .then(() => console.log('The CSV file was written successfully'));
}

run();