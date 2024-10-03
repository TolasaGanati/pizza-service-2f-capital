"use client";
import { Box, Switch } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { toast } from "react-toastify";

export type userColumnsTypes = {
  userName: string;
  phoneNo: string;
  email: string;
  action: string;
};

export const userColumns: MRT_ColumnDef<userColumnsTypes>[] = [
  {
    accessorKey: "userName",
    header: "Name",
    size: 150,
    Cell: ({ row }) => {
      return <Box>{row.original.userName}</Box>;
    },
  },
  {
    accessorKey: "phoneNo",
    header: "Phone No",
    size: 150,
  },
  {
    accessorKey: "email",
    header: "Email",
    size: 150,
  },
  {
    accessorKey: "action",
    header: "Actions",
    size: 150,
    Cell: ({ row }) => {
      const [checked, setChecked] = useState(row.original.action === "Active");

      const handleSwitchChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const newChecked = event.target.checked;
        setChecked(newChecked);
        const newStatus = newChecked ? "Active" : "Passive";
        row.original.action = newStatus; // Update row action status
        toast.success(`User is now ${newStatus}`);
      };

      return (
        <Box
          sx={{
            py: 0.1,
            px: 1,
            gap: 0.5,
            borderRadius: "10%",
            display: "flex",
            alignItems: "center",
            color: "#14a514",
          }}
        >
          <DoneIcon sx={{ fontSize: 18 }} />
          {row.original.action}
          <Switch
            size="medium"
            color="success"
            checked={checked}
            onChange={handleSwitchChange}
          />
          <DeleteIcon sx={{ color: "#333232" }} />
        </Box>
      );
    },
  },
];
