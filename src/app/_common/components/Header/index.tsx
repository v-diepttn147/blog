import Link from "next/link";

export interface INavItem {
  id: string | number;
  label: string;
  value: string;
}

const NAV_ITEMS: INavItem[] = [
  {
    id: 1,
    label: "Blog",
    value: "/blog",
  },
  {
    id: 2,
    label: "Projects",
    value: "/projects",
  },
  {
    id: 3,
    label: "Resume",
    value: "/resume",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-start pb-8">
      <Link href="/" className="text-2xl font-semibold pb-2">
        Nhan Luong
      </Link>
      <ul className="flex gap-x-2 text-zinc-500">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <Link href={item.value} className="">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
