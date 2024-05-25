import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronRightOutlined,
  AccountTreeRounded,
  EqualizerRounded,
  AdminPanelSettingsRounded,
  GroupsRounded,
  HelpRounded,
  PersonRounded,
  EmailRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    text: "",
    icon: null,
  },
  {
    text: "Student",
    icon: <PersonRounded />,
  },
  {
    text: "Students",
    icon: <GroupsRounded />,
  },

  {
    text: "Counselling",
    icon: <AccountTreeRounded />,
  },
  {
    text: "Statics",
    icon: <EqualizerRounded />,
  },
  {
    text: "Help",
    icon: <HelpRounded />,
  },
  {
    text: "",
    icon: null,
  },
  {
    text: "",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsRounded />,
  },
  {
    text: "Contact",
    icon: <EmailRounded />,
  },
];

const Sidebar = ({
  // eslint-disable-next-line react/prop-types
  drawerWidth,
  // eslint-disable-next-line react/prop-types
  isSidebarOpen,
  // eslint-disable-next-line react/prop-types
  setIsSidebarOpen,
  // eslint-disable-next-line react/prop-types
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box alignItems="center" gap="0.5rem">
            <img
              align="center"
              width="64"
              height="64"
              src="https://img.icons8.com/cotton/64/graduation-cap--v2.png"
              alt="graduation-cap--v2"
            />
            <Typography variant="h4" fontWeight="bold" align="center">
              OrientPro
            </Typography>
          </Box>

          <Divider />
          <Box width="100%">
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/dashboard/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
