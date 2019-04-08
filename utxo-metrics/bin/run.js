const {run} = require('runjs')
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(process.cwd(), '../', '.env')
});

function invoke (functon = 'UtxoMetricsFunction', eventFile = null) {
  const dotenv = require('dotenv')
  dotenv.config()
  let command = `sam local invoke --skip-pull-image ${functon}`
  if (eventFile) {
    command += ` -e ${eventFile}`
  }
  console.log(process.env.NODE_URL)
  run(
    command,
    {
      env: process.env
    }
  )
}

invoke('UtxoMetricsFunction', './event.json');
