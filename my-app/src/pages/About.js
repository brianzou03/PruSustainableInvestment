import React from 'react';

const About = () => {
  return (
    <div className="about">
      <p>
        Our SERV algorithm fetches information from the stock ticker database. When you select one of the stocks that Prudential invests in, it will pop up with a sustainability rating which is fetched from ClimatIQ database. Companies that are rated poorly in sustainability will have alternative recommendations presented, which provide the top 3 best performing companies with better sustainability ratings in that same industry.
      </p>
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
  );
};

export default About;
