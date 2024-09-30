import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

// Define the permissions interface
interface Permissions {
  "Update Order Status": boolean;
  "See Customers": boolean;
  "See Orders": boolean;
  "Create Roles": boolean;
  "Add Users": boolean;
}

export const RoleModal = () => {
  const [open, setOpen] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState<Permissions>({
    "Update Order Status": true,
    "See Customers": true,
    "See Orders": true,
    "Create Roles": false,
    "Add Users": true,
  });

  // Handle opening and closing of the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle permission checkbox changes
  const handlePermissionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPermissions({
      ...permissions,
      [event.target.name]: event.target.checked,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ roleName, permissions });
    handleClose();
  };

  return (
    <Box>
      {/* Button to open modal */}
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Role Modal
      </Button>

      {/* Modal dialog */}
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Role</DialogTitle>
          <DialogContent>
            {/* Role Name input */}
            <TextField
              label="Name"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            {/* Permissions checkboxes */}
            <Typography variant="h6">Permissions</Typography>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              {Object.keys(permissions).map((permission) => (
                <FormControlLabel
                  key={permission}
                  control={
                    <Checkbox
                      checked={permissions[permission as keyof Permissions]}
                      onChange={handlePermissionChange}
                      name={permission}
                    />
                  }
                  label={permission}
                />
              ))}
            </FormGroup>
          </DialogContent>
          <DialogActions>
            {/* Action buttons */}
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="warning" variant="contained">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default RoleModal;
