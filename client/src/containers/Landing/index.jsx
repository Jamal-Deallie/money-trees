import { useState } from 'react';
import { Box, Grid, Typography, Modal } from '@mui/material';
import { Image, LandingSection, LandingWrap } from './styles';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
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
    <>
      <LandingSection>
        <LandingWrap>
          <Typography
            sx={{
              fontFamily: 'balboa, sans-serif',
              textTransform: 'uppercase',
              fontSize: 100,
              fontWeight: 'bold',
            }}>
            Money trees is the perfect place for shade
          </Typography>
          <Link to="/signup">
            <ButtonUnstyled onClick={handleOpen}> SIGN UP NOW</ButtonUnstyled>
          </Link>
        </LandingWrap>
        <Box>
          <Image src='images/landing.png' alt='happy woman' />
        </Box>
      </LandingSection>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box sx={style}>
            <SignUp />
          </Box>
        </Modal>
      </div>
    </>
  );
}
