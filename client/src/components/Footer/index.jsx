import { CustomFooter, Icons, Links, GridLinks} from './styles';
import { Typography, Grid } from '@mui/material/';


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
              color: 'primary.main',
            }}>
            Money Trees
          </Typography>
          <Typography sx={{ color: 'primary.main' }}>
            123 Main Street
          </Typography>
          <Typography ssx={{ color: 'primary.main' }}>
            New York, NY 12345
          </Typography>
        </Grid>
        <GridLinks item>
          <Links to='/'>
            <Typography variant='body1' sx={{ color: 'primary.main' }}>
              CONTACT
            </Typography>
          </Links>
          <Links to='/'>
            <Typography variant='body1' sx={{ color: 'primary.main' }}>
              POLICY
            </Typography>
          </Links>
          <Links to='/'>
            <Typography variant='body1' sx={{ color: 'primary.main' }}>
              TERMS & CONDITIONS
            </Typography>
          </Links>
        </GridLinks>
        <Grid
          item
          sx={{
            display: 'inline-flex',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icons src='/images/logos/social-media-1.svg' alt='twitter' />
          <Icons src='/images/logos/social-media-2.svg' alt='twitter' />
          <Icons src='/images/logos/social-media-3.svg' alt='twitter' />
          <Icons src='/images/logos/social-media-4.svg' alt='twitter' />
          <Icons src='/images/logos/social-media-5.svg' alt='twitter' />
        </Grid>
      </Grid>
    </CustomFooter>
  );
}
