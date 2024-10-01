import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Image from "next/image";

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      name: "Margherita",
      ingredients: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: 150,
      status: "Ordered",
      image: "/pizza1.png", // Ensure image path is correct
    },
    {
      id: 2,
      name: "Margherita",
      ingredients: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: 150,
      status: "Received",
      image: "/pizza1.png",
    },
    {
      id: 3,
      name: "Margherita",
      ingredients: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      price: 150,
      status: "Received",
      image: "/pizza1.png",
    },
  ];

  return (
    <Box
      sx={{
        padding: "110px",
        background: "linear-gradient(to bottom right, #fff2ec, #f5ecec )",
      }}
    >
      {/* Order History Header */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold",
          color: "gray",
        }}
      >
        Order History
      </Typography>

      {/* Order List */}
      <Grid container spacing={12} justifyContent="center">
        {orders.map((order) => (
          <Grid item xs={12} sm={6} md={4} key={order.id}>
            <Card
              sx={{
                padding: "20px",
                textAlign: "center",
                borderRadius: "15px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Image
                  src={order.image}
                  alt={order.name}
                  width={300}
                  height={300}
                  style={{ borderRadius: "50%", backgroundColor: "#fdeeee" }}
                />
              </Box>

              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {order.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#888", marginBottom: "10px" }}
                >
                  {order.ingredients}
                </Typography>

                {/* Price */}
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#00c853" }}
                >
                  {order.price} Birr
                </Typography>

                {/* Status */}
                <Typography
                  variant="body1"
                  sx={{
                    color: order.status === "Ordered" ? "#ff6d00" : "#00c853",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  {order.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OrderHistory;
