import Logo from "./logo";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className=" fixed top-0 z-10 py-1  w-full items-center flex justify-center ">
      <div className=" flex justify-around items-center gap-20 w-5xl py-5  ">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

// py - 5;

// px - 8;
