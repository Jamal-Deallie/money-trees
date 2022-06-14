import { useRef, useEffect, useState } from 'react';
import {
  AccordionMenu,
  AccordionContent,
  BtnGroup,
  AccordionWrapper,
  TitleContainer,
  ContentContainer,
  ModalContainer,
} from './styles';
import { gsap } from 'gsap';
import { IconButton, Typography, Box, Tooltip, Modal } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Moment from 'react-moment';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { EditForm } from '../../components';
import { useDispatch } from 'react-redux';
import { useDeleteTransactionMutation } from '../../features/transactions/transactionSlice';



export default function Accordion({ id, party, amount, date, cashFlow }) {
  const contentRef = useRef(null);
  const tl = useRef();
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const [reversed, setReversed] = useState(false);
  const [deleteTransaction] = useDeleteTransactionMutation();
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

  const handleDelete = async () => {
    try {
      await deleteTransaction(id);
    } catch (err) {
      console.log('Failed to delete the transaction', err);
    }
  };

  return (
    <>
      <AccordionMenu key={id}>
        <AccordionWrapper>
          <TitleContainer
            $bg={cashFlow}
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
                  ml: 10,
                }}>
                {party}
              </Typography>
              <BtnGroup $options={isShown}>
                <Tooltip title='Delete'>
                  <IconButton
                    color='primary'
                    aria-label='delete transaction'
                    component='span'
                    onClick={handleDelete}>
                    <DeleteIcon sx={{ fontSize: 27 }} />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title='Update'
                  sx={{
                    '& .MuiTooltip-tooltip': {
                      border: 'solid skyblue 1px',
                    },
                  }}>
                  <IconButton
                    onClick={handleOpen}
                    color='primary'
                    aria-label='update transaction'
                    component='span'>
                    <ChangeCircleIcon sx={{ fontSize: 27 }} />
                  </IconButton>
                </Tooltip>
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
            <AccordionContent ref={textRef}>Details</AccordionContent>
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
