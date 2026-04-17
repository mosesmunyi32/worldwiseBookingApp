import SideToggleIcon from "./sideToggleIcon";

function ToggleLabel() {
  return (
    <>
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="btn  btn-square fixed btn-ghost"
      >
        <SideToggleIcon />
      </label>
    </>
  );
}

export default ToggleLabel;
