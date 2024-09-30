"use client";
import { registerSchema } from "@/utils/schema";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormTypes } from "@/utils/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddAdminForm = () => {
  const router = useRouter();

  const {
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormTypes>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      superAdminName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleClick = () => {
    const formData = getValues(); // Get form data

    // Validate the form data using Zod schema if needed
    // Assume `registerUser` is a function to handle the data submission
    // registerUser(formData, {
    //   onSuccess: () => {
    //     reset();
    //     toast.success("Account created successfully!");
    //     router.push("/login");
    //   },
    // });

    // Temporary success logic
    reset();
    toast.success("Form submitted successfully!");
    router.push("/dashboard/orders");
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginTop: 10,
      }}
    >
      <TextField
        {...register("superAdminName")}
        id="outlined-basic"
        label="Admin Name"
        type="text"
        variant="outlined"
      />
      {errors.superAdminName && (
        <Box sx={{ color: "red" }}>{errors.superAdminName.message}</Box>
      )}

      <TextField
        {...register("email")}
        id="outlined-basic1"
        label="Email address"
        type="email"
        variant="outlined"
      />
      {errors.email && <Box sx={{ color: "red" }}>{errors.email.message}</Box>}

      <TextField
        {...register("phoneNumber")}
        id="outlined-basic2"
        label="Phone Number"
        type="number"
        variant="outlined"
      />
      {errors.phoneNumber && (
        <Box sx={{ color: "red" }}>{errors.phoneNumber.message}</Box>
      )}

      <TextField
        {...register("password")}
        id="outlined-basic3"
        label="Password"
        type="password"
        variant="outlined"
      />
      {errors.password && (
        <Box sx={{ color: "red" }}>{errors.password.message}</Box>
      )}

      <TextField
        {...register("confirmPassword")}
        id="outlined-basic4"
        label="Confirm Password"
        type="password"
        variant="outlined"
      />
      {errors.confirmPassword && (
        <Box sx={{ color: "red" }}>{errors.confirmPassword.message}</Box>
      )}

      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ width: "100%", backgroundColor: "#FF9921 !important" }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default AddAdminForm;
