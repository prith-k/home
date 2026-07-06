import React from 'react';
import './Climbing.css';

const base = process.env.PUBLIC_URL || '';

const climbingPhotos = [
  { src: `${base}/media/climbing/Prith final frontier.jpg`, alt: 'Climbing', description: 'Final Frontier 13a', credit: 'Josh Holt' },
  { src: `${base}/media/climbing/Rincon - Scott Eubank 1-23-22-50.jpg`, alt: 'Climbing at Rincon', description: 'Musta been High 5.13c R', credit: 'Scott Eubank' },
  { src: `${base}/media/climbing/Prith Air Sweden-16.jpg`, alt: 'Air Sweden', description: 'Air Sweden 13b R (second go)', credit: 'Scott Eubank' },
  { src: `${base}/media/climbing/Prith China Doll April 2025-274.jpg`, alt: 'China Doll', description: 'China Doll 14a R', credit: 'Scott Eubank' },
];

/**
 * CLIMBING — Edit the content below for your climbing page.
 * Add bio, achievements, and any links or media.
 */
const Climbing = () => {
  return (
    <div className="Climbing">
      <h1>Climbing</h1>
      <div className="climbing-content">
        <div className="bio-entry card-border climbing-bio">
          <p>
            I've been climbing since 2014. I've done some stuff I'm pretty proud of. IDK why you might want to know, but here are some photos and ticks.
          </p>
        </div>
        <div className="bio-entry card-border climbing-extra">
          <h2>Routes</h2>
          <p>
          Sport: A Steep Climb Named Desire 5.14a, Rouge 14a, Nephson 13c (3rd go)
          </p>
          <p>
          Trad: China Doll 5.14a R, Musta' Been High 5.13c R, Stingray 5.13d, Home on the Range 5.13d, Deadline 5.13d, Hurricane Crack 5.13c (2nd go), Final Frontier 13a/b, Air Sweden 13b R (2nd go), Learning to Fly 5.13b (onsight),Tanuki 5.13 (2nd go)
          </p>
        </div>
      </div>
      <section className="Climbing-gallery" aria-label="Climbing photos">
        <h2 className="Climbing-gallery-title">Photos</h2>
        <div className="Climbing-gallery-grid">
          {climbingPhotos.map((photo, i) => (
            <div key={i} className="Climbing-gallery-item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              {(photo.description || photo.credit) && (
                <div className="Climbing-gallery-caption">
                  {photo.description && <p className="Climbing-gallery-desc">{photo.description}</p>}
                  {photo.credit && <p className="Climbing-gallery-credit">Photo: {photo.credit}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Climbing;
