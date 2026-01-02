import { useState } from "react";
import axios from "axios";

export default function ContactForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const isValid =
    form.name.trim() !== "" &&
    form.email.includes("@") &&
    form.phone.trim() !== "";

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    setSuccess("Contact submitted successfully");
    refresh();
  };

  return (
    <form onSubmit={submitHandler}>
      {success && <p style={{ color: "green" }}>{success}</p>}

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
