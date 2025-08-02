import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Doctor } from '../types';
import './DoctorProfilePage.css'; 

export default function DoctorProfilePage() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/doctors/${id}`)
      .then(res => res.json())
      .then(setDoctor);
  }, [id]);

  if (!doctor)
    return (
      <p style={{ textAlign: 'center', marginTop: '2.5rem', color: '#4b5563' }}>
        Loading...
      </p>
    );

  return (
    <div className="doctor-profile-page">
      <div className="doctor-card">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-image"
        />

        <h1 className="doctor-name">{doctor.name}</h1>
        <p className="doctor-specialization">{doctor.specialization}</p>
        <p className="doctor-status">{doctor.status}</p>

        <h2 className="section-title">Available Slots:</h2>
        <ul className="slot-list">
          {doctor.schedule.length ? (
            doctor.schedule.map((slot, idx) => <li key={idx}>{slot}</li>)
          ) : (
            <li>No slots available</li>
          )}
        </ul>

        <Link to={`/book/${doctor.id}`}>
          <button className="book-button">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
}
