import React, { useState, ChangeEvent } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import { PhotoCamera, Upload, UploadFile } from "@mui/icons-material";
//import { useAddMenuQuery } from "@/hooks/use-users-query";



// Defining the type for the toppings
interface Toppings {
  Mozzarella: boolean;
  Tomato: boolean;
  "Bell Peppers": boolean;
  Onions: boolean;
  Olives: boolean;
}

interface AddMenuProps {
  fetchUrl: string;
  queryKey: string;
}

export const Add_Menu: React.FC<AddMenuProps> = ({ fetchUrl, queryKey }) => {
  const [name, setName] = useState<string>("");
  const [toppings, setToppings] = useState<Toppings>({
    Mozzarella: true,
    Tomato: true,
    "Bell Peppers": true,
    Onions: true,
    Olives: false,
  });
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  //const { mutate: addMenu, isSuccess, isError, error } = useAddMenuQuery();

  // Typing the event parameter for checkbox change
  const handleToppingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToppings({ ...toppings, [event.target.name]: event.target.checked });
  };

  // Typing the event parameter for file upload
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, toppings, price, image });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 2,
        //backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h5">Add Menu</Typography>

      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
      />

      <Typography variant="h6">Topping</Typography>
      <FormGroup
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        {Object.keys(toppings).map((topping) => (
          <Box
            key={topping}
            sx={{ display: "flex", alignItems: "center", margin: "8px" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={toppings[topping as keyof Toppings]}
                  onChange={handleToppingChange}
                  name={topping}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "#ff9921",
                    },
                  }}
                />
              }
              label={topping}
            />
          </Box>
        ))}
        <Button
          sx={{
            marginRight: 1,
            marginTop: 1,
            color: "#fff",
            backgroundColor: "#ff9921",
            height: "40px",
            ":hover": { backgroundColor: "#e7650f" },
          }}
        >
          + Add
        </Button>
      </FormGroup>

      <TextField
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        variant="outlined"
      />

      <Button
        variant="outlined"
        component="label"
        sx={{
          border: "1px  dashed",
          borderColor: "gray",
          padding: 2,
          textAlign: "center",
          width: "30%",
          color: "#ff9921",
        }}
      >
        <Upload sx={{ margin: 1 }} />
        Upload Pizza Photo
        <input type="file" hidden onChange={handleImageUpload} />
      </Button>

      <Button
        type="submit"
        //variant="contained"
        sx={{
          width: "30%",
          height: "60px",
          color: "#fff",
          backgroundColor: "#ff9921",
          ":hover": { backgroundColor: "#d47910" },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};






