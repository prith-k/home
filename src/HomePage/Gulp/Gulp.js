import React, { useState, useEffect } from 'react';
import './Gulp.css';

const base = process.env.PUBLIC_URL || '';

const photos = [
  {
    src: `${base}/media/gulp/gulp-mirror.png`,
    alt: 'oolala',
  },
  {
    src: `${base}/media/gulp/gulp-physicality.png`,
    alt: 'WEE',
  },
  {
    src: `${base}/media/gulp/gulp-banana-character.png`,
    alt: 'Wedding day',
  },
  {
    src: `${base}/media/gulp/gulp-banana-love.png`,
    alt: 'Kiss Kiss',
  },
];

const awards = [
  {
    src: `${base}/media/gulp/award-funniest-of-the-fringe.png`,
    alt: 'Pittsburgh Fringe 2026 Funniest of the Fringe Award — Most Inventive',
  },
  {
    src: `${base}/media/gulp/award-spirit-of-the-fringe.png`,
    alt: 'Pittsburgh Fringe 2026 Spirit of the Fringe Award — Out of Town',
  },
  {
    src: `${base}/media/gulp/award-physical-theatre.png`,
    alt: 'Pittsburgh Fringe 2026 Physical Theatre Award',
  },
];

const fringeReviewLinks = [
  {
    label: 'Hollywood Fringe',
    href: 'https://www.hollywoodfringe.org/projects/13318?tab=reviews',
  },
  {
    label: 'Denver Fringe',
    href: 'https://denverfringe.org/shows/gulp/',
  },
  {
    label: 'San Diego Fringe',
    href: 'https://reviews.fringetheatre.ca/events/gulp/',
  },
];


const SLIDE_INTERVAL_MS = 4500;

const Gulp = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = photos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((i) => (i + 1) % totalSlides);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="Gulp">
      <section className="Gulp-carousel" aria-label="GULP! production photos" aria-roledescription="carousel">
        <div className="Gulp-carousel-viewport">
          {photos.map(({ src, alt }, i) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className={['Gulp-carousel-image', i === slideIndex ? 'Gulp-carousel-image-active' : ''].filter(Boolean).join(' ')}
              aria-hidden={i !== slideIndex}
            />
          ))}
          <div className="Gulp-carousel-overlay">
            <h1>GULP!</h1>
            <p className="Gulp-tagline">
              A boy meet banana love story.
            </p>
          </div>
          <div className="Gulp-carousel-dots" aria-hidden="true">
            {photos.map(({ src }, i) => (
              <span
                key={src}
                className={['Gulp-carousel-dot', i === slideIndex ? 'Gulp-carousel-dot-active' : ''].filter(Boolean).join(' ')}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="Gulp-content">
        <section className="Gulp-intro card-border">
          <p>
          An ordinary morning spirals into a full lifetime love story between 
          Henry and his breakfast. He wants an entire life with his new wife,
          but she’ll be overripe by dinner. Whimsically imaginative, 
           GULP! is a boy-meets-banana physical comedy that 
           audiences are calling “wildly inventive”, “surrealist” and “unexpectedly heartfelt”.
          </p>
        </section>

        <section className="Gulp-awards card-border">
          <ul className="Gulp-awards-grid">
            {awards.map(({ src, alt }) => (
              <li className="Gulp-award-item" key={src}>
                <img src={src} alt={alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </section>

        <section className="Gulp-press card-border">
          <h2>FringeReview</h2>
          <p className="Gulp-press-excerpt">
          "GULP! showcases how Prith Khalsa is truly a master of his craft. He accomplishes all of these aforementioned goals and more through an expertly polished clown performance, confident and expressive through every jump, spin, fall, and crash."
          </p>
          <p className="Gulp-press-meta">Morgan Hunter — FringeReview, Pittsburgh Fringe 2026</p>
          <a
            href="https://fringereview.co.uk/review/pittsburgh-fringe/2026/gulp/"
            target="_blank"
            rel="noopener noreferrer"
            className="Gulp-link"
          >
            Read the full review
          </a>
        </section>

        <section className="Gulp-fringe-reviews card-border">
          <h2>Reviews from Fringe Festivals</h2>
          <p className="Gulp-section-lead">
            Audience reviews from past festival runs.
          </p>
          <ul className="Gulp-fringe-list">
            {fringeReviewLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="Gulp-link">
                  {label} reviews
                </a>
              </li>
            ))}
          </ul>
        </section>

      </div>

      <footer className="Gulp-footer">
        <p className="Gulp-footer-label">
          Follow{' '}
          <a
            href="https://www.instagram.com/gulp.show/"
            target="_blank"
            rel="noopener noreferrer"
            className="Gulp-footer-handle"
          >
            @gulp.show
          </a>
        </p>
        <div className="Gulp-footer-embed">
          <iframe
            title="Recent posts from @gulp.show on Instagram"
            src="https://www.instagram.com/gulp.show/embed"
            allow="encrypted-media"
            loading="lazy"
          />
        </div>
        <a
          href="https://www.instagram.com/gulp.show/"
          target="_blank"
          rel="noopener noreferrer"
          className="Gulp-link Gulp-footer-follow"
        >
          Follow on Instagram
        </a>
      </footer>
    </div>
  );
};

export default Gulp;
