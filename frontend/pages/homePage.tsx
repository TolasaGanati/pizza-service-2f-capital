"use client";
import { Box } from "@mui/material";
import { useRef } from "react";
import LandingPage from "@/components/forms/homePage";
import OrderHistory from "./orderHistory";
import FeaturedPizza from "./featuredPizza";
import TopRestaurants from "./topRestaurants";
import PopularPizzas from "./popularPizzas";
import FastingPizzas from "./fastingPizzas";
import Footer from "./footer";

export default function HomePage() {
  const PageRef = useRef<HTMLDivElement | null>(null); 
  const scrollToOrders = () => {
    if (PageRef.current) {
      PageRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <Box>
      <Box sx={{ height: "100vh", color: "white" }}>
        {/* Left */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <LandingPage />{" "}
          {/* Pass the scroll handler */}
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
          </Box><Box ref={PageRef}>
            <FastingPizzas />
          </Box>
          <Box ref={PageRef}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
