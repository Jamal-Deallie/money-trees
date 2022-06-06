import { CustomFooter, Icons } from "./styles";
import { Typography, Box , Grid} from "@mui/material/";
export default function Footer() {
  return (
    <CustomFooter>
      <Grid container sx={{justifyContent: 'space-between', alignItems: 'center'}}> 
        <Grid item>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "balboa, sans-serif",
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Money Trees
          </Typography>
          <Typography>123 Main Street</Typography>
          <Typography>New York, NY 12345</Typography>
        </Grid>
        <Grid item
          sx={{
            fontFamily: '"open-sans", sans-serif"',
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          Contact usCookie Policy Terms & Conditions
        </Grid>
        <Grid item
          sx={{
            display: "inline-flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icons src="/images/logos/twitter-icon.svg" alt="twitter" />
          <Icons src="/images/logos/instagram-icon.svg" alt="twitter" />
          <Icons src="/images/logos/youtube-icon.svg" alt="twitter" />
          <Icons src="/images/logos/in-icon.svg" alt="twitter" />
        </Grid>
      </Grid>
    </CustomFooter>
  );
}
