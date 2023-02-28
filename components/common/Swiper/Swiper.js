import React from "react";
// import { SwiperSlide } from "swiper/react";
// import { useQuery } from "@apollo/client";
// import { customerContent } from "../../queries";
// import { pic } from "../../utils/Servicedata";
// import { images, flipimages } from "../../utils/Servicedata";

import * as S from "./Swiper.style";
import ReviewCards from "../ReviewCards";
// SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);

const SwiperComponent = ({ data }) => {
  return (
    <S.Container>
      <ReviewCards data={data} />
    </S.Container>
  );
};
export default SwiperComponent;
