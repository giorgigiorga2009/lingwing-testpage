import React, { useEffect, useState } from 'react';
import styles from './reviews.module.scss';

type Review = {
  _id: string;
  review: string;
  userName: string;
  rating: number;
  avatarURL: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_URL || process.env.DEFAULT_URL}/public/reviews`);
      const data = await res.json();
      setReviews(data.data);
    };
    fetchReviews();
  }, []);

  const handleNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
      setIsSliding(false);
    }, 500); // Match this with CSS transition duration
  };

  const handlePrev = () => {
    if (isSliding) return;
    setIsSliding(true);
    
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsSliding(false);
    }, 500);
  };


  const getReviewIndex = (shift: number) => {
    return (activeIndex + shift + reviews.length) % reviews.length;
  };

  const getCardClassName = (position: 'prev' | 'active' | 'next') => {
    const baseClass = styles.reviewCard;
    const positionClass = styles[position];
    const slidingClass = isSliding ? styles.sliding : '';
    return `${baseClass} ${positionClass} ${slidingClass}`;
  };

  return (
    <div className={styles.testimonials}>
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>
        ←
      </button>
      
      <div className={styles.reviewsContainer}>
        <div className={getCardClassName('prev')}>
          <div className={styles.userInfo}>
            <img src={reviews[getReviewIndex(-1)].avatarURL} alt="avatar" className={styles.avatar} />
            <span className={styles.userName}>{reviews[getReviewIndex(-1)].userName}</span>
          </div>
          <div className={styles.stars}>
            {[...Array(reviews[getReviewIndex(-1)].rating)].map((_, i) => (
              <span key={i} className={styles.star}>★</span>
            ))}
          </div>
          <p className={styles.reviewText}>{reviews[getReviewIndex(-1)].review}</p>
        </div>

        <div className={getCardClassName('active')}>
          <div className={styles.userInfo}>
            <img src={reviews[activeIndex].avatarURL} alt="avatar" className={styles.avatar} />
            <span className={styles.userName}>{reviews[activeIndex].userName}</span>
          </div>
          <div className={styles.stars}>
            {[...Array(reviews[activeIndex].rating)].map((_, i) => (
              <span key={i} className={styles.star}>★</span>
            ))}
          </div>
          <p className={styles.reviewText}>{reviews[activeIndex].review}</p>
        </div>

        <div className={getCardClassName('next')}>
          <div className={styles.userInfo}>
            <img src={reviews[getReviewIndex(1)].avatarURL} alt="avatar" className={styles.avatar} />
            <span className={styles.userName}>{reviews[getReviewIndex(1)].userName}</span>
          </div>
          <div className={styles.stars}>
            {[...Array(reviews[getReviewIndex(1)].rating)].map((_, i) => (
              <span key={i} className={styles.star}>★</span>
            ))}
          </div>
          <p className={styles.reviewText}>{reviews[getReviewIndex(1)].review}</p>
        </div>
      </div>

      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>
        →
      </button>
    </div>
  );
};

export default Reviews;
