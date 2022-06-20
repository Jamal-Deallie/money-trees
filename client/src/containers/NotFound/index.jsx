import { NotFoundSection, Heading, Container } from './styles';
export default function NotFoundContainer() {
  return (
    <NotFoundSection>
      <Container>
        <Heading variant='h1'>Oh No! 404</Heading>
      </Container>
    </NotFoundSection>
  );
}
