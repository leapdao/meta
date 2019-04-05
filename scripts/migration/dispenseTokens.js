const JSBI = require('jsbi');
const ethers = require('ethers');
const fs = require('fs');
const csv = require('csv-parser');
const { sendFunds, getBalance } = require ('./helpers');

const nodeUrl = "http://node1.testnet.leapdao.org:8645";
const rpc = new ethers.providers.JsonRpcProvider(nodeUrl);
const dispenser = { 
    address: 'PUT DISPENSER ADDRESS HERE',
    priv: '!!!NEVER COMMIT WITH MAINNET PRIVATE KEY HERE!!!' //!!!NEVER COMMIT WITH MAINNET PRIVATE KEY HERE!!!
}
const snapshot = './snapshot.csv';

async function run() {
    const balances = [];
    let balance;

    fs.createReadStream(snapshot)  
    .pipe(csv())
    .on('data', (row) => {
        balances.push(row);
    })
    .on('end', async () => {
        for(let i = 0; i < balances.length; i++) {
            console.log('Dispensng', balances[i].Balance, 'LEAP to', balances[i].Address);
            await sendFunds(dispenser, balances[i].Address, balances[i].Balance, rpc);
            balance = await getBalance(balances[i].Address, rpc);
            if (String(balance) === balances[i].Balance) {
                console.log('   Done');
            } else {
                console.log('   Failed! Expected balance:', balances[i].Balance, 'actual: ', String(balance));
            }
        }        
    });
}

run();