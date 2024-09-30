import React from "react";
import { PiPackageBold } from "react-icons/pi";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IoPersonOutline } from "react-icons/io5";

type AdminLink = {
  title: string;
  path: string;
  icon: React.ReactElement;
  id: string
  disable: boolean
};

export const sideBarMenu: AdminLink[] = [
  {
    title: "Order",
    path: "/dashboard/orders",
    icon: <PiPackageBold />,
    id: "order",
    disable: true,
  },
  {
    title: "Add Menu",
    path: "/addMenu",
    icon: <LiaPizzaSliceSolid />,
    id: "addMenu",
    disable: true,
  },
  {
    title: "Role",
    path: "/role",
    icon: <IoPersonOutline />,
    id: "role",
    disable: true,
  },
  {
    title: "User",
    path: "/user",
    icon: <AccountCircleOutlinedIcon />,
    id: "user",
    disable: false,
  },
  
];


