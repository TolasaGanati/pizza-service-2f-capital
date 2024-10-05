import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import axios from "axios"; // Import axios

export const AddUser = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password:"",
    role: "",

  });
  const [error, setError] = useState<string | null>(null);

  const roles = ["restaurant_manager", "customer"]; // List of roles for the dropdown

  // Handle opening and closing the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError(null); // Clear errors when closing modal
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send POST request to the backend
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/register`,
        {
          username: formData.name,
          email: formData.email,
          role: formData.role,
          password: formData.password, // Provide a default password or ask for it in the form
        }
      );

      console.log(response.data); // Handle successful response (optional)
      handleClose(); // Close the modal after successful submission
    } catch (err: any) {
      console.error(err);
      setError("Failed to add user. Please try again.");
    }
  };

  return (
    <Box>
      {/* Button to open modal */}
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ backgroundColor: "#ff9921" }}
      >
        Add User
      </Button>

      {/* Modal dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <DialogTitle>
            <Typography variant="h5">Add User</Typography>
          </DialogTitle>
          <DialogContent>
            {/* Name input */}
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            {/* Email input */}
            <TextField
              label="Email address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            {/* Phone Number input */}
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            {/* Role dropdown */}
            <TextField
              select
              label="Select Role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>

          {/* Display error message if any */}
          {error && (
            <Typography color="error" sx={{ padding: 2 }}>
              {error}
            </Typography>
          )}

          {/* Dialog actions: Add button */}
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="warning">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};
