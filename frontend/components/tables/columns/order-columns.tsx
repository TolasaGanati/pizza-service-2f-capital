"use client";
import { Box, Button, Modal, Switch, TextField } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import Image from "next/image";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { useChangeOrderStatusQuery } from "@/hooks/use-users-query";
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
const label = { inputProps: { "aria-label": "Switch demo" } };

// Define your columns using the sample data
export const orderColumns: MRT_ColumnDef<orderColumnsTypes>[] = [
  {
    accessorKey: "username",
    header: "Name",
    size: 150,
    Cell: ({ row }) => {
      const username = row.original?.email?.split("@");
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image
            src={"/woman.png"}
            alt="profile"
            width={24}
            height={24}
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
          <Box>{row.original.username || username[0]}</Box>
        </Box>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    size: 200,
  },
  {
    accessorKey: "topping",
    header: "Topping",
    size: 100,
    Cell: ({ row }) => {
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
          <VisibilityIcon sx={{ fontSize: 18 }} />
          {row.original.status}
          <Switch
            {...label}
            size="medium"
            color="success"
          />
        </Box>
      );
    }
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    size: 150,
  },
  {
    accessorKey: "id",
    header: "Customer No",
    size: 120,
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 150,
    Cell: ({ row }) => {
      const [checked, setChecked] = useState(
        row.original.status === "Delivered"
      );
      const mutation = useChangeOrderStatusQuery();

      const handleSwitchChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const newChecked = event.target.checked;
        setChecked(newChecked);
        const newStatus =
          row.original.status === "Delivered" ? "Pending" : "Delivered";
        mutation.mutate(
          { orderId: row.original.id, newStatus },
          {
            onSuccess: () => {
              toast.success(`Successfully ${newStatus}`);
            },
          }
        );
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
            {...label}
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
