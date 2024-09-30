import { useEffect, useState } from "react";
import Image from "next/image"; 
import { Box, Button, Typography } from "@mui/material"; 

const pizzaData = [
  {
    src: "/pizzaa.png", 
    backgroundColor: "#1d191abb",
    alt: "Pepperoni Pizza",
  },
  {
    src: "/pizzaa.png", 
    backgroundColor: "#3a440e9d",
    alt: "Margarita Pizza",
  },
  {
    src: "/pizzaa.png", 
    backgroundColor: "#167968e8",
    alt: "Veggie Pizza",
  },
];

export default function FeaturedPizza() {
  const [currentPizza, setCurrentPizza] = useState(0); 
  const [stepSequence, setStepSequence] = useState(0); 
  const [animating, setAnimating] = useState(false); 

  
  useEffect(() => {
    const interval = setInterval(() => {
      handlePizzaMovement();
    }, 1500); 

    return () => clearInterval(interval); 
  }, );

  // Handle automatic movement of pizzas based on step sequence
  const handlePizzaMovement = () => {
    setAnimating(true);

    if (stepSequence === 0 || stepSequence === 1) {
      setCurrentPizza((prevPizza) => (prevPizza + 1) % pizzaData.length);
    } else if (stepSequence === 2) {
      setCurrentPizza(
        (prevPizza) => (prevPizza - 2 + pizzaData.length) % pizzaData.length
      );
    }

    setStepSequence((prevStep) => (prevStep + 1) % 3); 

    setTimeout(() => {
      setAnimating(false);
    }, 500); 
  };

  
  const handleNextPizza = () => {
    setAnimating(true);
    setCurrentPizza((prevPizza) => (prevPizza + 1) % pizzaData.length);
    setAnimating(false);
  };

  const handlePreviousPizza = () => {
    setAnimating(true);
    setCurrentPizza(
      (prevPizza) => (prevPizza - 1 + pizzaData.length) % pizzaData.length
    );
    setAnimating(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FAF3E0",
        padding: "40px 0",
        width: "100%",
        height:"690px",
      }}
    >
      <Typography variant="h4" align="center" color="textSecondary">
        Featured Pizza
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            transform: `translateX(${
              animating ? (stepSequence === 2 ? "100%" : "-100%") : "0"
            })`,
            transition: "transform 0.5s ease",
          }}
        >
          {/* Card Container */}
          <Box
            sx={{
              display: "flex",
              backgroundColor: pizzaData[currentPizza].backgroundColor,
              borderRadius: "10px",
              padding: "20px",
              width: "100%",
              transition: "background-color 0.5s ease",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Text Content */}
            <Box sx={{ flex: 1, paddingRight: "20px", color: "#fff" }}>
              <Typography variant="h5">
                Make Your First Order and Get{" "}
                <span style={{ color: "#FFAB00" }}>50% Off</span>
              </Typography>
              <Typography variant="body1" paragraph>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFAB00",
                  "&:hover": { backgroundColor: "#FF9100" },
                }}
              >
                Order Now
              </Button>
            </Box>

            {/* Pizza Image */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <Image
                src={pizzaData[currentPizza].src}
                alt={pizzaData[currentPizza].alt}
                width={300}
                height={300}
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Slider Dots */}
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        {pizzaData.map((_, index) => (
          <Box
            key={index}
            component="span"
            sx={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              margin: "0 5px",
              backgroundColor: index === currentPizza ? "#FFAB00" : "#C0C0C0",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={() => {
              if (index > currentPizza) {
                handleNextPizza(); 
              } else if (index < currentPizza) {
                handlePreviousPizza(); 
              }
            }} 
          />
        ))}
      </Box>
    </Box>
  );
}
