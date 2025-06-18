import React from 'react';
import './Home.css';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot'; 
import { Link } from 'react-router-dom';  // Added import for Link

const Home = () => {
  const cards = [
    {
      title: 'Events',
      description: 'Explore exciting events and celebrations near you.'
    },
    {
      title: 'Venues & Vendors',
      description: 'Find trusted venues and vendors for your special day.'
    },
    {
      title: 'Registry',
      description: 'Sign up and start your journey with us.'
    },
    {
      title: 'Advice & Support',
      description: 'Get expert advice for a successful Events Planning.'
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Image background from public folder */}
        <img src="/Images/couple.jpg" alt="Couple" className="hero-bg" />

        <div className="hero-overlay">
          <h1 className="hero-slogan">FIND YOUR FOREVER</h1>
          <p className="hero-description">
            Discover meaningful connections with Bandhans, where love meets tradition.
          </p>
        </div>
      </section>

      {/* Cards Section*/}
      <section className="cards-section">
        <h2 className="section-title">Everything you need to plan the Events you want</h2>
        <div className="card-grid">
          {cards.map((card, index) => {
            if (card.title === "Registry") {
              return (
                <Link
                  to="/register"
                  key={index}
                  className="card-box"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </Link>
              );
            }
            return (
              <div className="card-box" key={index}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Chat Bot at the bottom */}
      <ChatBot />
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Home;
// This code defines a Home component that serves as the landing page for the application.
// It includes a hero section with a background image, a slogan, and a description.     