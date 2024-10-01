import { Box, Typography, Button, Avatar, Grid, Paper } from "@mui/material";
import Link from "next/link"; // Import Link from next/link

// Data for the pizzas
const pizzas = [
  {
    name: "Margherita",
    description: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
    price: 150,
    imageUrl: "/pizza1.png",
    restaurantName: "Azmera Pizza",
    avatarSrc: "/woman.png",
  },
  {
    name: "Pepperoni",
    description: "Tomato, Mozzarella, Pepperoni, Olives",
    price: 200,
    imageUrl: "/pizza1.png",
    restaurantName: "Azmera Pizza",
    avatarSrc: "/woman.png",
  },
  {
    name: "Veggie",
    description: "Tomato, Mozzarella, Vegetables, Olives",
    price: 180,
    imageUrl: "/pizza1.png",
    restaurantName: "Azmera Pizza",
    avatarSrc: "/woman.png",
  },
];

export default function PopularPizzas() {
  return (
    <Box
      sx={{
        padding: "40px 0",
        backgroundColor: "#FAF3E0",
        textAlign: "center",
        width: "100%",
      }}
    >
      {/* Section Title */}
      <Typography variant="h4" color="textSecondary" gutterBottom>
        Popular Pizzas
      </Typography>

      {/* Pizza Cards */}
      <Grid container spacing={4} justifyContent="center">
        {pizzas.map((pizza, index) => (
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
                <Link href="/login" passHref>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#FFAB00" }}
                  >
                    Order
                  </Button>
                </Link>
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
