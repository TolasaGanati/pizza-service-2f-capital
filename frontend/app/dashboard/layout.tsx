"use client";
import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  // if (!user) {
  //   router.push("/login")
  // }
  
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar with dynamic width */}
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          width: open ? 100 : 240,
          position: "fixed",
          top: 0,
          backgroundColor: "var(--bgCard)", // Ensure the background is applied
        }}
      >
        <Sidebar open={open} setOpen={setOpen} />
      </Box>

      {/* Main content area with Navbar and children */}
      <Box
        sx={{
          flex: 4,
          p: 1,
          ml: open ? 12 : 30,
          width: "100%",
          backgroundColor: "var(--bgPage)", // Ensure consistent page background
        }}
      >
        <Navbar />
        <Box sx={{ mt: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
}
