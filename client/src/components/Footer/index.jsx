import { CustomFooter, Icons } from './styles';
import { Typography, Box, Grid } from '@mui/material/';
export default function Footer() {
  return (
    <CustomFooter>
      <Grid
        container
        spacing={5}
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid item>
          <Typography
            variant='h2'
            sx={{
              fontFamily: 'balboa, sans-serif',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: 'secondary.main',
            }}>
            Money Trees
          </Typography>
          <Typography sx={{ color: 'secondary.main' }}>
            123 Main Street
          </Typography>
          <Typography sx={{ color: 'secondary.main' }}>
            New York, NY 12345
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontFamily: '"open-sans", sans-serif"',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: 'secondary.main',
            }}>
            Contact Policy Terms & Conditions
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: 'inline-flex',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icons src='/images/logos/twitter-icon.svg' alt='twitter' />
          <Icons src='/images/logos/instagram-icon.svg' alt='twitter' />
          <Icons src='/images/logos/youtube-icon.svg' alt='twitter' />
          <Icons src='/images/logos/in-icon.svg' alt='twitter' />
        </Grid>
      </Grid>
    </CustomFooter>
  );
}
