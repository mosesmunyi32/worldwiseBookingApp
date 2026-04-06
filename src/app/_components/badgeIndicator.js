export default function BadgeIndicator({ children, discount }) {
  return (
    <div className="indicator">
      <span
        className="indicator-item  badge p-1 badge-sm bg-transparent text-accent-200 text-xl"
        style={{ top: "-8px", right: "-8px" }}
      >
        -${discount}
      </span>
      <div className="grid place-items-center">{children}</div>
    </div>
  );
}
