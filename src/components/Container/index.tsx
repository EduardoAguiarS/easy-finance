import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="container px-4 mx-auto xl:px-0">{children}</div>;
}

export default Container;
