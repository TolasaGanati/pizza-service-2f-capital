"use client";
import { Box, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import PizzaOrder from "@/components/forms/order";

export default function OrderHistoryPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Box>
      <Box sx={{ height: "100vh", color: "white" }}>
        {/* Left */}
        <Box sx={{ display: "flex" }}>
          <PizzaOrder />
        </Box>
      </Box>
    </Box>
  );
}
