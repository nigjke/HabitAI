import { Button } from "@mui/material";

type Props = {
  icon: string;
  content: string;
};

const ButtonSign = ({ icon, content }: Props) => {
  return (
    <Button
      variant="contained"
      fullWidth
      startIcon={
        <img src={icon} alt="icon" style={{ width: 28, height: 28 }} />
      }
      sx={{ height: "50px", bgcolor: "#F3F9FA", color: "#000", mb: "20px" }}
    >
      {content}
    </Button>
  );
};
export default ButtonSign;
