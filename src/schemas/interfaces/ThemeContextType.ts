import { PaletteMode } from "@mui/material";

export interface ThemeContextType {
  toggleTheme: () => void;
  mode: PaletteMode;
}
