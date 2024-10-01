"use client";
import { Box } from "@mui/material";
import { useRef } from "react";
import FeaturedPizza from "../pages/featuredPizza";
import TopRestaurants from "../pages/topRestaurants";
import PopularPizzas from "../pages/popularPizzas";
import FastingPizzas from "../pages/fastingPizzas";
import { Footer } from "@/components/forms/footer";
import LandingPage from "@/components/forms/landing";

export default function HomePage() {
  const PageRef = useRef<HTMLDivElement | null>(null); 
  const scrollToOrders = () => {
    if (PageRef.current) {
      PageRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    
      <Box sx={{ height: "100vh", color: "white" }}>
        {/* Left */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <LandingPage /> {/* Pass the scroll handler */}
          <Box ref={PageRef}>
            <FeaturedPizza />
          </Box>
          <Box ref={PageRef}>
            <TopRestaurants />
          </Box>
          <Box ref={PageRef}>
            <PopularPizzas />
          </Box>
          <Box ref={PageRef}>
            <FastingPizzas />
          </Box>
          
          <Box ref={PageRef}>
            <Footer />
          </Box>
        </Box>
      </Box>
    
  );
}
