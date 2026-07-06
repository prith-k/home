import React from 'react';
import './UpcomingShows.css';

/**
 * UPCOMING SHOWS — Edit the shows array below to add/change upcoming performances.
 * Each show needs: date, venue, location, time (optional), link (optional), description (optional).
 */
const UpcomingShows = () => {
  const shows = [
    {
      date: 'August 7–31, 2026',
      venue: 'Edinburgh Fringe Festival',
      location: 'Edinburgh, UK',
      link: 'https://www.edfringe.com/tickets/whats-on/gulp',
      description: 'GULP! at Assembly Roxy, Snug Bar, 12:10',
    },
  ];

  return (
    <div className="UpcomingShows">
      <h1>Upcoming Shows</h1>
      <p className="UpcomingShows-intro">
      </p>
      <div className="shows-list">
        {shows.map((show, i) => (
          <div className="show-item card-border" key={i}>
            <div className="show-date">{show.date}</div>
            <h2 className="show-venue">{show.venue}</h2>
            <div className="show-meta">
              {show.location}
              {show.time && ` • ${show.time}`}
            </div>
            {show.description && <p className="show-description">{show.description}</p>}
            {show.link && show.link !== '#' && (
              <a href={show.link} target="_blank" rel="noopener noreferrer" className="show-link">
                Tickets / More info
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="UpcomingShows-intro">
        If you are interested in booking, please reach out via email or instagram :)
      </div>
    </div>
  );
};

export default UpcomingShows;
