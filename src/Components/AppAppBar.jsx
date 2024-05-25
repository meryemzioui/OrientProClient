import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import ToggleColorMode from "./ToggleColorMode";
import { useNavigate } from "react-router-dom";

const logoStyle = {
  width: "64px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar({ mode, toggleColorMode }) {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <img
                src={"https://img.icons8.com/cotton/64/graduation-cap--v2.png"}
                style={logoStyle}
                alt="logo of OrientPro"
              />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Typography variant="body2" color="text.primary" />
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Typography variant="body2" color="text.primary">
                    Features
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Typography variant="body2" color="text.primary">
                    Highlights
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                onClick={() => {
                  navigate("/SignIn");
                }}
                color="primary"
                variant="text"
                size="small"
                component="a"
              >
                Sign in
              </Button>
              <Button
                onClick={() => {
                  navigate("/SignUp");
                }}
                color="primary"
                variant="contained"
                size="small"
                component="a"
              >
                Sign up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
