import Link from "next/link";

export interface INavItem {
  id: string | number;
  label: string;
  value: string;
}

const NAV_ITEMS: INavItem[] = [
  {
    id: 1,
    label: "Post",
    value: "/posts",
  },
  {
    id: 2,
    label: "About",
    value: "/about",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-start pb-8">
      <Link href="/" className="text-2xl font-semibold border-b-4 border-black">Nhan Luong</Link>
      <ul className="flex gap-x-2 text-secondary">
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
