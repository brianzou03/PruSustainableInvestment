import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="mission-statement">
        <h2>About PruSERV</h2>
        <p>In our 2022 Sustainability report, Chairman and CEO Charlie Lowrey explained:</p>
        <blockquote>
          <p>
            “Sustainability is critical to our ability to fulfill our Purpose of making lives better by solving the financial challenges of our changing world. It’s key to how we anticipate and manage both risks and opportunities. It drives our work to reduce Prudential’s environmental footprint and manage our exposure to environmental risks. It’s evident in our commitment to caring for our employees, enacting strong corporate governance, and promoting transparent reporting.”
          </p>
        </blockquote>
        <p>
          PruSERV provides detailed insights into the carbon footprint of Prudential's investment portfolio. By quantifying emissions associated with each investment, we enable Prudential to make informed decisions aligned with our environmental values.
        </p>
      </div>
      <div className="beyond-numbers">
        <h3>BEYOND THE NUMBERS</h3>
        <p>
          Beyond tracking carbon footprints, PruSERV offers suggestions for more eco-friendly investment alternatives. These alternatives are carefully curated to prioritize companies and funds that demonstrate strong environmental stewardship and sustainable practices. We believe that responsible investing can drive positive change and contribute to a greener, more sustainable future.
        </p>
        <p>
          At Prudential, we are committed to transparency and accountability in our investment practices. PruSERV reflects our dedication to integrating environmental considerations into financial decision-making.
        </p>
        <p>
          <em>Join us in PruSERV-ing the environment!</em>
        </p>
      </div>
      <div className="meet-the-team">
        <h3>MEET THE TEAM</h3>
        <div className="team">
        <div className="team-member">
          <img src="/images/BrianPicture.png" alt="Brian Zou" />
          <p>Brian Zou</p>
        </div>
        <div className="team-member">
          <img src="/images/SydneyPicture.jpg" alt="Sydney Dizon" />
          <p>Sydney Dizon</p>
        </div>
        <div className="team-member">
          <img src="/images/MattPicture.jpg" alt="Matthew Cruz" />
          <p>Matthew Cruz</p>
        </div>
        <div className="team-member">
          <img src="/images/RiyaPicture.jpg" alt="Riya Chandran" />
          <p>Riya Chandran</p>
        </div>
        <div className="team-member">
          <img src="/images/GuyllianPicture.png" alt="Guyllian Dela Rosa" />
          <p>Guyllian Dela Rosa</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
