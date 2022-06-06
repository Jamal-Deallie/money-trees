import { styled } from "@mui/system";

export const CustomFooter = styled("footer")(({ theme }) => ({
  background: theme.palette.success.main,
  height: "100%",
  borderTop: `solid 2px ${theme.palette.primary.main}`,
  padding: "2.5rem",
}));

export const Icons = styled("img")({
  height: "3rem",
});
