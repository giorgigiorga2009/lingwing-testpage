import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Start.module.scss';
import Footer from './Footer';
import Reviews from './reviews';
import EnVideo from './envideo';

const Start = () => {
  return (
    <div className={styles.startPage}>
      <nav className={styles.navigation}>
        <div className={styles.navLeft}>
          <img src="/assets/images/routertest/logo.svg" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.navRight}>
          <div className={styles.languageSelector}>
            <span>ENG</span>
          </div>
          <Link to="/routertest/contact" className={styles.contactButton}>Contact</Link>
          <div className={styles.profile}>
            <img src="/assets/images/routertest/guestpfp.svg" alt="Profile" className={styles.profilePic} />
            <span>Giorgi</span>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.videoContainer}>
          <div className={styles.videoPlaceholder}>
            <EnVideo />
          </div>
        </div>

        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Start; 