import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="text-[#ADB78E] py-2 pr-4 pl-3 sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </Link>
  );
};
export default NavLink;