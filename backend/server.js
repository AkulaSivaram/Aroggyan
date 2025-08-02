const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const doctorsPath = path.join(__dirname, 'data', 'doctors.json');
const appointmentsPath = path.join(__dirname, 'data', 'appointments.json');

// Get all doctors
app.get('/api/doctors', (req, res) => {
  const doctors = JSON.parse(fs.readFileSync(doctorsPath));
  res.json(doctors);
});

// Get single doctor by ID
app.get('/api/doctors/:id', (req, res) => {
  const doctors = JSON.parse(fs.readFileSync(doctorsPath));
  const doctor = doctors.find(d => d.id === req.params.id);
  if (doctor) res.json(doctor);
  else res.status(404).send('Doctor not found');
});

// Book appointment
app.post('/api/appointments', (req, res) => {
  const { doctorId, name, email, dateTime } = req.body;
  if (!doctorId || !name || !email || !dateTime) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const appointments = JSON.parse(fs.readFileSync(appointmentsPath));
  const newAppointment = { id: Date.now(), doctorId, name, email, dateTime };
  appointments.push(newAppointment);
  fs.writeFileSync(appointmentsPath, JSON.stringify(appointments, null, 2));
  res.json({ message: 'Appointment booked successfully' });
});

app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});
