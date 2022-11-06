import useSidebar from "../../hooks/stores/useSidebar";
import Avatar from "../global/Avatar";

const items = ["Home", "About", "Messages", "Contact", "More"];

const Sidebar = () => {
  const { isVisible, toggleSidebar } = useSidebar();

  return (
    <>
      {isVisible && (
        <div
          onClick={toggleSidebar}
          className="fixed top-0 left-0 w-screen h-screen"
        />
      )}
      <div
        className={`w-64 p-3 h-screen bg-gray-900 fixed top-0 left-0 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        } duration-150`}
      >
        <Avatar
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          alt="avatar"
          className="w-12 mx-auto"
        />
        <p className="text-white text-center text-sm mt-2 font-bold">Welcome</p>
        <p className="text-white font-bold text-center">Andrew john</p>
        <div className="">
          {items.map((item) => (
            <div
              key={item}
              className="text-white p-2 bg-gray-800 shadow shadow-gray-500 mt-2 rounded-md font-semibold hover:bg-white hover:text-black cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
