import Logo from "./logo";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className=" px-8 py-5 ">
      <div className="flex gap-60 mr-auto justify-around items-center max-w-7xl mx-auto">
        <Logo />

        <Navigation />
      </div>
    </header>
  );
}
