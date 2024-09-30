"use client";
import { AuthContext } from "@/context/AuthContext";
import { UserRole } from "@/utils/schema";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useContext(AuthContext);

  // Ensure pathname is not null before using .split()
  const displayPath = pathname ? pathname.split("/").slice(2).join("/") : "";

  return (
    <Box
      sx={{
        backgroundColor: "var(--bgCard)",
        p: 2,
        borderRadius: 2,
        fontSize: 18,
      }}
    >
      {user?.role === UserRole.customer || user?.role === UserRole.restaurantManager
        ? "addMenu/"
        : user?.role === UserRole.customer
        ? "Order/"
        : ""}
      {pathname === "/dashboard" ? "dashboard" : displayPath}
    </Box>
  );
};

export default Navbar;
