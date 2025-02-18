import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "500px",
        boxSizing: "border-box",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ mb: "30px" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: "30px" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
