import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

// Images
import everest from "../../public/companies/everest.svg";
import austria from "../../public/companies/austria.svg";
import db from "../../public/companies/db.svg";
import amro from "../../public/companies/amro.svg";
import invest from "../../public/companies/invest.svg";
import pioneer from "../../public/companies/pioneer.svg";

// Arrow Style
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className="text-center">
        <Slider {...settings}>
          <div>
            <Image src={everest} width="200" height="200" alt="everest" />
          </div>
          <div>
            <Image src={austria} width="200" height="200" alt="austria" />
          </div>
          <div>
            <Image src={db} width="200" height="200" alt="db" />
          </div>
          <div>
            <Image src={amro} width="200" height="200" alt="amro" />
          </div>
          <div>
            <Image src={pioneer} width="200" height="200" alt="pioneer" />
          </div>
          <div>
            <Image src={invest} width="200" height="200" alt="invest" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
