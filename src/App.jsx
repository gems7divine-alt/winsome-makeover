import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './pages/Services/Services';
import BookingAppointment from './pages/BookingAppointment/BookingAppointment';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main>
        {activePage === 'booking' ? (
          <BookingAppointment />
        ) : activePage === 'services' ? (
          <Services onBookAppointment={() => setActivePage('booking')} />
        ) : (
          <Hero
            onBookAppointment={() => setActivePage('booking')}
          />
        )}
      </main>
    </div>
  );
}
