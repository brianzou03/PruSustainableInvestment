import React from 'react';

const About = () => {
  return (
    <div className="about">
      <p>
        Our SERV algorithm fetches information from the stock ticker database. When you select one of the stocks that Prudential invests in, it will pop up with a sustainability rating which is fetched from ClimatIQ database. Companies that are rated poorly in sustainability will have alternative recommendations presented, which provide the top 3 best performing companies with better sustainability ratings in that same industry.
      </p>
      <div className="team">
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <p>Member 1 Bio</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <p>Member 2 Bio</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <p>Member 3 Bio</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <p>Member 4 Bio</p>
        </div>
      </div>
    </div>
  );
};

export default About;
