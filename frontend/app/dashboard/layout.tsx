"use client";
import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import { AuthContext } from "@/context/AuthContext";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import Orders from "./orders/page";
import AddMenuPage from "./addMenu/page";
import Role from "./roles/page";
import User from "./user/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState<boolean>(false);
  const [selectedComponent, setSelectedComponent] = useState("Order");

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Order":
        return <Orders />;
      case "Add Menu":
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
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          width: open ? 100 : 240,
          position: "fixed",
          top: 0,
        }}
      >
        <Sidebar
          open={open}
          setOpen={setOpen}
          onMenuItemClick={setSelectedComponent}
        />
      </Box>

      <Box sx={{ flex: 4, p: 1, ml: open ? 12 : 30, width: "100vh" }}>
        <Navbar />
        <Box sx={{ mt: 2 }}>{renderComponent()}</Box>
      </Box>
    </Box>
  );
}

