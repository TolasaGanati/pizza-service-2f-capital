import React from "react";
import { PiPackageBold } from "react-icons/pi";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IoPersonOutline } from "react-icons/io5";

type ManagerLink = {
  title: string;
  path: string;
  icon: React.ReactElement;
  id: string
  disable: boolean
};

export const sideBarMenu: ManagerLink[] = [
  {
    title: "Order",
    path: "/dashboard/orders",
    icon: <PiPackageBold />,
    id: "order",
    disable: true,
  },
  {
    title: "Add Menu",
    path: "/dashboard/addMenu",
    icon: <LiaPizzaSliceSolid />,
    id: "addMenu",
    disable: true,
  },
  {
    title: "Role",
    path: "/dashboard/roles",
    icon: <IoPersonOutline />,
    id: "role",
    disable: true,
  },
  {
    title: "User",
    path: "/dashboard/user",
    icon: <AccountCircleOutlinedIcon />,
    id: "user",
    disable: false,
  },
];


