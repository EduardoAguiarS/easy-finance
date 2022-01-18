import Link from "next/link";
import React from "react";

interface Props {
  img?: string;
  title: string;
  description: string;
  slug: string;
}

export const Card = ({ img, title, description, slug }: Props) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="relative">
        <div className="relative flex items-end overflow-hidden rounded shadow-lg cursor-pointer w-80 h-80">
          <div className="w-80 h-80 bg-cover bg-center bg-no-repeat transition duration-300 opacity-70 hover:opacity-100 hover:scale-125 bg-[url('https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format')]"></div>
        </div>
        <div className="absolute bottom-0 left-0 block p-3 text-center rounded-b w-80 bg-blueDark/30 backdrop-blur-sm">
          <h3 className="text-2xl text-blueLight">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </Link>
  );
};
