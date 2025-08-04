const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const doctors = [
  { id: '1', name: 'Dr. John Smith', specialization: 'Cardiologist', image: '/john.png', available: true },
  { id: '2', name: 'Dr. Jane Doe', specialization: 'Dermatologist', image: '/jane.png', available: false },
];

const appointments = [];

app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

app.get('/api/doctors/:id', (req, res) => {
  const doctor = doctors.find(doc => doc.id === req.params.id);
  if (!doctor) return res.status(404).send('Doctor not found');
  res.json(doctor);
});

app.post('/api/appointments', (req, res) => {
  const { doctorId, patientName, email, datetime } = req.body;
  appointments.push({ doctorId, patientName, email, datetime });
  res.status(201).json({ message: 'Appointment booked!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
