# Error in Cognito custom message triggers

I have implemented a user invitation flow using Cognito user pools.

Now I want to customize the messages for CustomMessage_AdminCreateUser and CustomMessage_ForgotPassword, which will be dynamically generated to personalize the email sent to each user.

I followed the steps described in this documentation:

<https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-custom-message.html>

However, the emails users receive are static, the template remains the same as registered in the user pool regardless of the results of the executed lambda triggers.

Before reaching out, I have conducted the following checks:

- The messages are being delivered to the end user's inbox with the default template.
- The triggers were executed and returned successfully; I verified this through CloudWatch logs.
- The triggers modified the value of event.response.emailMessage and event.response.emailSubject; I verified this through CloudWatch logs.

I suspect there might be some incomplete configuration or even an issue with the lambda triggers or Cognito itself.

I would appreciate guidance on how to ensure the customization of email messages works correctly.

I have created a repository with a minimal reproduction of the error available at <https://github.com/LeoFalco/morannon-playground>

A step-by-step guide on how to simulate this is described in the project's README.
