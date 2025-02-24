import React, { useEffect, useRef } from 'react';
import styles from './envideo.module.scss';

const EnVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Debug log to check if video is loading
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
      });
      
      videoRef.current.addEventListener('error', (e) => {
        console.error('Error loading video:', e);
      });
    }
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video 
        ref={videoRef}
        className={styles.video}
        autoPlay 
        loop 
        muted 
        playsInline
        controls={false}
      >
        <source src="/assets/video/en.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default EnVideo;
