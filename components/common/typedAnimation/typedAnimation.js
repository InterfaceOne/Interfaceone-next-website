import React from "react";
import Typed from "react-typed";
const TypedAnimation = (props) => {
  return (
    <Typed typeSpeed={200} backSpeed={80} startDelay={100} {...props}></Typed>
    
  );
};

export default TypedAnimation;
