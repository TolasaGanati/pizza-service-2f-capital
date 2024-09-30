// components/PizzaOrder.tsx
import React, { useState } from "react";
import { Box, Button, Checkbox, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";

type Ingredient = {
  [key: string]: boolean; // ingredient name as key and selected state as value
};

const PizzaOrder: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient>({
    mozzarella: true,
    tomato: true,
    bellPeppers: true,
    onions: false,
    olives: false,
  });

  const handleIngredientChange = (ingredient: string) => {
    setSelectedIngredients((prev) => ({
      ...prev,
      [ingredient]: !prev[ingredient],
    }));
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const pricePerPizza = 150; // price in Birr
  const totalPrice = pricePerPizza * quantity;

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: 3,
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* Main Pizza Image */}
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/delicious-margherita.jpg"
          alt="Margherita Pizza"
          width={180}
          height={180}
          style={{
            width: "300px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        />
        <Typography variant="h4" color={"gray"}>
          Margherita
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        <Image
          src="/pizzaa.png"
          alt="Related Pizza 1"
          width={100}
          height={100}
          style={{
            width: "100px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />
        <Image
          src="/pizzaa.png"
          alt="Related Pizza 2"
          width={100}
          height={100}
          style={{
            width: "100px",
            borderRadius: "10px",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: "1 1 auto",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          marginLeft: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: "fit-content",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", marginBottom: 2 }}>
          {Object.keys(selectedIngredients).map((ingredient) => (
            <Box key={ingredient} display="flex" alignItems="center">
              <Checkbox
                checked={selectedIngredients[ingredient]}
                onChange={() => handleIngredientChange(ingredient)}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "#ff9921",
                  },
                }}
              />
              <Typography variant="body1">
                {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box display="flex" alignItems="center" sx={{ marginBottom: 2 }}>
          <IconButton
            onClick={() => handleQuantityChange(-1)}
            sx={{
              border: "2px solid #ff9921",
              borderRadius: "5px",
              padding: "4px",
            }}
          >
            <RemoveIcon sx={{ color: "gray" }} />{" "}
          </IconButton>

          <Typography variant="h6" sx={{ marginX: 1 }}>
            {quantity}
          </Typography>
          <IconButton
            onClick={() => handleQuantityChange(1)}
            sx={{
              border: "2px solid #ff9921",
              borderRadius: "5px",
              padding: "4px",
            }}
          >
            <AddIcon sx={{ color: "gray" }} />
          </IconButton>
        </Box>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          {totalPrice} Birr
        </Typography>
        <Button variant="contained" sx={{ backgroundColor:"#ff9921" }}>
          Order
        </Button>
      </Box>
    </Box>
  );
};

export default PizzaOrder;
