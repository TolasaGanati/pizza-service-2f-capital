import { userColumns } from "@/components/tables/columns/user-columns";
import GenericTable from "@/components/tables/custom-table";
import { Box } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import React from "react";

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

const User = () => {
  return (
    <Box>
      <MaterialReactTable
        columns={userColumns}
        data={userData}
        enableColumnActions={false}
        enableSorting={false}
        enablePagination={false}
        enableBottomToolbar={false}
        muiTableContainerProps={{ sx: { maxHeight: "470px", p: 2 } }}
      />
    </Box>
  );
};

export default User;
