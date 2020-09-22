import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-100"
          value={form.name}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-100"
          value={form.email}
        />
        <textarea
          name="message"
          placeholder="How can I help?"
          className="w-100"
          rows={6}
          value={form.message}
        />
        <button type="submit" className="w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
