import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const Cards = ({ title, description, image, alt }: Props) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="p-6 text-center w-80"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <div className="block mx-auto mb-3">
        <Image src={image} alt={alt} />
      </div>
      <h3 className="mb-3 text-xl text-yellow">{title}</h3>
      <p className="text-lg font-light text-white">{description}</p>
    </div>
  );
};

export default Cards;
