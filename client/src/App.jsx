import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('000-000-000');
  const [sentTime, setSentTime] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    const url = "http://localhost:8000/messages";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        const errorBodyMsg = await response.json().catch(() => response.text());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      console.log(jsonData);
      setMessages(jsonData);
      setError(null);

    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  const sentTimeConversion = messages.forEach((time, index)=> {
    console.log(time.timeSent)
    const dateObject = new Date(time.timeSent);
    return dateObject;
  })

  return (
    <>
      <main>
        <h1 className="text-2xl font-bold text-black">
          My SMS Messenger
        </h1>
        <div className="container block md:flex md:gap-6 mt-15">
          <div className="form-container bg-[#f2e9e4] md:w-1/2 h-130 p-10">
            <Form messages={messages} setMessages={setMessages}></Form>
          </div>
          <div className="messages-container bg-[#f2e9e4] h-130 p-10 overflow-auto overscroll-contain">
            <h2 className="flex p-2 text-md text-black font-bold underline">Message History</h2>
            {error && <p className="error-message text-red-500">Error: {error}</p>}

            {messages.length > 0 ? (
              <ul className="message-list bg-[#f2e9e4]">
                {messages.map((msg, index) => (
                  <li key={index} className="mb-4 p-2 bg-[#f2e9e4]">
                    <div className="flex flex-col md:flex-row">
                      <p className="text-black text-xs md:mr-[70px] font-bold">{msg.phoneNumber}</p>
                      <p className="text-black text-xs"> {new Date(msg.timeSent).toUTCString()}</p>
                    </div>
                    {msg.message !== undefined && (
                      <div className="mt-2">
                        <div className="flex pl-3">
                          <textarea
                            id={`message-text-${index}`}
                            type="text"
                            name="message-text"
                            placeholder="Message"
                            className="flex border-2 text-wrap rounded-lg border-black w-sm py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-500s sm:text-sm/6"
                            value={msg.message || ''}
                            readOnly
                          />
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No messages to load</p>
            )}
          </div>
        </div>
      </main>
    </>
    
  );
}

export default App;