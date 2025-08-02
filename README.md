# 🏥 Healthcare Appointment Booking App

A responsive full-stack web application that allows users to browse doctors, view their availability, and book appointments with ease.

---

## 📌 Features

- 🔍 Browse a list of available doctors with photos, specialization, and availability
- 📄 View detailed doctor profiles with available time slots
- 🗓️ Book an appointment by filling out a simple form
- ✅ Get an appointment confirmation after submission
- 💡 Responsive design using Flexbox + external CSS
- 🚀 Built with React, TypeScript, Express.js, and mock data from `doctors.json`

---

## 🧱 Tech Stack

| Frontend            | Backend            |
|---------------------|--------------------|
| React + TypeScript  | Node.js + Express  |
| React Router DOM    | REST API           |
| External CSS        | Static JSON data   |

---

## 📁 Project Structure

```
/frontend
  /public
    /images              # Doctor profile images
  /src
    /components
    BookingFormPage.tsx # Form to book appointment
    DoctorListPage.tsx  # All doctors listed as cards
    DoctorProfilePage.tsx # Profile detail of a doctor
    types.ts            # TypeScript interfaces
    index.tsx
    App.tsx
    styles.css

/backend
  server.js             # Express server
  /data
    doctors.json        # Doctor data source
```

---

## 🛠️ Setup Instructions

### 🔽 1. Clone the repo

```bash
git clone https://github.com/your-username/healthcare-booking-app.git
cd healthcare-booking-app
```

### 🚀 2. Start Backend (Port: `5000`)

```bash
cd backend
npm install
node server.js
```

### 💻 3. Start Frontend (Port: `3000`)

```bash
cd frontend
npm install
npm start
```

> **Make sure images are inside** `frontend/public/images/` and paths in `doctors.json` are like `/images/doctor1.jpg`.

---

## ✨ Sample Data (`doctors.json`)

```json
[
  {
    "id": "1",
    "name": "Dr. Ananya Rao",
    "specialization": "Cardiologist",
    "image": "/images/doctor1.jpg",
    "status": "Available Today",
    "schedule": ["2025-08-01 10:00", "2025-08-01 14:00"]
  }
]
```

---

## 📸 Screenshots

> Add screenshots here after running the app locally (Doctor list, profile, booking form, confirmation message).

---

## 📅 Booking Workflow

1. User visits homepage
2. Selects a doctor → redirected to profile
3. Clicks “Book Appointment”
4. Fills in name, email, and date/time
5. Gets a confirmation message after form submission

---

## 📦 Future Improvements

- 🗃️ Save booking info in a database (MongoDB, PostgreSQL, etc.)
- 📧 Send email confirmation
- 👥 User login/signup
- 📅 Calendar integration

---

## 🧑‍💻 Developed by

SivaRam – https://www.linkedin.com/in/sivaram-akula/
