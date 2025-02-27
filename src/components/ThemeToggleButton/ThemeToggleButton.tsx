import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "../../Context/Context";
import { ThemeToggleButtonProps } from "../../schemas/interfaces/ThemeToggleButtonProps";

export default function ThemeToggleButton({ sx }: ThemeToggleButtonProps) {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} sx={sx} color="inherit">
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
