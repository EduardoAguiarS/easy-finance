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
        className={`${isActive ? "text-blueLight" : "text-blueDark"} ${
          isActive ? "hover:text-blueDark" : "hover:text-blueLight"
        } transition`}
      >
        {title}
      </a>
    </Link>
  );
}
