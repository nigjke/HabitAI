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
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        flexDirection: isMobile ? "column-reverse" : "row",
        alignItems: "center",
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          borderColor: "primary.main",
          borderRadius: 7,
          width: "100%",
          maxWidth: "1200px",
          height: "calc(100vh - 100px)",
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderColor: "primary.main",
            borderRadius: 7,
            maxWidth: "500",
            height: "calc(100vh - 100px)",
            display: "flex",
            position: "relative",
            boxSizing: "border-box",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
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
            subtitle="Today is a new day. It's your day. You shape it. 
Sign in to start managing your projects."
          />
          <Input suptitle="Email" placeholder="Example@email.com" />
          <Input suptitle="Password" placeholder="At least 8 characters" />
          <Typography
            sx={{
              alignSelf: "end",
              m: "10px 0",
              color: "#1E4AE9",
              fontSize: isMobile ? "8px" : "14px",
            }}
          >
            <a href="#">Forgot Password?</a>
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: isMobile ? "30px" : "50px",
              bgcolor: "#162D3A",
              color: "#FFFFFF",
              fontSize: isMobile ? "10px" : "16px",
            }}
          >
            Sign in
          </Button>
          <Box
            sx={{ display: "flex", alignItems: "center", width: "100%", my: 3 }}
          >
            <Box sx={{ flexGrow: 1, borderTop: "1px solid #ccc" }}></Box>
            <Typography sx={{ mx: 2, color: "gray" }}>Or</Typography>
            <Box sx={{ flexGrow: 1, borderTop: "1px solid #ccc" }}></Box>
          </Box>
          <ButtonSign icon={GoogleIcon} content="Sign in with Google" />
          <ButtonSign icon={FacebookIcon} content="Sign in with Facebook" />
          <Typography sx={{ m: "10px 0", fontSize: isMobile ? "8px" : "14px" }}>
            Don't have an account?
            <a className="text-blue-500 ml-2" href="#">
              Sign up
            </a>
          </Typography>
          <Typography
            sx={{
              m: "10px 0",
              color: "text.primary",
              fontSize: isMobile ? "8px" : "14px",
            }}
          >
            © 2023 ALL RIGHTS RESERVED
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: 7,
          width: "100%",
          maxWidth: "1200px",
          height: isMobile ? "300px" : "calc(100vh - 100px)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          boxSizing: "border-box",
          padding: "20px",
        }}
      >
        <Box
          className="bg-[url('../assets/Art.jpg')] bg-cover bg-center h-screen w-full"
          sx={{
            borderRadius: 7,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
export default AuthPage;
