## Description

**MySMS Messenger** is a full stack web app allowing the end users to send SMS messages as well as displaying them.  

### Prerequisites
Make sure you have Node v20.10 installed, which can be installed following these
[instructions](https://nodejs.org/en/download/package-manager).

### Quick start

1. Install packages
```sh
cd sms-messenger-app
npm install
```

2. Run the server and client
```sh
# From /server 
npm run dev
```
```sh
# From /client
npm run dev
```
This will run the server on port 8000 and the client on port 5173.

## Functionality 
1. You're able to send a message by talking to the backend API
2. The messages sent so far are stored in a DB that the backend manages
3. You're able to see the messages that were previously sent

## Not Yet Implemented 
- Add sessions -  Only messages sent by the user's session ID cookie is visible when calling the listing API 
- Sending an SMS should be done through 
- Add basic user authentication - instead of using a session ID, I am adding a user model to the backend. Users are able to provide a user name + password through the app to login and then also log out.
- Deploy the app
- Add reflection to the message cards showing that twilio successfully delivered the message

  
