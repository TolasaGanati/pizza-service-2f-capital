"use client";

import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { UserRole } from "@/utils/schema";
import { sideBarMenu } from "@/utils/constant";
import defineAbilitiesFor from "@/utils/abilities";
import Image from "next/image";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onMenuItemClick: (component: string) => void; // New prop for handling menu item click
}

const Sidebar = ({ open, setOpen, onMenuItemClick }: SidebarProps) => {
  const { user, dispatch } = useContext(AuthContext);
  const ability = defineAbilitiesFor(user);
  const router = useRouter();

  // State to track active item
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleLogout = async () => {
    try {
      //await logoutUser();
      dispatch({ type: "LOGOUT" });
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const handleUser = async () => {
    try {
      setActiveItem("/user")
      router.push("/user");
    } catch (error) {
      console.error("User list failed:", error);
    }
  };
  const handleRole = async () => {
    try {
      setActiveItem("/role"); 
      router.push("/role");
    } catch (error) {
      console.error("Role list failed:", error);
    }
  };
const handleAddMenu = async () => {
  try {
     setActiveItem("/addMenu");
    router.push("/addMenu");
  } catch (error) {
    console.error("Add Menu failed:", error);
  }
};
  const handleItemClick = (item: any) => {
    if (item.title === "User") {
      handleUser();
    } else if (item.title === "Role") {

      handleRole();
    }else if(item.title === "Add Menu"){
      handleAddMenu();
    }
  };

  return (
    <Box sx={{ p: 1, height: "100%" }}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header Section */}
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              pt: 1,
              mb: 2,
            }}
          >
            <Typography sx={{ fontSize: 20, color: "#141414" }}>
              Pizza
            </Typography>
            <MenuIcon
              onClick={() => setOpen((prev) => !prev)}
              sx={{ cursor: "pointer", color: "#141414" }}
            />
          </Box>

          <Box
            sx={{
              transform: "rotate(-90deg)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/slice-of-piza.png"
              alt="Pizza Slice"
              width={50}
              height={50}
              priority
            />
          </Box>

          {/* Menu Section */}
          <List sx={{ px: 1 }}>
            {sideBarMenu.map((item, index) => {
              if (ability.can("view", item.id)) {
                const title =
                  item.title === "user"
                    ? `${item.title} ${
                        user?.role === UserRole.customer ||
                        user?.role === UserRole.restaurantManager
                          ? "User"
                          : "Guest"
                      }`
                    : item.title;

                return (
                  <Box key={index}>
                    <ListItem
                      disablePadding
                      sx={(theme) => ({
                        backgroundColor:
                          activeItem === item.path
                            ? "#fcc49fd1"
                            : "transparent",
                        borderRadius: 2,
                        marginTop: 1,
                      })}
                    >
                      <ListItemButton onClick={() => handleItemClick(item)}>
                        <ListItemIcon
                          sx={{
                            color:
                              activeItem === item.path ? "#ff9921" : "gray",
                            fontSize: "20px",
                          }}
                        >
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={title}
                          sx={{
                            color:
                              activeItem === item.path ? "#ff9921" : "gray",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Box>
                );
              }
              return null;
            })}

            <Divider sx={{ my: 2, borderColor: "gray" }} />
            <Button
              variant="contained"
              startIcon={
                <ExitToAppIcon sx={{ color: "#e70909", fontWeight: 800 }} />
              }
              onClick={handleLogout}
              fullWidth
              sx={{
                backgroundColor: "white",
                color: "#f00606",
                fontWeight: 800,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: "white",
                },
              }}
            >
              {!open && "Logout"}
            </Button>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
