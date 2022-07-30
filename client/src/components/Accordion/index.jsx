import { useRef, useEffect, useState } from 'react';
import {
  AccordionMenu,
  BtnGroup,
  AccordionWrapper,
  TitleContainer,
  ContentContainer,
  ModalContainer,
  ContentInner,
  CustomTooltip,
} from './styles';
import { gsap } from 'gsap';
import { IconButton, Typography, Box, Modal } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Moment from 'react-moment';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { EditForm } from '../../components';
import { useDeleteTransactionMutation } from '../../features/transactions/transactionSlice';
import useArrayRef from '../../hooks/useArrayRef';

export default function Accordion({
  id,
  party,
  amount,
  date,
  cashFlow,
  category,
}) {
  const contentRef = useRef(null);
  const tl = useRef();
  const iconRef = useRef(null);
  const [reversed, setReversed] = useState(false);
  const [deleteTransaction] = useDeleteTransactionMutation();
  const [edit, setEdit] = useState(false);
  const handleOpen = () => setEdit(true);
  const handleClose = () => setEdit(false);
  const [isShown, setIsShown] = useState(false);
  const [transactionRef, setTransactionRef] = useArrayRef();

  useEffect(() => {
    gsap.set(contentRef.current, { height: 0 });
    tl.current = gsap.timeline();
    tl.current
      .to(iconRef.current, {
        transform: 'rotate(45deg)',
      })
      .to(contentRef.current, {
        height: '30rem',
        ease: 'elastic',
        duration: 1.2,
      });
  }, [contentRef]);

  useEffect(() => {
    reversed ? tl.current.play() : tl.current.reverse();
  }, [tl, reversed]);

  const handleDelete = async () => {
    try {
      gsap.to(transactionRef.current, {
        display: 'none',
        opacity: 0,
      });
      await deleteTransaction(id);
    } catch (err) {
      alert('Failed to delete the transaction', err);
    }
  };

  return (
    <>
      <AccordionMenu key={id} ref={setTransactionRef}>
        <AccordionWrapper>
          <TitleContainer
            $bc={cashFlow}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 1.5,
              }}>
              <Moment format='MMM-DD'>{date}</Moment>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}>
              <Typography
                sx={{
                  fontFamily: 'balboa, sans-serif',
                  fontSize: 18,
                  textTransform: 'capitalize',
                  textAlign: 'center',
                }}>
                {party}
              </Typography>
              <BtnGroup $options={isShown}>
                <CustomTooltip title='Delete'>
                  <IconButton
                    color='primary'
                    aria-label='delete transaction'
                    component='span'
                    onClick={handleDelete}>
                    <DeleteIcon sx={{ fontSize: 27 }} />
                  </IconButton>
                </CustomTooltip>
                <CustomTooltip title='Update'>
                  <IconButton
                    onClick={handleOpen}
                    color='primary'
                    aria-label='update transaction'
                    component='span'>
                    <ChangeCircleIcon sx={{ fontSize: 27 }} />
                  </IconButton>
                </CustomTooltip>
              </BtnGroup>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>${amount}</Typography>
              <IconButton
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
            <ContentInner $bc={cashFlow}>
              <Typography variant='header1'>Summary:</Typography>
              <Typography variant='body3'>Party: {party}</Typography>
              <Typography variant='body3'>Category: {category}</Typography>
              <Typography variant='body3'>Amount: ${amount}</Typography>
              <Typography variant='body3'>CashFlow: {cashFlow}</Typography>
            </ContentInner>
          </ContentContainer>
        </AccordionWrapper>
      </AccordionMenu>
      <Modal open={edit} onClose={handleClose}>
        <ModalContainer>
          <EditForm id={id} />
        </ModalContainer>
      </Modal>
    </>
  );
}
