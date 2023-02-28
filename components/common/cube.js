import React from "react";
import * as S from "../hero.styles";

const Cube = React.memo(() => {
  let width = window.innerWidth;
  let boxCount;
  if (width === 1370) {
    boxCount = Math.floor(window.innerWidth / 26) * 15;
  }else {
    boxCount = Math.floor(window.innerWidth / 20) * 15;
  }
  const boxes = [];

  for (let i = 0; i < boxCount; i++) {
    boxes.push(<S.Box key={i}></S.Box>);
  }

  return <React.Fragment>{boxes}</React.Fragment>;
});
export default Cube;
