"use client";
import { Box } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { useEffect, useState } from "react";
import { orderColumns, orderColumnsTypes } from "@/components/tables/columns/order-columns";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GenericTable from "@/components/tables/custom-table";

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
const queryClient = new QueryClient();

export default function Orders() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering on server, only render once on the client-side
  if (!mounted) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <GenericTable
          columns={orderColumns}
          maxHeight="470px"
          title="Order"
          queryKey="user"
          data={orderData}
        />
      </Box>
    </QueryClientProvider>
  );
}
