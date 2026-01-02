import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get("https://mern-contact-management-web-app.onrender.com/api/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Contact Management App</h2>
      <ContactForm refresh={fetchContacts} />
      <ContactList contacts={contacts} refresh={fetchContacts} />
    </div>
  );
}

export default App;
