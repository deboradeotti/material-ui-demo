import { Container, Typography, Box, Paper, BottomNavigation } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import BasicModal from '../components/Modal';

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={5}>Explore the World in Vegas</Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
      <img src="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1659947793/bijn6yf6f1lssritvchl.jpg" alt="" height={325} />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>About this ticket</Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti mollitia minima non dolore asperiores quo commodi fuga sed, consequuntur deserunt tempore ipsam consequatur soluta a ipsum corporis neque ratione aspernatur autem! Optio nostrum ipsum maxime magni maiores distinctio consectetur.</Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>Frequently asked questions</Typography>
      <CustomizedAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{paddingTop: 1.5}}>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;