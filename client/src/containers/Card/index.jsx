import { Box, Container, Grid } from '@mui/material';
import { CustomCard } from '../../components';
import { CardSection, GridContainer, GridItem } from './styles';

export default function CardContainer() {
  return (
    <CardSection>
      <GridContainer container spacing={2}>
        <GridItem item xs={12} md={6} lg={3}>
          <CustomCard
            bgColor='#F29877'
            image='creditScore'
            category='Credit Score'
            stat='stat'
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={3}>
          <CustomCard />
        </GridItem>
        <GridItem item xs={12} md={6} lg={3}>
          <CustomCard />
        </GridItem>
        <GridItem item xs={12} md={6} lg={3}>
          <CustomCard />
        </GridItem>
      </GridContainer>
    </CardSection>
  );
}
