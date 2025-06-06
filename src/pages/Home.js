import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Image background from public folder */}
        <img src="/Images/couple.jpg" alt="Couple" className="hero-bg" />

        <div className="hero-overlay">
          <h1 className="hero-slogan">FIND YOUR FOREVER</h1>
          <div className="hero-buttons">
            <button className="join-btn">Join Us</button>
            <button className="signin-btn">Sign In</button>
          </div>
        </div>
      </section>

     {/* Success Stories */}
<section className="success-stories">
  <h2>Success Stories</h2>
  <div className="stories-grid">
    <div className="story-card">
      <img src="/images/story1.jpg" alt="Couple 1" className="story-image" />
      <p className="story-name">❤️ Ayesha & Raj</p>
    </div>
    <div className="story-card">
      <img src="/images/story2.jpg" alt="Couple 2" className="story-image" />
      <p className="story-name">❤️ Anjali & Vikram</p>
    </div>
    <div className="story-card">
      <img src="/images/story3.jpg" alt="Couple 3" className="story-image" />
      <p className="story-name">❤️ Meera & Aman</p>
    </div>
  </div>
</section>

{/* About Section */}
      <section className="about-section">
        <div className="about-box">
          <h3>About Us</h3>
          <p>
            Bandhans is a modern matchmaking platform built on trust, compatibility, and cultural values. 
            We aim to bring together like-minded individuals searching for meaningful, long-term relationships. 
            With powerful search filters, real user verification, and personalized support, we’re committed 
            to helping you find your forever match in a safe and respectful environment.
          </p>
          <span className="read-more">Read More</span>
        </div>
      </section>
    </div> // ✅ This closes the main <div>
  );
};


export default Home;
