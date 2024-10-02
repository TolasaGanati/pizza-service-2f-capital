"use client";
import { Box, Switch, Typography } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import Image from "next/image";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { toast } from "react-toastify";

export type orderColumnsTypes = {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  quantity: string;
  status: string;
  topping: string;
};

export const orderColumns: MRT_ColumnDef<orderColumnsTypes>[] = [
  {
    accessorKey: "username",
    header: "Name",
    Cell: ({ row }) => {
      const username = row.original?.email?.split("@")[0]; // Get username from email
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image
            src={"/pizza2.png"}
            alt="profile"
            width={24}
            height={24}
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
          <Typography>{row.original.username || username}</Typography>
        </Box>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "topping",
    header: "Topping",
    Cell: ({ row }) => (
      <Box
        sx={{
          //backgroundColor: "#E6F3E6",
          py: 0.1,
          px: 1,
          gap: 0.5,
          borderRadius: "10%",
          display: "flex",
          alignItems: "center",
          color: "#f88807",
        }}
      >
        <VisibilityIcon sx={{ fontSize: 18 }} />
        {row.original.topping}
      </Box>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    Cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  {
    accessorKey: "id",
    header: "Customer No",
  },
  {
    accessorKey: "status",
    header: "Status",
    Cell: ({ row }) => {
      const [checked, setChecked] = useState(
        row.original.status === "Delivered"
      );

      const handleSwitchChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const newChecked = event.target.checked;
        setChecked(newChecked);
        const newStatus = newChecked ? "Delivered" : "Pending";
        toast.success(`Status changed to ${newStatus}`);
      };

      return (
        <Box
          sx={{
            backgroundColor: "#E6F3E6",
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
          {row.original.status}
          <Switch
            size="medium"
            color="success"
            checked={checked}
            onChange={handleSwitchChange}
          />
        </Box>
      );
    },
  },
];
