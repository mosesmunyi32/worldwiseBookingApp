import CabinList from "./cabinList";

export default function PageContent({ children, className = "" }) {
  return (
    <main
      className={` flex absolute justify-center items-center mt-10 p-4 ${className}`}
    >
      {children}
      <CabinList />
    </main>
  );
}
