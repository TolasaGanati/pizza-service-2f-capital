import { Box, Typography, Button, Avatar, Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";

// Data for the pizzas
const fastingPizzas = [
  {
    name: "Margherita",
    description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
    price: 150,
    imageUrl: "/delicious-margherita.jpg", 
    restaurantName: "Azmera Pizza",
    avatarSrc: "/woman.png", 
  },
  {
    name: "Margherita",
    description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
    price: 150,
    imageUrl: "/delicious-margherita.jpg",
    restaurantName: "Azmera Pizza",
    avatarSrc: "/woman.png",
  },
  {
    name: "Margherita",
    description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
    price: 150,
    imageUrl: "/delicious-margherita.jpg",
    restaurantName: "Azmera Pizza",
    avatarSrc: "/woman.png",
  },
];

export default function FastingPizzas() {

  const router = useRouter(); // Initialize the router

  const handleOrderClick = () => {
    router.push("/login"); // Navigate to the login page
  };
  return (
    <Box
      sx={{
        padding: "40px 0",
        backgroundColor: "#FAF3E0",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography variant="h4" color="textSecondary" gutterBottom>
        Fasting
      </Typography>

      {/* Pizza Cards */}
      <Grid container spacing={4} justifyContent="center">
        {fastingPizzas.map((pizza, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px" }}>
              {/* Pizza Image */}
              <Box
                component="img"
                src={pizza.imageUrl}
                alt={pizza.name}
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />

              {/* Pizza Info */}
              <Typography variant="h6" fontWeight="bold">
                {pizza.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {pizza.description}
              </Typography>

              {/* Price and Order Button */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ marginTop: "10px" }}
              >
                <Typography variant="h5" fontWeight="bold" color="green">
                  {pizza.price} Birr
                </Typography>
                <Button
                  onClick={handleOrderClick}
                  variant="contained"
                  sx={{ backgroundColor: "#FFAB00" }}
                >
                  Order
                </Button>
              </Box>

              {/* Restaurant Info */}
              <Box
                display="flex"
                alignItems="center"
                sx={{ marginTop: "15px" }}
              >
                <Avatar
                  alt={pizza.restaurantName}
                  src={pizza.avatarSrc}
                  sx={{ width: 40, height: 40, marginRight: 2 }}
                />
                <Typography variant="body2" fontWeight="bold">
                  {pizza.restaurantName}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
