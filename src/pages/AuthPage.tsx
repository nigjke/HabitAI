import { Box, Button, Typography } from "@mui/material";
import ButtonSign from "../components/ButtonSign/ButtonSign";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import GoogleIcon from "../assets/Google.svg";
import FacebookIcon from "../assets/Facebook.svg";

const AuthPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
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
              maxWidth: "500px",
              m: "15px 0",
              color: "#1E4AE9",
            }}
          >
            <a href="#">Forgot Password?</a>
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{ height: "50px", bgcolor: "#162D3A" }}
          >
            Sign in
          </Button>
          <div className="flex items-center w-full my-12">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-4 text-gray-600">Or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <ButtonSign icon={GoogleIcon} content="Sign in with Google" />
          <ButtonSign icon={FacebookIcon} content="Sign in with Facebook" />
          <Typography
            sx={{
              maxWidth: "500px",
              m: "15px 0",
            }}
          >
            Don't you have an account?
            <a className="text-blue-500 ml-2" href="#">
              Sign up
            </a>
          </Typography>
          <Typography
            sx={{
              maxWidth: "500px",
              m: "15px 0",
              position: "absolute",
              bottom: "0",
              color: "#959CB6",
            }}
          >
            © 2023 ALL RIGHTS RESERVED
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          borderColor: "primary.main",
          borderRadius: 7,
          width: "100%",
          maxWidth: "1200px",
          height: "calc(100vh - 100px)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <Box
          className="bg-[url('../assets/Art.jpg')] bg-cover bg-center h-screen w-full"
          sx={{
            height: "100vh",
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
