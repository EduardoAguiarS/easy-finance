import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
  text: string;
}

function FooterSection({ children, text }: NavbarProps) {
  return (
    <div>
      <h3 className="text-blueLight">{text}</h3>
      {children}
    </div>
  );
}

export default FooterSection;
