"use client";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Footer from "@/components/forms/footer";

export default function FooterPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Box>
      <Box sx={{ height: "100vh", color: "white" }}>
        {/* Left */}
        <Box sx={{ display: "flex" }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
