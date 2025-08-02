import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorListPage from './pages/DoctorListPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import BookingFormPage from './pages/BookingFormPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorListPage />} />
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        <Route path="/book/:id" element={<BookingFormPage />} />
      </Routes>
    </Router>
  );
}
