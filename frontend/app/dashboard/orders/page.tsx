"use client";
import { Box } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { orderColumns, orderColumnsTypes } from "@/components/tables/columns/order-columns";

export default function Orders() {
  // Hardcoded order data
  const orderData: orderColumnsTypes[] = [
    {
      id: "1",
      username: "John Doe",
      email: "john@example.com",
      createdAt: "2023-10-01T00:00:00Z",
      quantity: "2",
      status: "Pending",
      topping: "Pepperoni",
    },
    {
      id: "2",
      username: "Jane Smith",
      email: "jane@example.com",
      createdAt: "2023-09-30T00:00:00Z",
      quantity: "1",
      status: "Delivered",
      topping: "Mushrooms",
    },
    {
      id: "3",
      username: "Xilahun Taso",
      email: "xila@example.com",
      createdAt: "2023-09-30T00:00:00Z",
      quantity: "4",
      status: "Delivered",
      topping: "Tomatoes",
    },
  ];

  return (
    <Box>
      <MaterialReactTable
        columns={orderColumns}
        data={orderData} 
        enableColumnActions={false}
        enableSorting={false}
        enablePagination={false}
        enableBottomToolbar={false}
        muiTableContainerProps={{ sx: { maxHeight: "470px", p: 2 } }}
      />
    </Box>
  );
}
