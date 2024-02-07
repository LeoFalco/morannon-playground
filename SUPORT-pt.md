# Erro nas custom message triggers do cognito

Tenho implementado um fluxo de convite de usuário usando user pools do cognito

Agora desejo customizar as mensagens de CustomMessage_AdminCreateUser e CustomMessage_ForgotPassword

que serão geradas dinamicamente personalizando o email que é enviado para cada usuário.

Segui os passos descritos nessa documentação

<https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-custom-message.html>

porem os emails que os usuários recebem estão estáticos, o template é sempre oque está registrado na user pool

independente do resultado das lambda triggers executadas.

Antes de entrar em contato fiz as seguinte conferências:

- as mensagens estão chegando na caixa do usuário final com o template default
- as triggers foram executadas e retornaram com sucesso, me certifiquei disso pelos logs do cloudwatch
- as trigger modificaram o valor de event.response.emailMessage e event.response.emailSubject, me certifiquei disso pelos logs do cloudwatch

Estou com a suspeita de que possa ser alguma configuração incompleta ou até mesmo um problema nas lambda trigger ou no cognito em si

Gostaria de uma orientação do que fazer para que a customização de mensagens de email funcione corretamente.

Montei um repositório com uma reprodução minima do erro disponível em: <https://github.com/LeoFalco/morannon-playground>

Um passo a passo de como simular está descrito no README do projeto.
