import useSidebar from "../../hooks/stores/useSidebar";
import { AiOutlineMenu } from "react-icons/ai";
import flytantlogowhite from "../../assets/global/flytantlogowhite.png";

const Navbar = () => {
  const toggleSidebar = useSidebar((state) => state.toggleSidebar);

  return (
    <div className="bg-gray-900 h-12 md:h-16 lg:h-20 flex items-center justify-between px-2 md:px-4 lg:px-6 xl:px-8 sticky top-0">
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5">
        <AiOutlineMenu
          onClick={toggleSidebar}
          className="text-2xl md:text-3xl cursor-pointer text-white"
        />
        <img
          src={flytantlogowhite}
          alt="flytant logo"
          className="w-28 md:w-32 lg:w-36 xl:w-40 cursor-pointer"
        />
      </div>
      <button className="uppercase bg-white px-5 py-2 rounded-md font-semibold tracking-wide shadow-lg shadow-gray-500 hidden lg:block">
        Contact
      </button>
    </div>
  );
};

export default Navbar;
