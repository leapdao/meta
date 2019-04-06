const {run} = require('runjs')

function invoke (functon = 'UtxoMetricsFunction', eventFile = null) {
  const dotenv = require('dotenv')
  dotenv.config()
  let command = `sam local invoke --skip-pull-image ${functon}`
  if (eventFile) {
    command += ` -e ${eventFile}`
  }
  run(
    command,
    {
      env: process.env
    }
  )
}

invoke('UtxoMetricsFunction', './event.json');
