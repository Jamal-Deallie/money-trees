import { Typography } from '@mui/material/';
import { Image, Card } from './styles';

export default function CustomCard({ bgColor, stat, category, image }) {
  const renderedImages = () => {
    switch (image) {
      case 'creditScore':
        return <Image src='/images/creditscore.svg' alt='credit score' />;
      case 'savings':
        return <Image src='/images/savings.svg' alt='savings' />;
      case 'income':
        return <Image src='/images/budget.svg' alt='budget' />;
      case 'expenses':
        return <Image src='/images/cash.svg' alt='cash' />;
      default:
        return null;
    }
  };

  return (
    <Card $bg={bgColor}>
      <Typography
        variant='h3'
        sx={{
          fontFamily: 'balboa, sans-serif',
          textTransform: 'uppercase',
        }}>
        {category}
      </Typography>
      <Typography color='text.secondary'>{stat}</Typography>
      {renderedImages()}
    </Card>
  );
}
