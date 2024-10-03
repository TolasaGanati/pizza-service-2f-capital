"use client";
import { Box } from "@mui/material";
import GenericTable from "@/components/tables/custom-table";
import { roleColumns } from "@/components/tables/columns/role-columns";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const roleData = [
  {
    id: "1",
    roleName: "Restaurant_Manager",
    createdAt: "2023-10-01T00:00:00Z",
    status: "Active",
  },
  {
    id: "2",
    roleName: "Customer",
    createdAt: "2023-09-15T00:00:00Z",
    status: "Passive",
  },
  {
    id: "3",
    roleName: "Customer",
    createdAt: "2023-08-25T00:00:00Z",
    status: "Active",
  },
  {
    id: "4",
    roleName: "Restaurant_Manager",
    createdAt: "2023-07-10T00:00:00Z",
    status: "Passive",
  },
];
const queryClient = new QueryClient();


const Role = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Box>
      <GenericTable
        columns={roleColumns}
        maxHeight="470px"
        title="Add Role"
        queryKey="role"
        data={roleData} 
      />
    </Box>
    </QueryClientProvider>
  );
};

export default Role;

