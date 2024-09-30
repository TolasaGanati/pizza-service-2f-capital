"use client";
import { Box, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import OrderHistory from "@/components/forms/orderHistory";
import TopRestaurants from "@/components/forms/topRestaurants";

export default function Page() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (user?.role === "customer" || user?.role === "restaurantManager") {
    router.push("/dashboard/orders");
  }

  return (
    <Box>
      <Box sx={{ height: "100vh", color: "white" }}>
        {/* Left */}
        <Box sx={{ display: "flex" }}>
          <TopRestaurants />
        </Box>
      </Box>
    </Box>
  );
}
