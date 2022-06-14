import { Typography, Box } from '@mui/material/';
import { Image, StyledCard, Header, Stat } from './styles';

export default function CustomCard({ bgColor, stat, category, bgImage }) {
;

  return (
    <StyledCard $bg={bgColor} $bgImg={bgImage}>

        <Header>{category}</Header>
        <Stat>{stat}</Stat>
 
    </StyledCard>
  );
}
