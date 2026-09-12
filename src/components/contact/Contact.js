import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // Error Messages
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);

  // Success Message
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    // Check for errors
    if (!clientName) setErrClientName(true);
    if (!email || !EmailValidation(email)) setErrEmail(true);
    if (!messages) setErrMessage(true);

    if (clientName && email && EmailValidation(email) && messages) {
      try {
        await axios.post("https://script.google.com/macros/s/AKfycbx01l0AEg_yOmqSVfQaC-kfs1brrUHZSwTaHZMoHZ_UHMmnlNcUei8IfkT6oMqLHF13/exec", {
          name: clientName,
          email: email,
          message: messages,
        });

        setSuccessMsg(
          `Hello dear ${clientName}, your message has been sent successfully. Thank you for your time!`
        );

        // Reset form
        setClientName("");
        setEmail("");
        setMessages("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>
            Bengaluru, Karnataka, India
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            punungowda6@gmail.com
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            +91 63616 66694
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        {successMsg ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
            {successMsg}
          </p>
        ) : (
          <form id="form" onSubmit={handleSend} className="p-6 flex flex-col gap-6">
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="clientName" className="sr-only">
                  Full Name
                </label>
                <input
                  id="clientName"
                  name="clientName"
                  onChange={handleName}
                  value={clientName}
                  aria-invalid={errClientName}
                  className={`${
                    errClientName
                      ? "border-red-600 focus-visible:border-red-600"
                      : "border-zinc-600 focus-visible:border-designColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="contactEmail" className="sr-only">
                  Email Address
                </label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  onChange={handleEmail}
                  value={email}
                  aria-invalid={errEmail}
                  className={`${
                    errEmail
                      ? "border-red-600 focus-visible:border-red-600"
                      : "border-zinc-600 focus-visible:border-designColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                  type="email"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="messages" className="sr-only">
                Your Message
              </label>
              <textarea
                id="messages"
                name="messages"
                onChange={handleMessages}
                value={messages}
                aria-invalid={errMessages}
                className={`${
                  errMessages
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
            >
              Send Message{" "}
              <span className="mt-1 text-designColor">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
