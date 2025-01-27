import Link from "next/link";
import { GoHome, GoPerson } from "react-icons/go";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full m-auto mt-11">
      <p className="text-2xl">carlosedu</p>
      <ul className="items-center gap-10 bg-black-navbar rounded-full pl-2 pt-2 pr-8 pb-2 hidden md:flex">
        <li className="bg-black-bgButtonNavbar px-4 py-2 rounded-button">
          <a href="">
            <GoHome size={20} />
          </a>
        </li>
        <li>
          <Link href="/building" className="text-base">
            About
          </Link>
        </li>
        <li>
          <Link href="/building" className="text-base">
            Projects
          </Link>
        </li>
        <li>
          <a href="https://www.instagram.com/kadu_sz/" className="text-base">
            Contact me
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <button className="text-base bg-black-bgButtonNavbar py-3 px-5 rounded-button font-medium">
          <a href="https://www.instagram.com/kadu_sz/">Hire me</a>
        </button>
        <button className="y-3 px-3 rounded-full">
          <a href="https://www.instagram.com/kadu_sz/">
            <GoPerson size={22} />
          </a>
        </button>
      </div>
    </nav>
  );
};
