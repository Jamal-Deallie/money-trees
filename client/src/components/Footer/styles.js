import { styled } from '@mui/system';

export const CustomFooter = styled('footer')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '5rem',
  height: 'auto',
}));

export const Icons = styled('img')({
  height: '3rem',
});
