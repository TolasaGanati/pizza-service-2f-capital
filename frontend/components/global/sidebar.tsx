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
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { UserRole } from "@/utils/schema";
//import { useUserLogoutQuery } from "@/hooks/use-users-query";
import { sideBarMenu } from "@/utils/constant";
import defineAbilitiesFor from "@/utils/abilities";
import Image from "next/image";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const pathname = usePathname();
  const { user, dispatch } = useContext(AuthContext);
  const ability = defineAbilitiesFor(user);
  const router = useRouter();
  //const { mutateAsync: logoutUser, isPending } = useUserLogoutQuery();

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

  const handleItemClick = (item: any) => {
    if (item.title === "User") {
      handleLogout();
    } else {
      setActiveItem(item.path); // Update the active item
      router.push(item.path); // Navigate to the item's path
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
              //disabled={isPending}
              variant="contained"
              startIcon={
                <ExitToAppIcon sx={{ color: "#bb0303", fontWeight: 800 }} />
              }
              onClick={handleLogout}
              fullWidth
              sx={{
                backgroundColor: "white",
                color: "#bb0303",
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
