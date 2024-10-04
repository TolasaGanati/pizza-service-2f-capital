import {
  Box,
  List,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  const navItems = [
    { name: "Home", path: "/homePage" },
    { name: "Orders", path: "/order" },
    { name: "Who we are", path: "/who-we-are" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "10vh",
      }}
    > 
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          backgroundColor: "#CCB691",
          width: "100%",
          px: { xs: "23px", md: "64px" },
          pt: { xs: "38px", md: "21px" },
          pb: { xs: "38px", md: "88px" },
        }}
      >
        <List
          sx={{
            display: "flex",
            gap: { xs: "13px", md: "50px" },
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
            fontSize: { xs: "15px", md: "25px" },
            fontWeight: { xs: "600", md: "700" },
          }}
        >
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              style={{ color: "#000", textDecoration: "none" }}
            >
              {item.name}
            </Link>
          ))}
        </List>

        <Box
          sx={{
            width: { xs: "100%", md: "423px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-end" },
            gap: "18px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Pizza Ordering App"
            width={100}
            height={100}
            style={{ objectFit: "contain", alignSelf: "center" }}
          />
          <FormControl
            sx={{
              width: { xs: "208px", md: "423px" },
              height: "62px",
              background: "white",
              borderRadius: "12px",
              fontSize: { xs: "15px", md: "25px" },
              padding: "0px",
              boxShadow: "0px 5px 50px 0px #00000026",
            }}
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-search"
              type={"text"}
              sx={{
                height: "100%",
                borderRadius: "12px",
                border: "none",
                fontSize: { xs: "15px", md: "25px" },
                paddingLeft: { xs: "20px", md: "36px" },
              }}
              placeholder="Your feedback..."
              endAdornment={
                <InputAdornment position="end">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7843 3.22287C26.1593 2.58412 25.2343 2.34787 24.3718 2.59787L4.25928 8.40912C3.34928 8.66162 2.70428 9.38287 2.53053 10.2979C2.35303 11.2304 2.97303 12.4154 3.78303 12.9104L10.0718 16.7504C10.7168 17.1454 11.5493 17.0466 12.083 16.5116L19.2843 9.31037C19.6468 8.93412 20.2468 8.93412 20.6093 9.31037C20.9718 9.67162 20.9718 10.2604 20.6093 10.6354L13.3955 17.8366C12.8605 18.3716 12.7605 19.2016 13.1543 19.8479L16.9968 26.1604C17.4468 26.9091 18.2218 27.3354 19.0718 27.3354C19.1718 27.3354 19.2843 27.3354 19.3843 27.3216C20.3593 27.1979 21.1343 26.5341 21.4218 25.5966L27.3843 5.63537C27.6468 4.78537 27.4093 3.86037 26.7843 3.22287Z"
                      fill="#FF8100"
                    />
                    <path
                      opacity="0.4"
                      d="M11.8142 23.9277C12.1792 24.294 12.1792 24.8877 11.8142 25.254L10.1067 26.9602C9.92424 27.144 9.68424 27.2352 9.44424 27.2352C9.20424 27.2352 8.96424 27.144 8.78174 26.9602C8.41549 26.594 8.41549 26.0015 8.78174 25.6352L10.488 23.9277C10.8542 23.5627 11.448 23.5627 11.8142 23.9277ZM10.8346 19.1927C11.1996 19.559 11.1996 20.1527 10.8346 20.519L9.12712 22.2252C8.94461 22.409 8.70461 22.5002 8.46461 22.5002C8.22461 22.5002 7.98462 22.409 7.80212 22.2252C7.43587 21.859 7.43587 21.2665 7.80212 20.9002L9.50836 19.1927C9.87461 18.8277 10.4684 18.8277 10.8346 19.1927ZM6.13312 17.7022C6.49812 18.0685 6.49812 18.6622 6.13312 19.0285L4.42562 20.7347C4.24312 20.9185 4.00312 21.0097 3.76312 21.0097C3.52312 21.0097 3.28312 20.9185 3.10062 20.7347C2.73437 20.3685 2.73437 19.776 3.10062 19.4097L4.80687 17.7022C5.17312 17.3372 5.76687 17.3372 6.13312 17.7022Z"
                      fill="#FF8100"
                    />
                  </svg>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          backgroundColor: "#000000",
          px: { xs: "20px", md: "50px" },
          py: { xs: "16px", md: "30px" },
          color: "white",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px", md: "38px" },
          }}
        >
          <Typography>@2024 Pizza All Rights Reserved.</Typography>
          <Link href="/" style={{ color: "white" }}>
            Terms & Conditions
          </Link>
        </Box>
        <List sx={{ display: "flex", gap: "14px" }}>
          <Link href="/">
            <FacebookIcon
              sx={{ color: "white", width: "24px", height: "24px" }}
            />
          </Link>
          <Link href="/">
            <LinkedInIcon
              sx={{ color: "white", width: "24px", height: "24px" }}
            />
          </Link>
          <Link href="/">
            <TwitterIcon
              sx={{ color: "white", width: "24px", height: "24px" }}
            />
          </Link>
          <Link href="/">
            <YouTubeIcon
              sx={{ color: "white", width: "24px", height: "24px" }}
            />
          </Link>
        </List>
      </Box>
    </Box>
  );
};
