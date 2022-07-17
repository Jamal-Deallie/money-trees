import { useEffect } from 'react';
import { StatWrap, StyledCard, Header, Stat, Span } from './styles';
import useArrayRef from '../../hooks/useArrayRef';
import { gsap } from 'gsap';

export default function CustomCard({ bgColor, stat, category, bgImage }) {
  const [statRef, setStatRef] = useArrayRef();
  useEffect(() => {
    gsap.to(statRef.current, {
      innerText: stat,
      duration: 3,
      snap: {
        innerText: 1,
      },
    });
  });

  return (
    <StyledCard $bg={bgColor} $bgImg={bgImage}>
      <Header>{category}</Header>
      {category !== 'Credit Score' ? (
        <StatWrap>
          <Stat>$</Stat>
          <Span ref={setStatRef}>0</Span>
        </StatWrap>
      ) : (
        <Stat ref={setStatRef}>0</Stat>
      )}
    </StyledCard>
  );
}
