import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { ButtonDefault } from "../buttons";

export default function Header() {
  const [togleMenu, setTogleMenu] = useState(false);
  const togleNav = () => {
    setTogleMenu(!togleMenu);
  };

  return (
    <header
      className={`w-full px-4 xl:px-0 py-5 bg-blueDark/20 backdrop-blur-sm ${
        togleMenu === true ? "rounded-b-lg" : "rounded-none"
      } shadow-sm fixed z-10`}
    >
      <nav className="flex items-center justify-between lg:container lg:mx-auto">
        {/* Logo */}
        <Link href="/">
          <a className={`text-white font-bold text-xl italic`}>
            Easy<span className={`text-blueLight`}>Finance</span>
          </a>
        </Link>

        {/* Desktop */}

        <ul className={`lg:flex lg:gap-4 lg:items-center hidden`}>
          <NavLink title={`Home`} path={`/`} />
          <NavLink title={`Blog`} path={`/blog`} />
          <NavLink title={`Planos`} path={`/plans`} />
          <NavLink title={`Serviços`} path={`/services`} />
          <NavLink title={`Contato`} path={`/contact`} />
          <ButtonDefault path={`/plans`} title={`Começe Agora`} />
        </ul>

        {/* Mobile */}
        <button
          className={`lg:hidden text-blueDark`}
          onClick={() => togleNav()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-red"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      <nav>
        {togleMenu && (
          <ul
            className={`lg:hidden flex flex-col gap-3 items-center mt-3 py-3 rounded`}
          >
            <NavLink title={`Home`} path={`/`} />
            <NavLink title={`Blog`} path={`/blog`} />
            <NavLink title={`Planos`} path={`/plans`} />
            <NavLink title={`Serviços`} path={`/services`} />
            <NavLink title={`Contato`} path={`/contact`} />
            <ButtonDefault path={`/plans`} title={`Começe Agora`} />
          </ul>
        )}
      </nav>
    </header>
  );
}
