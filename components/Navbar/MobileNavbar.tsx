import { NavLinks } from "@/constants/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div
        className={`${navOpen} transform transition-all duration-500 fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      >
        {" "}
      </div>
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[100006]`}>
        <CgClose
          onClick={closeNav}
          className="absolute top-0 right-0 mt-5 mr-5 sm:w-8 sm:h-8 w-6 h-6 text-white"
        />
        {NavLinks.map((links) => {
          return (
            <Link href={links.link} key={links.id}>
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px]  pb-2 sm:text-[30px]">
                {" "}
                {links.name}{" "}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;
