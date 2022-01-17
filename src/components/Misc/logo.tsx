import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <a className={`text-white font-bold text-xl italic`}>
        Easy<span className={`text-blueLight`}>Finance</span>
      </a>
    </Link>
  );
};
