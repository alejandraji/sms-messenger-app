import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function getMessages() {
  try {
    const filePath = path.join(__dirname, 'data', 'messages.json');
    const messagesText = fs.readFileSync(filePath, 'utf8'); 
    const messagesData = JSON.parse(messagesText);

    return messagesData;

  } catch (error){
    throw new Error(`Failed to read or parse messages data: ${error.message}`);
  }
console.log("data", messagesData)
}