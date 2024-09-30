"use client"
import { orderColumns } from "@/components/tables/columns/order-columns";
import GenericTable from "@/components/tables/custom-table";
import { Box } from "@mui/material";
import React from "react";

export default function Orders() {

  return (
    <Box>
      <GenericTable
        columns={orderColumns}
        maxHeight="470px"
        title="Packages"
        fetchUrl="/order"
        queryKey="orderList"
      />

    </Box>

  );
}
