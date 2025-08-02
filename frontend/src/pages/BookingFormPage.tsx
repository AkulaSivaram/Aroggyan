import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Doctor } from '../types';
import './BookingFormPage.css'; 

export default function BookingFormPage() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/doctors/${id}`)
      .then(res => res.json())
      .then(setDoctor);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Info:', formData);
    setSubmitted(true);
  };

  if (!doctor) return <p style={{ textAlign: 'center', marginTop: '2.5rem', color: '#4b5563' }}>Loading doctor data...</p>;

  if (submitted) {
    return (
      <div className="confirm-box">
        <div className="confirm-box-inner">
          <h2>Appointment Confirmed!</h2>
          <p>Thank you, <strong>{formData.name}</strong>.</p>
          <p>Appointment with <strong>{doctor.name}</strong>.</p>
          <p>Scheduled on <strong>{new Date(formData.datetime).toLocaleString()}</strong>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="book-page">
      <form onSubmit={handleSubmit} className="book-form">
        <h2 className="book-heading">Book Appointment</h2>

        <div className="book-doctor-info">
          <p>Booking with</p>
          <p className="doctor-name">{doctor.name}</p>
          <p>{doctor.specialization}</p>
        </div>

        <div>
          <label htmlFor="name" className="book-label">Patient Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="book-input"
          />
        </div>

        <div>
          <label htmlFor="email" className="book-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="book-input"
          />
        </div>

        <div>
          <label htmlFor="datetime" className="book-label">Date & Time</label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            required
            value={formData.datetime}
            onChange={handleChange}
            className="book-input"
          />
        </div>

        <button type="submit" className="book-button">Confirm Appointment</button>
      </form>
    </div>
  );
}
