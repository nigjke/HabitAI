import { Box, Typography, useMediaQuery } from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "800px",
        boxSizing: "border-box",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: isMobile ? "10px" : "20px",
          fontSize: isMobile ? "24px" : "36px",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          mb: isMobile ? "5px" : "10px",
          fontSize: isMobile ? "15px" : "20px",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
