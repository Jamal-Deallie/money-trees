import { useRef, useEffect, useState } from 'react';
import {
  AccordionMenu,
  AccordionContent,
  BtnGroup,
  AccordionWrapper,
  TitleContainer,
  ContentContainer,
} from './styles';
import { gsap } from 'gsap';
import { IconButton, Typography, Box, Tooltip, Modal } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Moment from 'react-moment';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { EditForm } from '../../components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Accordion({ transaction }) {
  const contentRef = useRef(null);
  const tl = useRef();
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const [reversed, setReversed] = useState(false);

  const [state, SetState] = useState({
    merchant: transaction.merchant,
    category: transaction.category,
    amount: transaction.amount,
    cashFlow: transaction.cashFlow,
    date: transaction.date,
  });

  const [edit, setEdit] = useState(false);
  const handleOpen = () => setEdit(true);
  const handleClose = () => setEdit(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .to(iconRef.current, {
        transform: 'rotate(45deg)',
      })
      .to(contentRef.current, {
        height: 'auto',
        ease: 'elastic',
        duration: 1.2,
      });
  }, [contentRef]);

  useEffect(() => {
    reversed ? tl.current.play() : tl.current.reverse();
  }, [tl, reversed]);

  return (
    <>
      <AccordionMenu>
        <AccordionWrapper>
          <TitleContainer
            $bg={transaction.cashFlow}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Moment format='MMM-DD'>1976-04-19T12:59-0500</Moment>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
              }}>
              <Typography
                sx={{ fontFamily: 'balboa, sans-serif', fontSize: 18 }}>
                {transaction.merchant}
              </Typography>
              <BtnGroup
                variant='contained'
                aria-label='outlined primary button group'
                $options={isShown}>
                <Tooltip title='Delete'>
                  <Button>
                    <DeleteIcon sx={{ fontSize: 27 }} />
                  </Button>
                </Tooltip>
                <Tooltip title='Update'>
                  <Button onClick={handleOpen}>
                    <ChangeCircleIcon sx={{ fontSize: 27 }} />
                  </Button>
                </Tooltip>
              </BtnGroup>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>${transaction.amount}</Typography>
              <IconButton
                aria-label='fingerprint'
                color='primary'
                ref={iconRef}
                size='large'
                onClick={() => {
                  setReversed(reversed => !reversed);
                }}>
                <AddCircleRoundedIcon sx={{ fontSize: 27 }} />
              </IconButton>
            </Box>
          </TitleContainer>

          <ContentContainer ref={contentRef}>
            <AccordionContent ref={textRef}>Details</AccordionContent>
          </ContentContainer>
        </AccordionWrapper>
      </AccordionMenu>
      <div>
        <Modal
          open={edit}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box sx={style}>
            <EditForm transaction={{ ...transaction }} />
          </Box>
        </Modal>
      </div>
    </>
  );
}
