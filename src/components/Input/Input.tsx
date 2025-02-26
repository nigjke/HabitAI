import { Box, TextField, Typography, useMediaQuery } from "@mui/material";

type Props = {
  placeholder: string;
  suptitle: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, suptitle, value, onChange }: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isNote = useMediaQuery("(max-width: 1280px)");
  return (
    <Box sx={{ width: "100%", maxWidth: "800px", mt: "20px" }}>
      <Typography sx={{ mb: "5px" }}>{suptitle}</Typography>
      <TextField
        id="outlined-basic"
        fullWidth
        label={placeholder}
        variant="outlined"
        onChange={onChange}
        value={value}
        InputProps={{
          sx: {
            height: isNote ? "40px" : "60px",
            display: "flex",
            alignItems: "center",
            borderRadius: "16px !important",
            bgcolor: "#F7FBFF",
            color: "#000000 !important",
            fontSize: isMobile ? "10px" : "14px",
          },
        }}
      />
    </Box>
  );
};
export default Input;
