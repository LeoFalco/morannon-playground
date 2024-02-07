const { CognitoIdentityProvider } = require('@aws-sdk/client-cognito-identity-provider')

async function run () {
  const client = new CognitoIdentityProvider({ region: 'us-east-1' })

  await client.adminDeleteUser({
    Username: 'email@example.com',
    UserPoolId: 'us-east-1_sHVgjE30o'
  })
    .then(response => {
      console.log('existing user deleted')
    })
    .catch(error => {
      console.log('adminDeleteUser error', error.message)
    })

  const createUserResponse = await client.adminCreateUser({
    Username: 'email@example.com',
    UserPoolId: 'us-east-1_sHVgjE30o',
    UserAttributes: [
      {
        Name: 'email',
        Value: 'email@example.comr'
      },
      {
        Name: 'name',
        Value: 'Jhon doe'
      }
    ]
  })

  console.log('createUserResponse', JSON.stringify(createUserResponse, null, 2))
}

run()
