import React from 'react';
import './DoctorCard.css';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p className={doctor.available ? 'available' : 'unavailable'}>
        {doctor.available ? 'Available' : 'Not Available'}
      </p>
      <Link to={`/doctor/${doctor.id}`}>View Profile</Link>
    </div>
  );
}

export default DoctorCard;
