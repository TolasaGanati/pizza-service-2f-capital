"use client";

import { userColumns } from "@/components/tables/columns/user-columns";
import GenericTable from "@/components/tables/custom-table";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const userData = [
  {
    userName: "Siyum Desta",
    phoneNo: "123-456-7890",
    email: "doe@example.com",
    action: "Active",
  },
  {
    userName: "Jane Girma",
    phoneNo: "987-654-3210",
    email: "jane@example.com",
    action: "Passive",
  },
  {
    userName: "Ali Beka",
    phoneNo: "555-123-4567",
    email: "johnson@example.com",
    action: "Active",
  },
];

const queryClient = new QueryClient();

const User = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        {/* Pass title as prop */}
        <GenericTable
          columns={userColumns}
          maxHeight="470px"
          title="Add User"
          queryKey="user"
          data={userData}
        />
      </Box>
    </QueryClientProvider>
  );
};

export default User;
