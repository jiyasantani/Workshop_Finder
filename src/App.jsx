import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Description from './components/Description.jsx';
import WorkshopTypes from './components/WorkshopTypes.jsx';
import WaitlistForm from './components/WaitlistForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Description />
        <WorkshopTypes />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

