/* eslint-disable @next/next/no-img-element */
import styles from '../styles/ImageGallery.module.css';
import { useState } from 'react';

const images = [
  { src: '/image1.jpg', title: 'Neurons' },
  { src: '/image2.jpg', title: 'Galaxy' },
  { src: '/image3.jpg', title: 'Planet' },
];

const ImageGallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(1); // Initially expand the middle image

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.imageContainer} ${index === expandedIndex ? styles.expanded : ''}`}
          onMouseEnter={() => setExpandedIndex(index)}
        >
          <img src={image.src} alt={image.title} className={styles.image} />
          <div className={styles.imageTitle}>{image.title}</div>
        </div>
      ))}
    </div>
  );
};


export default ImageGallery;
