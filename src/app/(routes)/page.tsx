import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialCard } from "../_common/components";

const SOCIALS = {
  github: "https://github.com/nhanluongoe",
  linkedin: "https://www.linkedin.com/in/nhanlt18/",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <p className="text-zinc-600 mb-5">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident.
      </p>
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
