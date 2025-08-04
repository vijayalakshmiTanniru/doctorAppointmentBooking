import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookAppointment.css';

function BookAppointment() {
  const { id } = useParams();
  const [form, setForm] = useState({ patientName: '', email: '', datetime: '' });
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, doctorId: id }),
    });
    const data = await res.json();
    setSuccess(data.message);
  };

  return (
    <div className="appointment-form">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="patientName" placeholder="Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="datetime" type="datetime-local" required onChange={handleChange} />
        <button type="submit">Book</button>
      </form>
      {success && <p className="success">{success}</p>}
    </div>
  );
}

export default BookAppointment;
