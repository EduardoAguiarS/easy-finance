import Link from "next/link";
interface Props {
  path: string;
  title: string;
}

export const ButtonDefault = ({ path, title }: Props) => {
  return (
    <Link href={path}>
      <button
        className={`bg-yellow uppercase text-white p-3 rounded transition hover:bg-orange`}
      >
        {title}
      </button>
    </Link>
  );
};
