"use client"
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image"; 
import RegisterForm from "@/components/forms/register-form";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import AddAdmin from "@/pages/addAdmin";

export default function Register() {
  const { user } = useContext(AuthContext);
  const router = useRouter()
  if (user) {
    router.push("/dashboard")
  }
  return (
    <Box>
      <Box sx={{ minheight: "100vh", color: "white" }}>
        {/* Left */}
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              backgroundColor: "#FF9921",
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Box sx={{ transform: "rotate(-90deg)", display: "inline-block" }}>
              <Image
                src="/slice-of-piza.png"
                alt="Pizza Slice"
                width={200}
                height={200}
                priority={true}
              />
            </Box>{" "}
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
                <Box
                  sx={{ transform: "rotate(-90deg)", display: "inline-block" }}
                >
                  <Image
                    src="/slice-of-piza.png"
                    alt="Pizza Slice"
                    width={50}
                    height={50}
                    priority={true}
                  />
                </Box>
                <Typography sx={{ fontSize: 25 }}>Pizza</Typography>
              </Box>
              <Typography sx={{ mt: 2, fontSize: 20, textAlign: "left" }}>
                Sign up
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
