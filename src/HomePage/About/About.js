import React from 'react';
import './About.css';

const base = process.env.PUBLIC_URL || '';
 
const stagePhotos = [
  { src: `${base}/media/stage/soleilandprith.jpg`, alt: 'Stage performance', description: 'The Dinner Date', credit: 'Bryan Richard Martin' },
  { src: `${base}/media/stage/babygeorgie1.png`, alt: 'Stage performance', description: 'Clownsgiving 2024', credit: '' },
  { src: `${base}/media/stage/toilet1.jpg`, alt: 'Stage performance', description: 'The Young Lover', credit: 'Bryan Richard Martin' },
  { src: `${base}/media/stage/father%20georgie.JPG`, alt: 'Stage performance', description:  'Clownsgiving 2024', credit: '' },
];

/**
 * ABOUT — Edit the content below for your performer bio.
 * Update the paragraph and any highlights or skills you want to show.
 */
const About = () => {
  const highlights = [
    'Performance',
    'Comedy',
    'Theater',
    'Improv',
    'Writing',
    // EDIT: Add or remove highlight tags
  ];

  return (
    <div className="About">
      <h1>About</h1>
      <div className="bio-content">
        <div className="bio-entry card-border about-me">
          <p>
          Prith is a clown, improviser, and absurdist comedian currently residing in Colorado, USA. He has created and performed ensemble and individual work in various theaters across the US. His style is informed by years of living in campgrounds entertaining people with his body around campfires. His only goal is giving you a night you will remember forever.
          </p>
        </div>
       
        <div className="line" />
      </div>
      <section className="About-gallery" aria-label="Stage photos">
        <div className="About-gallery-grid">
          {stagePhotos.map((photo, i) => (
            <div key={i} className="About-gallery-item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              {(photo.description || photo.credit) && (
                <div className="About-gallery-caption">
                  {photo.description && <p className="About-gallery-desc">{photo.description}</p>}
                  {photo.credit && <p className="About-gallery-credit">Photo: {photo.credit}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
