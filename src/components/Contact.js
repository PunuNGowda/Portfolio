import React, { useState } from "react";
import axios from "axios";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Section from "./Section";
import { profile } from "../data/portfolio";

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbx01l0AEg_yOmqSVfQaC-kfs1brrUHZSwTaHZMoHZ_UHMmnlNcUei8IfkT6oMqLHF13/exec";

const infoItems = [
  { Icon: FiMapPin, label: "Location", value: profile.location },
  { Icon: FiMail, label: "Email", value: profile.email },
  { Icon: FiPhone, label: "Phone", value: profile.phone },
];

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-zinc-200 outline-none transition-colors duration-200 placeholder:text-zinc-500 ${
    hasError ? "border-red-600 focus:border-red-600" : "border-white/10 focus:border-designColor"
  }`;

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const EmailValidation = (value) => {
    return String(value)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!clientName) setErrClientName(true);
    if (!email || !EmailValidation(email)) setErrEmail(true);
    if (!messages) setErrMessage(true);

    if (clientName && email && EmailValidation(email) && messages) {
      try {
        await axios.post(ENDPOINT, {
          name: clientName,
          email: email,
          message: messages,
        });
        setSuccessMsg(`Message sent — thank you, ${clientName}! I'll get back to you soon.`);
        setClientName("");
        setEmail("");
        setMessages("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title="Contact Me"
      description="Have a role, project or question? Drop a message and I'll reply as soon as I can."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          {infoItems.map(({ Icon, label, value }) => (
            <div key={label} className="card flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-designColor">
                <Icon />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500">{label}</p>
                <p className="mt-0.5 text-sm font-medium text-zinc-200">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          {successMsg ? (
            <div className="card flex h-full min-h-48 items-center justify-center p-8 text-center">
              <p className="font-titleFont text-base font-medium text-designColor">
                {successMsg}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSend} className="card flex flex-col gap-5 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="clientName" className="text-sm font-medium text-zinc-300">
                    Full Name
                  </label>
                  <input
                    id="clientName"
                    name="clientName"
                    type="text"
                    placeholder="Your name"
                    value={clientName}
                    onChange={(e) => {
                      setClientName(e.target.value);
                      setErrClientName(false);
                    }}
                    aria-invalid={errClientName}
                    className={inputClass(errClientName)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contactEmail" className="text-sm font-medium text-zinc-300">
                    Email Address
                  </label>
                  <input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrEmail(false);
                    }}
                    aria-invalid={errEmail}
                    className={inputClass(errEmail)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="messages" className="text-sm font-medium text-zinc-300">
                  Message
                </label>
                <textarea
                  id="messages"
                  name="messages"
                  rows="5"
                  placeholder="Tell me about your project or opportunity…"
                  value={messages}
                  onChange={(e) => {
                    setMessages(e.target.value);
                    setErrMessage(false);
                  }}
                  aria-invalid={errMessages}
                  className={`${inputClass(errMessages)} resize-none`}
                />
              </div>
              <button type="submit" className="btn-primary w-fit">
                Send Message
                <FiSend />
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;