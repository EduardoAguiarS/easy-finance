import React from "react";

interface Props {
  text: string;
  color: string;
}

export const SectionTitle = ({ text, color }: Props) => {
  return (
    <h2 className={`${color} text-3xl font-bold text-center xl:text-4xl`}>
      {text}
    </h2>
  );
};
