import React, { useState } from 'react';
import styles from './Contact.module.scss';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    message: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    subject: '',
    message: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = {
      fullName: '',
      subject: '',
      message: '',
      email: ''
    };

    if (!formData.fullName) {
      newErrors.fullName = 'FullName is required';
      hasError = true;
    }
    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
      hasError = true;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
      hasError = true;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  return (
    <div className={styles.contactPage}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <img src="/assets/images/routertest/logo.svg" alt="Logo" />
        </div>
        <div className={styles.navRight}>
          <span>ENG</span>
          <div className={styles.profile}>
            <img src="/assets/images/routertest/guestpfp.svg" alt="Profile" />
            <span>Giorgi</span>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <h1>Contact Us</h1>
        <h2>Get In Touch</h2>
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className={styles.error}>{errors.subject}</span>}
          </div>

          <div className={styles.inputGroup}>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <div className={styles.submitRow}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <button type="submit">SEND</button>
          </div>
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </form>
      </main>

      <div className={styles.socialLinks}>
        <span>FOLLOW US</span>
        <div className={styles.icons}>
          <a href="#"><img src="/assets/images/networks/instagram-dark-icon.svg" alt="Instagram" /></a>
          <a href="#"><img src="/assets/images/networks/facebook-dark-icon.svg" alt="Facebook" /></a>
          <a href="#"><img src="/assets/images/networks/tiktok-dark-icon.svg" alt="TikTok" /></a>
          <a href="#"><img src="/assets/images/networks/linkedin-dark-icon.svg" alt="LinkedIn" /></a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 