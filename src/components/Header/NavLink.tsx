import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: Props) {
  const route = useRouter();
  const isActive = route.pathname === path;

  return (
    <Link href={path}>
      <a
        className={`${isActive ? "text-blueLight" : "text-white"} ${
          isActive ? "hover:text-white" : "hover:text-blueLight"
        } transition uppercase font-light p-4`}
      >
        {title}
      </a>
    </Link>
  );
}
