import React from 'react'
import styles from './Footer.module.css'
function Footer() {
  return (
    <div className={styles.container}>
      <p>
        <span>Copyright </span>
        <i class="bi bi-c-circle"></i>
        <span> Your Website 2020</span>
      </p>
    </div>
  );
}

export default Footer