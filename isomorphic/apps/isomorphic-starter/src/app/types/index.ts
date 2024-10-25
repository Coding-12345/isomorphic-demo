// types.ts or near your SidebarMenu component
import { ReactNode } from "react";

export interface DropdownItem {
  name: string;
  href: string;
  badge?: string;
}

export interface MenuItem {
  name: string;
  href?: string;
  icon?: ReactNode;
  badge?: string;
  dropdownItems?: DropdownItem[];
}
