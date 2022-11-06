import create from "zustand";

const initials = (set) => ({
  isVisible: false,
  toggleSidebar: () => {
    set(({ isVisible }) => ({ isVisible: !isVisible }));
  },
});

const useSidebar = create(initials);

export default useSidebar;
