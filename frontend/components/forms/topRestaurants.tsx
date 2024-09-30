import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";
import { GiBottledBolt } from "react-icons/gi";

// Data for the restaurants
const restaurants = [
  {
    name: "Azmera Pizza",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
    avatarSrc: "/woman.png", // Replace with the actual avatar image source
    orderCount: "2K",
  },
  {
    name: "Azmera Pizza",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
    avatarSrc: "/woman.png",
    orderCount: "2K",
  },
  {
    name: "Azmera Pizza",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
    avatarSrc: "/woman.png",
    orderCount: "2K",
  },
];

export default function TopRestaurants() {
  return (
    <Box
      sx={{
        padding: "40px 0",
        backgroundColor: "#FAF3E0",
        textAlign: "center",
        height: "690px",
      }}
    >
      {/* Section Title */}
      <Typography variant="h4" color="textSecondary" gutterBottom>
        Top Restaurants
      </Typography>

      {/* Restaurant Cards */}
      <Grid container spacing={4} justifyContent="center">
        {restaurants.map((restaurant, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px" }}>
              {/* Restaurant Info */}
              <Box display="flex" alignItems="center">
                {/* Avatar */}
                <Avatar
                  alt={restaurant.name}
                  src={restaurant.avatarSrc}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
                {/* Restaurant Name and Description */}
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {restaurant.description}
                  </Typography>
                </Box>
              </Box>

              {/* Order Count */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  backgroundColor: "#E0F2F1",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  marginTop: "20px",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    backgroundColor: "#ffdca7ed",
                    borderRadius: "50%",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  <Typography variant="h2" color="#FFAB00">
                    <GiBottledBolt />
                  </Typography>
                </Box>
                {/* Order Number */}
                <Box>
                  <Typography variant="body1" color="textSecondary">
                    Number of order
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" color="#FFAB00">
                    {restaurant.orderCount}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
