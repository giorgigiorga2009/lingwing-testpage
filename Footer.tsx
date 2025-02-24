import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <Link to="/routertest">Courses</Link>
      <Link to="/routertest">Packages</Link>
      <Link to="/routertest">About Us</Link>
      <Link to="/routertest">Blog</Link>
      <Link to="/routertest">Apps</Link>
      <Link to="/routertest">Privacy</Link>
      <Link to="/routertest">F.A.Q</Link>
      <Link to="/routertest/contact">Contact</Link>
    </nav>
  );
};

export default Footer; 