import React from 'react'
import Button from "react-bootstrap/Button";
function Buttonct() {
  return (
    <div>
      <Button
        variant="default"
        style={{
          background: "#ef0c75",
          marginTop: 35,
          color: "white",
          textTransform: "uppercase",
          height:60,
          width:170,
          fontSize:13,
          fontWeight:'500',
          borderRadius:30
        }}
      >
        Learn More
      </Button>{" "}
    </div>
  );
}

export default Buttonct