"use client";
import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import { AuthContext } from "@/context/AuthContext";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import Orders from "./orders/page";
import AddMenuPage from "./addMenu/addMenu";
import Role from "./roles/page";
import User from "./user/page";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  // Manage the sidebar state
  const [open, setOpen] = useState<boolean>(false);
  const [selectedComponent, setSelectedComponent] = useState("Orders");

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]); // Dependencies

  // Return null to prevent rendering while redirecting
  if (!user) {
    return null;
  }

  // Render the selected component based on sidebar selection
  const renderComponent = () => {
    switch (selectedComponent) {
      case "Orders":
        return <Orders />;
      case "AddMenu":
        return <AddMenuPage />;
      case "Role":
        return <Role />;
      case "User":
        return <User />;
      default:
        return <p>Invalid selection</p>;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Section */}
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          width: open ? 100 : 240,
          position: "fixed",
          top: 0,
        }}
      >
        {/* Pass onMenuItemClick to Sidebar */}
        <Sidebar
          open={open}
          setOpen={setOpen}
          onMenuItemClick={setSelectedComponent}
        />
      </Box>

      {/* Main Content Section */}
      <Box sx={{ flex: 4, p: 1, ml: open ? 12 : 30, width: "100vh" }}>
        <Navbar />
        {/* Render selected component */}
        <Box sx={{ mt: 2 }}>{renderComponent()}</Box>
      </Box>
    </Box>
  );
}
