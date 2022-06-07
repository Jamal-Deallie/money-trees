import { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  Image,
  LandingSection,
  LandingWrap,
  MainButton,
  Heading,
  ImageWrap,
  GridItem,
  GridContainer,
  ImageContainer,
  GridImage,
  Underline,
} from './styles';
import { SignUp } from '../../components';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LandingContainer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <LandingSection>
      <Grid container>
        <Grid item lg={6}>
          <LandingWrap>
            <Heading>
              <Underline> Money trees</Underline> is the perfect place for shade
            </Heading>
            <Typography sx={{ maxWidth: '496px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Link to='/signup'>
              <MainButton onClick={handleOpen}> SIGN UP NOW</MainButton>
            </Link>
          </LandingWrap>
        </Grid>

        <GridImage item lg={6} sx={{ background: 'red' }}>
          <Image src='images/landing_img.png' alt='happy man' />
        </GridImage>
      </Grid>
    </LandingSection>
  );
}
