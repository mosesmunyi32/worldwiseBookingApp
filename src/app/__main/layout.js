import Header from "../_components/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex-1 px-8  grid w-full ">
        <main className="max-w-7xl mx-auto w-full">{children}</main>
      </div>
    </>
  );
}
