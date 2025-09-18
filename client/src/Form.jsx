import React from 'react';
import { useState } from 'react';
import './App.css'


export function Form({messages, setMessages}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const formatPhoneNumber = (number) => {
  return number.replace(/\D/g, "").slice(0, 10);
 }

  const handlePhoneNumberChange = (event) => {
    const formattedNumber = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedNumber);
  };

    const handleMessageChange = (event) => {
      const messageValue = event.target.value
      setMessage(messageValue);
  };

   const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:8000/messages";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, message })
      });

      if (!response.ok) {
        const errorBodyMsg = await response.json().catch(() => response.text());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      setMessages([...messages, jsonData]);
      // setError(null);

    } catch (error) {
      console.error(error.message);
      // setError(error.message);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2 className="flex text-md p-2 text-black font-bold underline">New Message</h2>
      <label htmlFor="phoneNumber" className="p-3 font-medium flex text-sm font-medium text-black">Phone Number</label>
      <div className="mt-2"> 
        <div className="flex rounded-md pl-3">
          <input 
            id="phoneNumber" 
            type="text" 
            name="phoneNumber" 
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="000-000-000" 
            className="block border-2 rounded-lg border-black w-sm py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-500s sm:text-sm/6"
          />
        </div>
      </div>
      <label htmlFor="message" className="p-3 flex text-sm font-medium text-gray-900 mt-4"> Message</label>
      <div className="mt-2"> 
        <div className="flex rounded-m pl-3 ">
          <textarea 
            id="message" 
            type="text" 
            name="message" 
            value={message}
            onChange={handleMessageChange}
            className="block p-2.5 h-40 w-sm text-sm text-gray-700 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500s dark:text-black" 
            placeholder="message">
          </textarea>
       </div>
       <div className="mt-6 flex flex-col md:flex-row-reverse md:justify-around md:ml-[50px]">
        <button className="bg-sky-500 hover:bg-sky-700 m:w-1/2 m-auto">Submit</button>
        <a href="#" className="mt-4 underline text-black">Clear</a>
       </div>
     </div>
    </form>
  )
}

export default Form;
