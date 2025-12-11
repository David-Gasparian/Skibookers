import './App.css';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="brand">Skibookers</div>
        <p className="tagline">Book your next ski adventure with ease.</p>
        <button className="cta">Get started</button>
      </header>

      <main className="content">
        <section className="card">
          <h2>Plan your trip</h2>
          <p>Find the best slopes, chalets, and instructors tailored to your schedule.</p>
        </section>
        <section className="card">
          <h2>Stay connected</h2>
          <p>Track bookings, get updates, and share plans with your travel group.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
