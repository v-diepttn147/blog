import Link from "next/link";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const FOOTER_LINKS = [
  {
    title: "Github",
    href: "https://github.com/nhanluongoe",
    icon: <FaGithub />,
  },
  {
    title: "Linkedin",
    href: "https://linkedin.com/in/nhanlt18",
    icon: <FaLinkedin />,
  },
  {
    title: "Stackoverflow",
    href: "https://stackoverflow.com/users/13448022/nhan-luong",
    icon: <FaStackOverflow />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center py-3 border-t border-t-zinc-200 mt-10 text-zinc-400">
      <p className="text-sm">{currentYear} © Nhan Luong</p>
      <div className="flex gap-x-2">
        {FOOTER_LINKS.map((item) => (
          <Link key={item.title} href={item.href} target="_blank">
            {item.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}
