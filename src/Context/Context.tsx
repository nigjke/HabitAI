import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme, PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextType } from "../schemas/interfaces/ThemeContextType";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("theme") as PaletteMode) || "light"
  );

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "#373737" },
                background: { default: "#f5f5f5", paper: "#ffffff" },
                text: { primary: "#000000", secondary: "#b0b0b0" },
              }
            : {
                primary: { main: "#ffffff" },
                background: { default: "#373737", paper: "#1e1e1e" },
                text: { primary: "#ffffff", secondary: "#b0b0b0" },
              }),
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: "16px",
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: "16px",
              },
              notchedOutline: {
                borderRadius: "16px",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
