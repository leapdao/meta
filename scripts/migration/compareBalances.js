const JSBI = require('jsbi');
const ethers = require('ethers');
const fs = require('fs');
const csv = require('csv-parser');
const { getBalance } = require('./helpers');

const nodeUrl = "http://node1.testnet.leapdao.org:8645";
const rpc = new ethers.providers.JsonRpcProvider(nodeUrl);
const snapshot = './snapshot.csv';

async function run() {
    const balances = [];

    fs.createReadStream(snapshot)  
    .pipe(csv())
    .on('data', (row) => {
        balances.push(row);
    })
    .on('end', async () => {
        let balance; 
        for(let i = 0; i < balances.length; i++) {
            console.log('Checking ballance of', balances[i].Address);
            balance = await getBalance(balances[i].Address, rpc);
            if (String(balance) === balances[i].Balance) {
                console.log('   OK');
            } else {
                console.log('   Mismatch! Expected:', balances[i].Balance, 'actual: ', String(balance));
            }
        }        
    });  

    /*fs.createReadStream(snapshot)  
    .pipe(csv())
    .on('data', (row) => {
        console.log('Checking ballance of', row.Address);
            getBalance(row.Address, rpc).then((balance) => {
                if (String(balance) === row.Balance) {
                    console.log('   OK');
                } else {
                    console.log('   Mismatch! Expected:', row.Balance, 'actual: ', String(balance));
                }
            })
    })
    .on('end', () => {
        console.log('Finished checking balances');
    });*/
}

run();