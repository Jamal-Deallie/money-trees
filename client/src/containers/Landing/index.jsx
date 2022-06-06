import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  Image,
  LandingSection,
  LandingWrap,
  MainButton,
  Heading,
  ImageWrap,
} from "./styles";
import { SignUp } from "../../components";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LandingContainer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <LandingSection>
        <Grid container>
          <Grid item md={12} lg={5}>
            <LandingWrap
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2.5rem",
                padding: "2.5%",
              }}
            >
              <Heading>Money trees is the perfect place for shade</Heading>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Link to="/signup">
                <MainButton onClick={handleOpen}> SIGN UP NOW</MainButton>
              </Link>
            </LandingWrap>
          </Grid>
          <Grid item md={12} lg={7}>
            <ImageWrap>
              <Image src="images/landing.png" alt="happy woman" />
            </ImageWrap>
          </Grid>
        </Grid>
      </LandingSection>
    </>
  );
}
