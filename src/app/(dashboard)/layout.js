import SideBar from "@/app/_components/SideBar";
import SideBarContent from "../_components/sideBarContent";
import SideDrawer from "../_components/sideDrawer";
import DrawerInput from "../_components/drawerInput";

export default function DashboardLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open h-full">
      {/* TOGGLE */}
      <DrawerInput />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col h-screen">
        <SideBar>{children}</SideBar>
      </div>

      <div className="drawer-side transition-all duration-500 z-40  ">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlaytransition-all duration-500 "
        ></label>

        <SideDrawer />

        <aside className=" bg-accent-950   w-45 ml-20  is-drawer-open:w-70 pt-50 transition-all duration-500     min-h-screen m-auto  fixed justify-center items-start flex flex-col">
          <SideBarContent />
        </aside>
      </div>
    </div>
  );
}
