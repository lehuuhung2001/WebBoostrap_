import React from 'react'
import Image from '../../resources/bg.PNG'
import styles from './Introduction.module.css'
import Buttonct from '../Buttonct/Buttonct';
function Introduction() {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        height: 550,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
      }}
    >
      <div className={styles.title}>
        One Page Wonder 
        <p style={{ fontSize: 50, margin: 0 }}>Will Rock Your Socks Off</p>
      </div>
        <Buttonct/>
    </div>
  );
}

export default Introduction