import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img alt="img" src="./images/img1.jpg" />
      </Wrap>
      <Wrap>
        <img alt="img" src="./images/img2.jpg" />
      </Wrap>
      <Wrap>
        <img alt='img' src="./images/img3.webp" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;
const Carousel = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }
  li.slick-active button::before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
