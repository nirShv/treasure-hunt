import React, { useRef, useEffect, useState } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  // משיכת תמונות מהתיקייה /assets/events/
  useEffect(() => {
    const importAll = (requireContext) =>
      requireContext.keys().map(requireContext);

    const images = importAll(require.context('../assets/events', false, /\.(png|jpe?g|svg)$/));
    setImages(images);
  }, []);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="gallery">
      <h2>גלריית תמונות</h2>
      <div className="gallery-container" ref={galleryRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`אירוע ${index + 1}`}
            className={`gallery-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      {currentIndex > 1 && (
        <div className="swipe-hint left" onClick={handlePrev}>
          <span>⇦</span>
        </div>
      )}
      {currentIndex < images.length - 2 && (
        <div className="swipe-hint right" onClick={handleNext}>
          <span>⇨</span>
        </div>
      )}
    </section>
  );
}

export default Gallery;
