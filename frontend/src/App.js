import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get(
      "https://mern-contact-management-web-app.onrender.com/api/contacts"
    );
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
   <div className="app">
      <header className="header">
        <h1>Contact Management</h1>
        <p>Manage your contacts easily and securely</p>
      </header>

      <main className="main">
        <ContactForm refresh={fetchContacts} />
        <ContactList contacts={contacts} refresh={fetchContacts} />
      </main>

      <footer className="footer">
        <p>© 2026 Contact Management App</p>
      </footer>
    </div>
  );
}

export default App;
