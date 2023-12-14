import { FaGithub, FaLinkedin } from "react-icons/fa";

import { MagneticPoints, SocialCard } from "../_common/components";
import Image from "next/image";
import Link from "next/link";

const SOCIALS = {
  github: "https://github.com/nhanluongoe",
  linkedin: "https://www.linkedin.com/in/nhanlt18/",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
      <section className="mb-5 flex">
        <div className="flex flex-col justify-center flex-1">
          <p className="text-5xl">Build things from small.</p>
          <Link href="/blog" className="w-fit">
            <button className="button-primary w-[200px] my-5">
              Read blogs
            </button>
          </Link>
        </div>
        <div className="flex-1 grid place-content-center relative w-fit h-fit">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="" alt="hero image" width="250" height="250"></Image>
          </div>
          <MagneticPoints width={15} height={15} />
        </div>
      </section>

      <section className="w-full my-5">
        <div className="flex gap-x-5">
          <SocialCard
            title="Github"
            desc="nhanluongoe"
            icon={<FaGithub size="3em" />}
            href={SOCIALS.github}
          />
          <SocialCard
            title="Linkedin"
            desc="nhanlt18"
            icon={<FaLinkedin size="3em" />}
            href={SOCIALS.linkedin}
          />
        </div>
      </section>
    </div>
  );
}
