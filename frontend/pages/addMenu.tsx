"use client";

import Layout from "@/app/dashboard/layout";
import { Add_Menu } from "@/components/forms/addMenu";
import { Box } from "@mui/material";
import React from "react";

export default function AddMenu() {
  return (
    <Box>
    <Layout>
      <Add_Menu title={"Add Menu"}/>
    </Layout>
    </Box>
  );
}
