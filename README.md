# Contact Management Web App

A Simple full-stack **MERN Contact Management Web application** developed.
Users can add, view, and delete contacts with real-time updates and a clean, responsive UI.

---

## 🔗 Live Links

- **Frontend (Netlify):** https://unique-chebakia-7bee63.netlify.app/  
- **Backend (Render):** https://mern-contact-management-web-app.onrender.com/api/contacts

---

## ✨ Features

- Add new contacts (Name, Email, Phone, Message)
- View all saved contacts
- Delete contacts with success messages
- Client-side form validation
- Real-time UI updates (no page reload)
- Responsive, card-based UI
- Dark mode toggle

---

## 🛠 Tech Stack

**Frontend:** React, Axios, CSS  
**Backend:** Node.js, Express.js, MongoDB Atlas  
**Deployment:** Netlify (Frontend), Render (Backend)

---

## 📂 Project Structure

contact-management-app/
├── backend/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ └── src/
└── README.md


---

## ▶️ Run Locally

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm start

---

🌐 API Endpoints

POST /api/contacts → Add contact
GET /api/contacts → Get all contacts
DELETE /api/contacts/:id → Delete contact
 
---

🔐 Security
Environment variables used for secrets
.env and node_modules excluded from GitHub
No sensitive data committed

----

👤 Author
Niteesh Hegde
MCA Graduate | Java & MERN Developer