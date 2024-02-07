const env = require('./../env.json')[process.env.environment || 'dev']

const config = {
  isProduction: process.env.environment === 'prod',
  environment: process.env.environment,
  app: {
    name: 'Morannon triggers'
  },
  aws: {
    cognito: {
      apiVersion: '2016-04-18',
      region: 'us-east-1'
    }
  },
  sammathnaurApiUrl: env.sammathnaur_api_url

}

module.exports = {
  config
}
