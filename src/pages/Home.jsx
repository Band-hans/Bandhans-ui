import React from 'react';
import './Home.css';
import Footer from '../components/Footer';
 // ✅ Correct import for the Footer component

const Home = () => {
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

      {/* Other homepage content goes here */}

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Home;
// This is the Home component that serves as the main page of the application.
// It includes a hero section with a background image and a slogan, and it imports the Footer component to display at the bottom of the page.
// The hero section is styled with a background image and overlay text, providing a welcoming introduction to the Bandhans platform.
//             Terms of Service
//             Privacy Policy
//             Other
// The Footer component is imported from './Footer' and is included at the bottom of the Home component to maintain a consistent layout across the application.
// The Home component is styled using the 'Home.css' file, which should contain styles for the hero section and other elements.
// The hero section features a background image of a couple, a slogan, and a brief description to engage users. 