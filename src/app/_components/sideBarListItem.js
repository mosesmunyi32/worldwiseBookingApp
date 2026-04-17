import Link from "next/link";
import { Children } from "react";

export default function SideBarListItem({
  hoverName,
  icon: Icon,
  itemName,
  toLink,
}) {
  return (
    <li>
      <Link
        href={toLink}
        className="is-drawer-close:tooltip text-primary-200 text-l hover:text-primary-100 hover:bg-primary-900 transition-all duration-150 is-drawer-close:tooltip-right"
        data-tip={hoverName}
      >
        <Icon className="size-8 text-gray-500" />

        <span className="is-drawer-close:hidden"> {itemName} </span>
      </Link>
    </li>
  );
}
