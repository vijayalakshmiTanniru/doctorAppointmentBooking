import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import './DoctorList.css';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/doctors')
      .then(res => res.json())
      .then(setDoctors);
  }, []);

  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search doctors"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="doctor-list">
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
