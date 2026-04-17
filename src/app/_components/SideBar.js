import DashboardMainContent from "./dashboardMainContent";

export default function SideBar({ children }) {
  return (
    <div className="h-full flex flex-col">
      <DashboardMainContent>{children}</DashboardMainContent>
    </div>
  );
}
