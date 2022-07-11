import { useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  Image,
  LandingSection,
  LandingWrap,
  MainButton,
  Heading,
  GridContainer,
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
    gsap.set(wordSplit.words, { y: 100, opacity: 0 });
    gsap.set(lineSplit.lines, { y: 100, opacity: 0 });

    tl.current = gsap.timeline({
      onComplete() {
        lineSplit.revert();
        wordSplit.revert();
      },
    });

    let contentAnimation = tl.current
      .to(
        wordSplit.words,

        { opacity: 1, y: 0, stagger: 0.05, duration: 0.7 }
      )
      .to(
        lineSplit.lines,

        {
          y: 0,
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
      );

    return () => {
      contentAnimation.progress(1); // reverts the SplitText in the onComplete
    };
  }, []);
  return (
    <LandingSection>
      <Grid container sx={{ height: '100%' }}>
        <Grid item md={6} sx={{ backgroundColor: 'secondary.main' }}>
          <LandingWrap>
            <Heading id='landing-words'>
              <Underline> Money trees</Underline> is the perfect place for shade
            </Heading>

            <Typography
              sx={{
                color: 'primary.main',
                overflow: 'hidden',
                maxWidth: '60rem',
              }}
              id='landing-lines'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>

            <Link to='/signup'>
              <MainButton id='landing-btn'> SIGN UP NOW</MainButton>
            </Link>
          </LandingWrap>
        </Grid>

        <GridImage item md={6}>
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
