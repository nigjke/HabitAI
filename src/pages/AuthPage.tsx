import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import ButtonSign from "../components/ButtonSign/ButtonSign";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import GoogleIcon from "../assets/Google.svg";
import FacebookIcon from "../assets/Facebook.svg";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import "./AuthPage.css";

const AuthPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isNote = useMediaQuery("(max-width: 1280px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: isMobile ? 2 : 4,
        }}
      >
        <Box
          sx={{
            borderColor: "primary.main",
            borderRadius: 7,
            width: "100%",
            maxWidth: "1200px",
            padding: isTablet ? "50px 20px" : "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderColor: "primary.main",
              borderRadius: 7,
              maxWidth: "800px",
              maxHeight: "100%",
              display: "flex",
              position: "relative",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                display: isTablet ? "none" : "inline-block",
              }}
            >
              <ThemeToggleButton />
            </Box>
            <Header
              title="Welcome Back 👋"
              subtitle="Sign in to start managing your projects."
            />
            <Input suptitle="Email" placeholder="Example@email.com" />
            <Input suptitle="Password" placeholder="At least 8 characters" />
            <Typography
              sx={{
                alignSelf: "end",
                m: "10px 0",
                color: "#1E4AE9",
                fontSize: isMobile ? "10px" : "14px",
              }}
            >
              <a href="#">Forgot Password?</a>
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                height: isNote ? "40px" : "50px",
                bgcolor: "#162D3A",
                color: "#FFFFFF",
                fontSize: isMobile ? "12px" : "16px",
              }}
            >
              Sign in
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                my: 2,
              }}
            >
              <Box sx={{ flexGrow: 1, borderTop: "1px solid #ccc" }}></Box>
              <Typography sx={{ mx: 2, color: "gray" }}>Or</Typography>
              <Box sx={{ flexGrow: 1, borderTop: "1px solid #ccc" }}></Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                gap: "16px",
              }}
            >
              <ButtonSign
                icon={GoogleIcon}
                content={isNote ? "Google" : "Sign in with Google"}
              />
              <ButtonSign
                icon={FacebookIcon}
                content={isNote ? "Facebook" : "Sign in with Facebook"}
              />
            </Box>
            <Typography
              sx={{ m: "10px 0", fontSize: isMobile ? "10px" : "14px" }}
            >
              Don't have an account?
              <a className="text-blue-500 ml-2" href="#">
                Sign up
              </a>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: 7,
            width: "100%",
            maxWidth: "1200px",
            height: isMobile ? "250px" : "calc(100vh - 150px)",
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          <Box
            className="bg-[url('../assets/Art.jpg')] bg-cover bg-center w-full"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 7,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        </Box>
      </Box>
      <Typography
        sx={{
          m: "10px 0",
          color: "text.primary",
          fontSize: isMobile ? "10px" : "14px",
          textAlign: "center",
        }}
      >
        © 2025 ALL RIGHTS RESERVED
      </Typography>
    </Box>
  );
};

export default AuthPage;
