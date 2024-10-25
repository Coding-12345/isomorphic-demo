import { MenuItem } from "@/app/types"; // Adjust import based on your path
import { IoIosSettings } from "react-icons/io";

export const menuItems: MenuItem[] = [
  {
    name: "Admin",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <IoIosSettings />,
    badge: "",
  },
];
