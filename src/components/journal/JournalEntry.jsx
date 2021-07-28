import React from 'react';

export const JournalEntry = ({ entry }) => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/03/Jupiter-scaled.jpg?fit=1200%2C750&ssl=1)',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Las maravillas de Jupiter</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
