"use client"
import { registerSchema, UserRole } from "@/utils/schema";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import UploadIcon from "@mui/icons-material/Upload";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//import { useUserRegisterQuery } from "@/hooks/use-users-query";
import { RegisterFormTypes } from "@/utils/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const RegisterForm = () => {
  const router = useRouter()
  //const { mutate: registerUser, isSuccess, isPending, isError, error } = useUserRegisterQuery();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterFormTypes>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      superAdminName:"",
      restaurantName:"",
      email: "",
      location: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      role: UserRole.customer
    },
  });

const onSubmit: SubmitHandler<RegisterFormTypes> = async (data) => {
  try {
    // Example of using the register function for form submission
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to register");
    }

    // If the registration is successful
    reset();
    toast.success("Account created successfully");
    router.push("/addAdmin");
  } catch (error) {
    toast.error("Failed to register: " + error);
  }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        label="Super Admin"
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
        {...register("password")}
        id="outlined-basic2"
        label="Password"
        type="password"
        variant="outlined"
      />
      {errors.password && (
        <Box sx={{ color: "red" }}>{errors.password.message}</Box>
      )}
      <TextField
        {...register("confirmPassword")}
        id="outlined-basic3"
        label="Confirm password"
        type="password"
        variant="outlined"
      />
      {errors.confirmPassword && (
        <Box sx={{ color: "red" }}>{errors.confirmPassword.message}</Box>
      )}
      <TextField
        {...register("phoneNumber")}
        id="outlined-basic4"
        label="Phone Number"
        type="number"
        variant="outlined"
      />
      {errors.phoneNumber && (
        <Box sx={{ color: "red" }}>{errors.phoneNumber.message}</Box>
      )}
      <TextField
        {...register("restaurantName")}
        id="outlined-basic5"
        label="Restaurant Name"
        type="text"
        variant="outlined"
      />
      {errors.phoneNumber && (
        <Box sx={{ color: "red" }}>{errors.phoneNumber.message}</Box>
      )}
      <TextField
        {...register("location")}
        id="outlined-basic6"
        label="Location"
        type="text"
        variant="outlined"
      />
      {errors.location && (
        <Box sx={{ color: "red" }}>{errors.location.message}</Box>
      )}
      <Box
        sx={{
          border: "2px dashed #2c2c2b",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="file"
          accept="image/*"
          id="upload-logo"
          style={{ display: "none" }}
        />
        <label htmlFor="upload-logo">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Upload Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
              fill="#FF9921"
            >
              <UploadIcon sx={{ color: "#ff9921" }} />
            </svg>
            {/* Text */}
            <Typography sx={{ fontWeight: 500, color: "#ff9921" }}>
              Upload Logo
            </Typography>
          </Box>
        </label>
      </Box>

      {/* {isError && (
        <Box sx={{ color: "red", textAlign: "center" }}>
          {(error as any)?.response?.data?.message || "An error occurred"}
        </Box>
      )} */}

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Checkbox {...label} />
        <Typography>I accept the Terms and Conditions</Typography>
      </Box>
      <Button
        //disabled={isPending}
        type="submit"
        variant="contained"
        sx={{ width: "100%", backgroundColor: "#FF9921 !important" }}
      >   
        SIGN UP
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Already have an account?</Typography>
        <Link href="/login" style={{ color: "#FF9921" }}>
          Login
        </Link>
      </Box> 
    </form>
  );
};   

export default RegisterForm;
