import React from 'react';
import { Card, Hero } from './components/ui';
import './components/ui/ui.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero
        brand="Skibookers"
        tagline="Book your next ski adventure with ease."
        ctaLabel="Get started"
      />

      <main className="content">
        <Card title="Plan your trip">
          Find the best slopes, chalets, and instructors tailored to your schedule.
        </Card>
        <Card title="Stay connected">
          Track bookings, get updates, and share plans with your travel group.
        </Card>
      </main>
    </div>
  );
}

export default App;
