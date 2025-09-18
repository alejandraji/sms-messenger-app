import dotenv from 'dotenv';
dotenv.config();

import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const numbers = ["+15558675310", "+12345678901", "+10987654321"];

async function createMessage() {
  for (const number of numbers) {
    const message = await client.messages.create({
    body: "this is a test message",
    from: "+18774780802",
    to: number,
  });
  
  console.log(`Sent to ${number}: ${message.body}`);

  }
}

createMessage();