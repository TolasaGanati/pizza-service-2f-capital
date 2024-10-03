"use client";
import { Box } from "@mui/material";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Add_Menu } from "@/components/forms/addMenu";


const queryClient = new QueryClient();

export default function AddMenuPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Add_Menu
          title="Add Menu"
        />
      </Box>
    </QueryClientProvider>
  );
}

