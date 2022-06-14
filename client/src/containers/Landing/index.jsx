import { useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  Image,
  LandingSection,
  LandingWrap,
  MainButton,
  Heading,
  ButtonContainer,
  SubTextContainer,
  ContentContainer,
  IconWrap,
  FreeIcon,
  GridImage,
  Underline,
} from './styles';

import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

export default function LandingContainer() {
  const tl = useRef();

  useEffect(() => {
    let wordSplit = new SplitText('#landing-words', { type: 'words' });
    let lineSplit = new SplitText('#landing-lines', { type: 'lines' });
    gsap.set(wordSplit.words, { yPercent: 100 });
    gsap.set(lineSplit.lines, { opacity: 0 });
    tl.current = gsap.timeline();
    tl.current
      .fromTo(
        wordSplit.words,
        { yPercent: 100 },
        {
          yPercent: 0,
          stagger: 0.05,
          duration: 0.7,
          overflow: 'hidden',
        }
      )
      .fromTo(
        lineSplit.lines,
        { yPercent: 100 },
        {
          yPercent: 0,
          stagger: 0.05,
          duration: 0.7,
          opacity: 1,
        }
      )
      .fromTo(
        '#landing-btn',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
        }
      )
      .fromTo(
        '#landing-img',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
        }
      )
  }, []);
  return (
    <LandingSection>
      <Grid container>
        <Grid item lg={6} sx={{ backgroundColor: 'primary.main' }}>
          <LandingWrap>
            <ContentContainer
              sx={{
                position: 'relative',
              }}>
              <IconWrap></IconWrap>
              <Heading
                sx={{
                  color: 'secondary.main',
                  overflow: 'hidden',
                  display: 'inline-block',
                }}
                id='landing-words'>
                <Underline> Money trees</Underline> is the perfect place for
                shade
              </Heading>
            </ContentContainer>
            <SubTextContainer>
              <Typography
                sx={{
                  color: 'secondary.main',
                  overflow: 'hidden',
                  display: 'inline-block',
                }}
                id='landing-lines'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <ButtonContainer>
                <Link to='/signup'>
                  <MainButton id='landing-btn'> SIGN UP NOW</MainButton>
                </Link>
              </ButtonContainer>
            </SubTextContainer>
          </LandingWrap>
        </Grid>

        <GridImage item lg={6}>
          <Image
            src='images/landing_img.png'
            alt='happy man'
            id='landing-img'
          />
        </GridImage>
      </Grid>
    </LandingSection>
  );
}
