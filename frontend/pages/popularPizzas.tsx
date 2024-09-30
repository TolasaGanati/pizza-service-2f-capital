"use client";
import { Box, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import FeaturedPizza from "@/components/forms/featuredPizza";
import PopularPizzas from "@/components/forms/popularPizzas";

export default function Page() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Box>
      <Box sx={{ height: "100vh", color: "white" }}>
        {/* Left */}
        <Box sx={{ display: "flex" }}>
          <PopularPizzas />
        </Box>
      </Box>
    </Box>
  );
}
