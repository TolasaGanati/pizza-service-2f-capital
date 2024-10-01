"use client";
import { AuthContext } from "@/context/AuthContext";
import { UserRole } from "@/utils/schema";
import { Box, IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useContext(AuthContext);

  const displayPath = pathname?.split("/").slice(2).join("/");

  return (
    <Box
      sx={{
        backgroundColor: "var(--bgCard)",
        p: 2,
        borderRadius: 2,
        fontSize: 18,
        display: "flex",
        justifyContent: "space-between", // Align left and right content
        alignItems: "center",
      }}
    >
      {/* Left side content (path display) */}
      <Box>
        {user?.role === UserRole.restaurantManager
          ? "Manager/"
          : user?.role === UserRole.customer
            ? "Customer/"
            : "Guest"}
        {pathname === "/dashboard" ? "dashboard" : displayPath}
      </Box>

      {/* Right side content (icons) */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="notifications">
          <NotificationsIcon />
        </IconButton>
        <IconButton aria-label="user profile">
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
