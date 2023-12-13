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
    <div className="card group flex justify-between items-center">
      <div className="flex items-center">
        <div className="pr-2 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <p className="">{title}</p>
          <p className="text-sm text-zinc-500">{desc}</p>
        </div>
      </div>
      <button className="button-secondary">
        <Link href={href} target="_blank">
          Visit
        </Link>
      </button>
    </div>
  );
}
