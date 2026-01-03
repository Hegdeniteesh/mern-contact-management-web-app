import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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
   <div className={`app ${darkMode ? "dark" : ""}`}>
      <header className="header">
        <h1>Contact Management</h1>
        <p>Manage your contacts easily and securely</p>

        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
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
