export default function BadgeIndicator({ children, discount }) {
  return (
    <div className="indicator">
      <span
        className="indicator-item badge bg-accent-600 badge-sm border-primary-300   "
        style={{ top: "-8px", right: "-8px" }}
      >
        -${discount}
      </span>
      <div className="grid place-items-center">{children}</div>
    </div>
  );
}
