"use client";
import Layout from "@/app/dashboard/layout"; 
import AddMenu from "@/pages/addMenu";
import { Box } from "@mui/material";
import React from "react";

export default function AddMenuPage() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Layout>
        <AddMenu />
      </Layout>
    </Box>
  );
}
