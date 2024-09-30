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

export const AddUserModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone1: "",
    phone2: "",
    role: "",
  });

  const roles = ["Admin", "Editor", "Viewer"]; // List of roles for the dropdown

  // Handle opening and closing the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    handleClose(); // Close the modal after submission
  };

  return (
    <Box>
      {/* Button to open modal */}
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Add User Modal
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

            {/* Location input */}
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            {/* Phone Number input */}
            <TextField
              label="Phone Number"
              name="phone1"
              value={formData.phone1}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            {/* Additional Phone Number input */}
            <TextField
              label="Phone Number"
              name="phone2"
              value={formData.phone2}
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

export default AddUserModal;
