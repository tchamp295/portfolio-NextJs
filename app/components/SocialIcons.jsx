import Link from "next/link";
import { SiGithub, SiLinktree, SiUpwork } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 lg:gap-6 pr-4  ">
      <Link
        href={""}
        className="bg-[#08d9d6]  p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary-500 hover:translate-y-1 transition-all duration-500"
      >
        <RiTwitterXLine />
      </Link>
      <Link
        href={""}
        className="bg-[#08d9d6] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary-500 hover:translate-y-1 transition-all duration-500"
      >
        <CiLinkedin />
      </Link>
      <Link
        href={""}
        className="bg-[#08d9d6] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary-500 hover:translate-y-1 transition-all duration-500"
      >
        < SiGithub />
      </Link>

      <Link
        href={""}
        className="bg-[#08d971] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary-500 hover:translate-y-1 transition-all duration-500"
      >
        < SiLinktree  />
      </Link>
      <Link
        href={""}
        className="bg-[#08d971] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary-500 hover:translate-y-1 transition-all duration-500"
      >
        < SiUpwork  />
      </Link>
    </div>
  );
};

export default SocialIcons;
