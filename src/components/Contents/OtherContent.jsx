import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Content.module.css";
function OtherContent({ label, children, image }) {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <img src={image} className={styles.image_}></img>
        </Col>
        <Col>
          <div className={styles.text_}>
            <label className={styles.label}>{label}</label>
            <p style={{ fontSize: 15, marginTop: 15 }}>{children}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default OtherContent;
