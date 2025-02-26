import { Box, TextField, Typography, useMediaQuery } from "@mui/material";
import { JSX } from "react";

type Props = {
  placeholder: string;
  suptitle: string;
  value: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  endAdornment?: JSX.Element | null;
};

const Input = ({
  placeholder,
  suptitle,
  value,
  onChange,
  type,
  endAdornment,
}: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isNote = useMediaQuery("(max-width: 1280px)");
  return (
    <Box sx={{ width: "100%", maxWidth: "800px", mt: "20px" }}>
      <Typography sx={{ mb: "5px" }}>{suptitle}</Typography>
      <TextField
        id="outlined-basic"
        fullWidth
        placeholder={placeholder}
        variant="outlined"
        onChange={onChange}
        type={type}
        value={value}
        InputProps={{
          endAdornment: endAdornment,
          sx: {
            height: isNote ? "40px" : "60px",
            display: "flex",
            alignItems: "center",
            borderRadius: "16px !important",
            bgcolor: "#F7FBFF",
            color: "#373737 !important",
            fontSize: isMobile ? "10px" : "14px",
          },
        }}
        sx={{
          "& .MuiInputBase-input::placeholder": {
            opacity: value ? 0 : 1,
          },
        }}
      />
    </Box>
  );
};

export default Input;
