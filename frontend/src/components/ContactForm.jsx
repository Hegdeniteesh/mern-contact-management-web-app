import React, { useState } from "react";
import axios from "axios";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm({ refresh }) {
  const [form, setForm] = useState(initialFormState);
  const [success, setSuccess] = useState("");

  const isValid =
    form.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.trim().length >= 7;

  // ✅ reusable change handler
  const handleChange = (field) => (event) => {
    setSuccess("");
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await axios.post(
      "https://mern-contact-management-web-app.onrender.com/api/contacts",
      form
    );

    setForm(initialFormState);
    setSuccess("Contact submitted successfully ✔");
    refresh();

    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <section className="card">
      <h2>Add New Contact</h2>

      {success && <p className="success">{success}</p>}

      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange("name")}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange("email")}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange("phone")}
        />

        <textarea
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange("message")}
        />

        <button disabled={!isValid}>Save Contact</button>
      </form>
    </section>
  );
}
