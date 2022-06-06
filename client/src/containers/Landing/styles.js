import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

export const Image = styled("img")({
  height: "60rem",
  objectFit: "cover",
});

export const ImageWrap = styled("div")({
  overflow: "hidden",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
});

export const LandingSection = styled("section")({
  width: "100%",
  display: "flex",
});

export const LandingWrap = styled("div")({
  width: "100%",
});

export const MainButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: "open-sans,sans-serif",
  fontWeight: 400,
  padding: "1rem 4rem",
  border: "2px solid #111",
  borderRadius: "8px",
  boxSizing: "border-box",
  boxShadow: `${theme.palette.primary.main} 4px 4px 0 0`,

  "&:hover": {
    backgroundColor: "#ffffff",
    boxShadow: "none",
  },
}));

export const Heading = styled(Typography)({
  fontFamily: "balboa, sans-serif",
  textTransform: "uppercase",
  lineHeight: "6rem",
  fontSize: 50,
  fontWeight: "bold",
});
