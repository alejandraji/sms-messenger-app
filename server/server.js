import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import db from './db.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/messages', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM message');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/messages', async (req, res) => {
  try {
    const phoneNumber = req.body.phoneNumber;
    const message = req.body.message;
    // wtf
    const result = await db.query(`INSERT INTO message (phone_number,message, time_sent) VALUES ('${phoneNumber}','${message}',CURRENT_TIMESTAMP) RETURNING *`);
    console.log("result", result);
    console.log("phone", phoneNumber);
    console.log("msg", message);
    // INSERT INTO cars (brand, model, year)
    // VALUES ('Ford', 'Mustang', 1964);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

