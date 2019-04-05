const JSBI = require('jsbi');
const ethers = require('ethers');
const fs = require('fs');
const csv = require('csv-parser');
const { sendFunds } = './helpers';

const nodeUrl = "http://node1.testnet.leapdao.org:8645";
const rpc = new ethers.providers.JsonRpcProvider(nodeUrl);
const dispenser = { 
    address: '',
    priv: '!!!NEVER COMMIT WITH MAINNET PRIVATE KEY HERE!!!' //!!!NEVER COMMIT WITH MAINNET PRIVATE KEY HERE!!!
}
const snapshot = './snapshot.csv';

async function run() {
    const balances = [];

    fs.createReadStream(snapshot)  
    .pipe(csv())
    .on('data', (row) => {
        balances.push(row);
    })
    .on('end', async () => {
        for(let i = 0; i < balances.length; i++) {
            console.log('Dispensng', balances[i].Balance, 'LEAP to', balances[i].Address);
            await sendFunds(dispenser, balances[i].Address, balances[i].Balance, rpc);
        }        
    });
}

run();