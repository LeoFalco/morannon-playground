const { CognitoIdentityProvider } = require('@aws-sdk/client-cognito-identity-provider')

async function run () {
  const client = new CognitoIdentityProvider({ region: 'us-east-1' })

  // await client.({
  //   Username: 'leonardo.falco0@gmail.com',
  //   UserPoolId: 'us-east-1_sHVgjE30o'
  // })
  console.log('createUserResponse', JSON.stringify(createUserResponse, null, 2))
}

run()
