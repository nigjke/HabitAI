import { Box, TextField, Typography } from "@mui/material";

type Props = {
  placeholder: string;
  suptitle: string;
};

const Input = ({ placeholder, suptitle }: Props) => {
  return (
    <Box sx={{ width: "100%", maxWidth: "500px", mt: "20px" }}>
      <Typography sx={{ mb: "5px" }}>{suptitle}</Typography>
      <TextField
        id="outlined-basic"
        fullWidth
        label={placeholder}
        variant="outlined"
        InputProps={{
          sx: {
            borderRadius: "16px !important",
            bgcolor: "#F7FBFF",
            color: "#000000 !important",
          },
        }}
      />
    </Box>
  );
};
export default Input;
