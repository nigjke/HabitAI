import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ButtonSign from "../components/ButtonSign/ButtonSign";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import GoogleIcon from "../assets/icon/Google.svg";
import FacebookIcon from "../assets/icon/Facebook.svg";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import "./AuthPage.css";
import { login, register } from "../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Clear, Visibility, VisibilityOff } from "@mui/icons-material";

const AuthPage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isNote = useMediaQuery("(max-width: 1280px)");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8; // Пароль должен быть минимум 8 символов
  };

  const handleAuth = async () => {
    // Валидация
    if (!email || !password) {
      setMessage("Пожалуйста, заполните все поля.");
      setIsError(true);
      setSnackbarOpen(true);
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Неверный формат email.");
      setIsError(true);
      setSnackbarOpen(true);
      return;
    }

    if (!validatePassword(password)) {
      setMessage("Пароль должен быть минимум 8 символов.");
      setIsError(true);
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = isSignUp
        ? await register(email, password)
        : await login(email, password);

      if (response.error) {
        throw new Error(response.error);
      }

      setMessage(isSignUp ? "Регистрация успешна!" : "Успешный вход!");
      setIsError(false);
      setSnackbarOpen(true);

      setTimeout(() => {
        navigate("/dashboard"); // Перенаправление после успешного входа
      }, 1500);
    } catch (error) {
      setMessage((error as Error).message || "Ошибка авторизации");
      setIsError(true);
      setSnackbarOpen(true);
    }
  };

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
              title={isSignUp ? "Create an Account 🎉" : "Welcome Back 👋"}
              subtitle={
                isSignUp
                  ? "Sign up to start managing your projects."
                  : "Sign in to start managing your projects."
              }
            />
            <Input
              suptitle="Email"
              value={email}
              placeholder="Example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              endAdornment={
                email ? ( // Показываем иконку очистки только если поле не пустое
                  <InputAdornment position="end">
                    <IconButton
                      color="inherit"
                      onClick={() => setEmail("")} // Очищаем поле при нажатии
                      edge="end"
                    >
                      <Clear sx={{ color: "black" }} />{" "}
                      {/* Черная иконка очистки */}
                    </IconButton>
                  </InputAdornment>
                ) : null // Если email пустой, возвращаем null
              }
            />
            <Input
              suptitle="Password"
              value={password}
              placeholder="At least 8 characters"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    color={"inherit"} // Наследует цвет от родителя
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#373737" }} /> // Устанавливаем черный цвет для иконки
                    ) : (
                      <Visibility sx={{ color: "#373737" }} /> // Устанавливаем черный цвет для иконки
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
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
              onClick={handleAuth}
              sx={{
                height: isNote ? "40px" : "50px",
                bgcolor: "#162D3A",
                color: "#FFFFFF",
                fontSize: isMobile ? "12px" : "16px",
              }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
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
                content={
                  isNote
                    ? "Google"
                    : `${isSignUp ? "Sign up" : "Sign in"} with Google`
                }
              />
              <ButtonSign
                icon={FacebookIcon}
                content={
                  isNote
                    ? "Facebook"
                    : `${isSignUp ? "Sign up" : "Sign in"} with Facebook`
                }
              />
            </Box>
            <Typography
              sx={{ m: "10px 0", fontSize: isMobile ? "10px" : "14px" }}
            >
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <Button
                onClick={() => setIsSignUp(!isSignUp)}
                sx={{ ml: 1, color: "#1E4AE9" }}
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </Button>
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
            className="bg-[url('../assets/image/Art.jpg')] bg-cover bg-center w-full"
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity={isError ? "error" : "success"}>{message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default AuthPage;
