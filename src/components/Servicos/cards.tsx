import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const Cards = ({ title, description, image, alt }: Props) => {
  return (
    <div className="p-6 text-center w-80">
      <div className="block mx-auto mb-3">
        <Image src={image} alt={alt} />
      </div>
      <h3 className="mb-3 text-xl text-yellow">{title}</h3>
      <p className="text-lg font-light text-white">{description}</p>
    </div>
  );
};

export default Cards;
