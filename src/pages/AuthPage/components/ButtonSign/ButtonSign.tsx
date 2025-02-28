import { Button, useMediaQuery } from "@mui/material";
import { ButtonSignProps } from "../../../../schemas/types/ButtonSignProps";

const ButtonSign = ({ icon, content }: ButtonSignProps) => {
  const isNote = useMediaQuery("(max-width: 1280px)");
  return (
    <Button
      variant="contained"
      fullWidth
      startIcon={
        <img src={icon} alt="icon" style={{ width: 28, height: 28 }} />
      }
      sx={{
        height: isNote ? "40px" : "60px",
        bgcolor: "#F3F9FA",
        color: "#000",
        mb: "20px",
      }}
    >
      {content}
    </Button>
  );
};
export default ButtonSign;
