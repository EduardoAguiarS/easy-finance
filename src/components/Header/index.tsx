import React from "react";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <div>
      <ul className="flex gap-4">
        <NavLink title="Home" path="/" />
        <NavLink title="Blog" path="/blog" />
        <NavLink title="Contato" path="/contact" />
      </ul>
    </div>
  );
}
