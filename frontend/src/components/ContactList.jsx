import axios from "axios";
import React, { useState } from "react";

export default function ContactList({ contacts, refresh }) {
  const [deleteMsg, setDeleteMsg] = useState("");
  const deleteContact = async (id) => {
    await axios.delete(
      `https://mern-contact-management-web-app.onrender.com/api/contacts/${id}`
    );
    
    setDeleteMsg("Contact deleted successfully ✔");
    refresh();

    // auto hide message
    setTimeout(() => setDeleteMsg(""), 2000);
  };

  const total = contacts.length;
  const hasContacts = total > 0;
  

  return (
    <section className="card">
      <h2>Saved Contacts</h2>

      
      {deleteMsg && (
        <p className="delete-success">{deleteMsg}</p>
      )}

      {contacts.length === 0 ? (
        <p className="empty">No contacts added yet.</p>
      ) : (
        <div className="contact-grid">
          {contacts.map((c) => (
            <div className="contact-card" key={c._id}>
              <h3>{c.name}</h3>
              <p>{c.email}</p>
              <p>{c.phone}</p>

              <button
                className="delete-btn"
                onClick={() => deleteContact(c._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
