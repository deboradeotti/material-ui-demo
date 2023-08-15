import {Paper, Grid, Box, Typography, Rating} from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          }, 
          style: {
            fontSize: 11
          }
        },
        {
          props: {
            variant: "body3"
          }, 
          style: {
            fontSize: 9
          }
        }
      ]
    }
  }
});

const TourCard = (tour) => {
    return (
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <a href="/tour" className='card'>
            <Paper elevation={4}>
              <img src={tour.tour.image} alt="" className='img' />
              <Box paddingX={1}>
                <Typography variant="subtitle1" component="h2">{tour.tour.name}</Typography>
                <Box 
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <AccessTime sx={{width: 12.5, marginRight: 0.5}}/>
                  <Typography variant='body2' component='p'>
                    {tour.tour.duration} hours
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    marginTop: 2
                  }}
                >
                  <Rating name="read-only" value={tour.tour.rating} precision={0.5} size='small' readOnly />
                  <Typography variant='body2' component='p' marginLeft={0.5}>{tour.tour.rating}</Typography>
                  <Typography variant='body3' component='p' marginLeft={1.5}>({tour.tour.numberOfReviews} reviews)</Typography>
                </Box>
                <Box>
                  <Typography variant='h6' component='h3' marginTop={1.5}>From C ${tour.tour.price}</Typography>
                </Box>
              </Box>
            </Paper>
          </a>
        </ThemeProvider>
      </Grid>
    );
}

export default TourCard;