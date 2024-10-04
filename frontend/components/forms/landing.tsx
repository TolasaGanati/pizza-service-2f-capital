import React, { useState } from "react";
import { Box, Typography, Button, TextField, Modal, InputAdornment, OutlinedInput } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

const LandingPage = () => {
  const [open, setOpen] = useState(false); // State for modal
  const router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCustomerRegister = () => {
    handleClose(); 
    router.push("/addUser"); 
  };
  const handleManagerRegister = () => {
    handleClose();
    router.push("/register");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1 100%);",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 0,
        position: "relative",
      }}
    >
      {/* Navigation Bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: {xs:"400px",md:"500px",lg:"bold"}, color: "#862007" }}>
          <Image
            src="/slice-of-piza.png"
            alt="Pizza Slice"
            width={50}
            height={50}
            priority
            style={{ transform: "rotate(-90deg)" }}
          />
          {"  "}Pizza
        </Typography>
        <Box
          sx={{ display: "flex", gap: { xs: "10px", md: "20px", lg: "30px" } }}
        >
          <Link href="/" passHref>
            <Button sx={{ color: "#ff9921", fontWeight: 700 }}>Home</Button>
          </Link>
          <Link href="/orderHistory" passHref>
            <Button sx={{ color: "#302b2b", fontWeight: 700 }}>Orders</Button>
          </Link>
          <Button sx={{ color: "#272525", fontWeight: 700 }}>Who we are</Button>
          <Button
            onClick={handleOpen}
            sx={{
              backgroundColor: "#FF9921",
              borderRadius: "10px",
              padding: "10px 20px",
              marginRight: { xs: "40px", md: "55px", lg: "70px" },
              color: "#fff",
              fontWeight:{xs:300,md:550,ls:700},
              width:{xs:"95px",md:"70px",lg:"120px"},
              height:{xs:"50px"}
            }}
          >
            Register
          </Button>
        </Box>
      </Box>

      {/* Main Section */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          color: "#FF6D00",
          fontSize: { xs: "40px", md: "64px" },
        }}
      >
        Order us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: "20px",
          maxWidth: "600px",
          color: "#333",
          fontSize: "18px",
        }}
      >
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without.
      </Typography>

      {/* Search Bar */}
      <OutlinedInput
        id="outlined-adornment-search"
        type={"text"}
        sx={{
          height: "10%",
          marginTop: "30px",
          borderRadius: "100px",
          border: "none",
          backgroundColor: "white",
          fontSize: { xs: "15px", md: "25px" },
          paddingLeft: { xs: "20px", md: "36px" },
        }}
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <Button
              variant="contained"
              sx={{
                borderRadius: { xs: "360px", md: "100px" },
                width: { xs: "52px", md: "76px" },
                height: { xs: "52px", md: "72px" },
                backgroundColor: "#ff9921",
                position: "end",
                left: 0,
                "&:hover": {
                  backgroundColor: "#ff9921", // Prevent hover color change
                  boxShadow: "none",
                },
              }}
            >
              <SearchIcon
                sx={{
                  width: { xs: "21px", md: "41px" },
                  height: { xs: "21px", md: "41px" },
                  color: "white",
                }}
              />
            </Button>
          </InputAdornment>
        }
      />

      {/* Pizza Image */}
      <Box
        sx={{
          position: "absolute",
          right: "0",
          bottom: "10%",
          width: { xs: "100px", md: "400px" },
          height: { xs: "100px", md: "400px" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Image
            src="/leaves1.png"
            alt="leave"
            width={120}
            height={200}
          />
          <Image
            src="/Image.png"
            alt="Pizza"
            width={400}
            height={700}
            style={{ marginBottom: "30%", top: "10%" }}
          />
        </Box>
      </Box>

      {/* Registration Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Register as:
          </Typography>
          <Button
            onClick={handleCustomerRegister}
            sx={{
              mb: 1,
              width: "100%",
              color: "white",
              backgroundColor: "#ff9921",
            }}
          >
            Customer
          </Button>
          <Button
            onClick={handleManagerRegister}
            sx={{ width: "100%", color: "white", backgroundColor: "#ff9921" }}
          >
            Restaurant Manager
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default LandingPage;
