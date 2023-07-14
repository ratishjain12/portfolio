import React, { useState } from "react";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional logic, such as sending the data to a server

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="form-container container mx-auto bg-[#eef1ef] p-12 my-2">
      <div
        style={{ maxWidth: "76%", margin: "30px auto" }}
        id="contact"
        className="bg-white shadow-md mb-12 bottom-2 border-gray-900 rounded-md"
      >
        <h2 className="text-center text-4xl mb-2 pt-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="px-4 py-8">
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "0.5rem" }}
              placeholder="Name"
              className="border-2 border-black"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "0.5rem" }}
              className="border-2 border-black"
              placeholder="Email"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", minHeight: "100px" }}
              placeholder="Message"
              className="border-2 border-black"
            ></textarea>
          </div>
          <button type="submit" className="border-2 border-black w-full py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
