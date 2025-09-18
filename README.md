**MySMS Messenger** is a full stack web app allowing the end users to send SMS messages as well as displaying them.  

## Functionality 
1. You're able to send a message by talking to the backend API
2. The messages sent so far are stored in a DB that the backend manages
3. You're able to see the messages that were previously sent - the app should talk to the backend through a messages listing API endpoint
<!-- 4. Only messages sent by the user's session ID cookie is visible when calling the listing API -->
  
<!-- - Sending an SMS should be done through [Twilio](https://twilio.com/ "Twilio") API with a free account you've opened on your own (note that you'll be limited to texting only Twilio's virtual number, that's OK. The number is available under "Develop > Messaging > Try it Out > Send an SMS" in their portal) -->


## TODO - [Add basic user authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)

Instead of using a session ID - we are adding a user model to the backend.  
Users are able to provide a user name + password through the app to login and then also log out  
Messages are stored per user rather than session ID.

## TODO Deploy The App

## TODO 3 - webhooks

Add a reflection to the message cards showing that twilio successfully delivered the message:  
https://www.twilio.com/docs/usage/webhooks/sms-webhooks?code-sample=code-send-an-sms-with-a-statuscallback-url&code-language=Ruby&code-sdk-version=5.x

  
