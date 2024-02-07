
exports.handler = async (event, context) => {

  if (event.triggerSource === 'CustomMessage_AdminCreateUser') {
    await createUserMail(event)
  }

  if (event.triggerSource === 'CustomMessage_ForgotPassword') {
    await createForgotPasswordMail(event)
  }

  console.log('event:', JSON.stringify(event, null, 2))

  return event
}

async function createUserMail (event) {
  event.response.emailSubject = 'Bem-vindo(a) ao Field Control - Gestão de Fornecedores'
  event.response.emailMessage = JSON.stringify({
    firstName: event.request.userAttributes.name.split(/\s/)[0],
    email: event.request.userAttributes.email,
    password: event.request.codeParameter,
    userCanAccessMountdoom: event.request.userAttributes['custom:user_type'] !== 'requester'
  }, null, 2)
}

async function createForgotPasswordMail (event, loginCustomization) {
  event.response.emailSubject = 'Recuperação de senha do Field Control - Gestão de Fornecedores'
  event.response.emailMessage = JSON.stringify({
    firstName: event.request.userAttributes.name.split(/\s/)[0],
    codeParameter: event.request.codeParameter,
    logoUrl: loginCustomization.logoUrl
  }, null, 2)
}
