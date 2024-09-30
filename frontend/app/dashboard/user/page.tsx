import { userColumns } from "@/components/tables/columns/user-columns";
import GenericTable from "@/components/tables/custom-table";
import { Box } from "@mui/material";
import React from "react";

const User = () => {
  return (
    <Box>
      <GenericTable
        columns={userColumns}
        maxHeight="470px"
        title="Add User"
        fetchUrl="/api/user"
        queryKey="user"
      />
    </Box>
  );
};

export default User;
