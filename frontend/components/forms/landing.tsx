import React, { useState } from "react";
import { Box, Typography, Button, TextField, Modal } from "@mui/material";
import Image from "next/image";
import { Search } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#862007" }}>
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
        <Box sx={{ display: "flex", gap: "30px" }}>
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
              marginRight: "70px",
              color: "#fff",
              fontWeight: 700,
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
      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search"
          sx={{
            borderRadius: "50px",
            backgroundColor: "#fff",
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF6D00",
            borderRadius: "100%",
            padding: "10px",
            marginLeft: "-70px",
            zIndex: 1,
          }}
        >
          <Search />
        </Button>
      </Box>

      {/* Pizza Image */}
      <Box
        sx={{
          position: "absolute",
          right: "0",
          bottom: "10#",
          width: { xs: "200px", md: "400px" },
          height: { xs: "200px", md: "400px" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Image
            src="/leaves1.png"
            alt="Pizza Slice"
            width={120}
            height={200}
          />
          <Image
            src="/Image.png"
            alt="Pizza Slice"
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
            sx={{ mb: 1, width: "100%",color:"white", backgroundColor: "#ff9921" }}
          >
            Customer
          </Button>
          <Button
            onClick={handleManagerRegister}
            sx={{ width: "100%",color:"white", backgroundColor: "#ff9921" }}
          >
            Restaurant Manager
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default LandingPage;
