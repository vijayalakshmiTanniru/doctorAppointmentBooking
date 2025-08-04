import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DoctorProfile.css';

function DoctorProfile() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/doctors/${id}`)
      .then(res => res.json())
      .then(setDoctor);
  }, [id]);

  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="doctor-profile">
      <img src={doctor.image} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.available ? 'Available' : 'Not Available'}</p>
      <button onClick={() => navigate(`/book/${doctor.id}`)}>
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorProfile;
