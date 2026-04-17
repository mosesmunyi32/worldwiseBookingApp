import SideBarNav from "./sidebarNav";

function DashboardMainContent({ children }) {
  return (
    <main className="flex-1 h-screen relative    flex flex-col">
      <div className="mx-auto w-full  max-w-6xl px-6 py-17  overflow-y-auto">
        <div className=" absolute left-0 top-0 w-full">
          <SideBarNav />
        </div>

        <div className=" p-15  mb-6">{children}</div>
      </div>
    </main>
  );
}
export default DashboardMainContent;
