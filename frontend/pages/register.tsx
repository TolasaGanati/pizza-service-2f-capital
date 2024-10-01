"use client";
import { Box, Divider, Typography } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/forms/register-form";
import Image from "next/image";

export default function Register() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  if (user) {
    router.push("/dashboard");
  }
  return (
    <Box>
      <Box sx={{ minheight: "100vh", color: "white" }}>
        {/* Left */}
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              backgroundColor: "#ff9921",
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Image
              src="/slice-of-piza.png"
              alt="Pizza Slice"
              width={200}
              height={200}
              priority
              style={{ transform: "rotate(-90deg)" }}
            />
          </Box>
          {/* Right */}
          <Box
            sx={{
              color: "black",
              display: "flex",
              p: 4,
              flex: 1,
              height: "100%",
              alignItems: "center",
              width: "100%",
              backgroundColor: "var(--textWhite)",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,

                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <Image
                  src="/slice-of-piza.png"
                  alt="Pizza Slice"
                  width={50}
                  height={50}
                  priority
                  style={{ transform: "rotate(-90deg)" }}
                />
                <Typography sx={{ fontSize: 25 }}>Pizza Ordering</Typography>
              </Box>
              <Typography sx={{ mt: 2, fontSize: 20, textAlign: "left" }}>
                Sign up into Pizza Ordering app
              </Typography>
              <Divider variant="fullWidth" sx={{ width: "100%" }} />
              <RegisterForm />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


