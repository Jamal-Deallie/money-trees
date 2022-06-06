import { styled } from "@mui/system";
import { Paper, Grid, Card } from "@mui/material/";

export const Image = styled("img")({
  height: 100,
});

export const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const CustomContainer = styled("div")(({ theme }) => ({}));

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "$bg",
})(({ theme, $bg }) => ({
  border: "2px solid #422800",
  borderRadius: "30px",
  boxShadow: `${theme.palette.primary.main} 4px 4px 0 0`,
  width: "90%",
  aspectRatio: "3/4",
  maxWidth: "30rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  background: $bg ? $bg : "none",
  padding: "1.5rem 3rem",
}));

export const AccountSection = styled(Grid)(({ theme }) => ({
  borderRight: "2px solid #422800",
}));
