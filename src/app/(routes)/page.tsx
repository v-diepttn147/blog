import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialCard } from "../_common/components";

const SOCIALS = {
  github: "https://github.com/nhanluongoe",
  linkedin: "https://www.linkedin.com/in/nhanlt18/",
};

const INTRO =
  "Hi, I'm a Front-End Software Engineer. Interested in building applications, design systems, and open-source projects.";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <p className="text-zinc-600 mb-5 text-start">{INTRO}</p>
      <div className="w-full">
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
      </div>
    </main>
  );
}
