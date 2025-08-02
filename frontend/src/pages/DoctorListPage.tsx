import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  status: string;
}

const DoctorListPage: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/doctors')
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error('Error fetching doctors:', error));
  }, []);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">Doctors</h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border-2 border-indigo-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {filteredDoctors.map((doctor) => (
          <Link
            to={`/doctor/${doctor.id}`}
            key={doctor.id}
            className="flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            
            <div className="w-40 h-40 bg-white border-4 border-indigo-200 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>

           
            <div className="mt-3">
              <h2 className="text-lg font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-sm text-gray-500">{doctor.specialization}</p>
              <span
                className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  doctor.status === 'Available Today'
                    ? 'bg-green-100 text-green-700'
                    : doctor.status === 'Fully Booked'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {doctor.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorListPage;
