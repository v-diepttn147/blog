"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-start pb-8">
      <Link href="/" className="text-2xl font-semibold pb-2 text-zinc-700">
        Nhan Luong
      </Link>
      <ul className="flex gap-x-2 text-zinc-500">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <Link
              href={item.value}
              className={`opacity-75 ${
                pathname.includes(item.value)
                  ? "opacity-100 border-b-2 border-b-zinc-400"
                  : ""
              } hover:opacity-100 hover:border-b-2 hover:border-b-zinc-400 pb-1`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
