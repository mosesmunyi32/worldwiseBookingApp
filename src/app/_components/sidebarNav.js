import Logo from "./logo";
import Navigation from "./navigation";
import ToggleLabel from "./toggleLabel";

export default function SideBarNav() {
  return (
    <nav className=" navbar z-50 flex justify-around items-center  bg-primary-950  ">
      <Logo />
      <Navigation />

      <div className="absolute left-10 top:5 lg:top-17 lg:left-83">
        <ToggleLabel />
      </div>
    </nav>
  );
}
