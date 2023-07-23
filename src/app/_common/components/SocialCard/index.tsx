import Link from "next/link";
import { ReactNode } from "react";

interface ICardProps {
  title: string;
  desc: string;
  icon?: ReactNode;
  href?: string;
}

export default function SocialCard(props: ICardProps) {
  const { title, desc, icon, href = "#" } = props;

  return (
    <div className="group border border-zinc-200 hover:shadow-lg transition flex justify-between items-center p-5 rounded-3xl w-full">
      <div className="flex items-center">
        <div className="pr-2 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <p className="">{title}</p>
          <p className="text-sm text-zinc-500">{desc}</p>
        </div>
      </div>
      <button className="border border-zinc-200 rounded-xl px-3 py-1">
        <Link href={href} target="_blank">Visit</Link>
      </button>
    </div>
  );
}
