import React from 'react';
import '../css/App.css';
import Navbar from '../components/navbar';
import { Box, Button, Grid, Stack } from '@mui/material';
import { Container } from '@mui/system';
import "../css/home.css";
import EastIcon from "@mui/icons-material/East";
import SectionTitle from '../components/sectionTitle';


const Home = () => {

  return (
    <>
      <Container id="hero" sx={{ height: { xs: "80vh", md: "100vh" } }} maxWidth={false}>
        <Navbar />
        <Stack direction="row" maxWidth="60%" justifyContent="end">
          <Stack direction="column" sx={{ bgcolor: 'transparent', marginLeft: { xs: '8%', md: '8%' }, marginTop: { xs: '18vh', md: '20vh' } }}>
            <h1 >
              Des foods que vous ne trouverez pas ici, vous ne les trouverez pas nulle part ailleurs.
            </h1>
            <Button className='button-reservation' endIcon={<EastIcon />} variant="contained"
              sx={{
                my: 2,
                textAlign: "center",
                color: 'white',
                textTransform: 'capitalize',
                fontFamily: "circular",
                fontSize: "16px",
                width: "160px",
                backgroundColor: "#000",
                borderRadius: "50px"
              }}
              disableElevation
            >
              Reservation
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Container id="about" maxWidth="lg" style={{ marginTop: "5%"}}>
        <SectionTitle text={"Resto c'est quoi ?"} />
        <Grid container spacing={2} my={5} sx={{justifyContent:"center", alignItems:"center"}}>
          <Grid container xs={12} md={5}>
            <Container maxWidth={false} style={{ textAlign: "center", }}>
              <Box
                className="rotated-image"
                component="img"
                sx={{
                  width: 300,
                  maxWidth: { xs: 250, md: 300 },
                }}
                alt="Food"
                src="https://technext.github.io/restoran/img/hero.png"
              />
            </Container>
          </Grid>
          <Grid container xs={12} md={7}>
            <Container maxWidth={false}>
              <p style={{lineHeight:1.7}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum enim tortor, sit amet egestas neque placerat ut. Nulla ut elit auctor ipsum tincidunt interdum non sed nunc. Donec mollis, justo in ullamcorper luctus, magna velit posuere tortor, vel suscipit libero orci vitae orci.
                <br/>Praesent posuere, tortor at faucibus fermentum, est eros condimentum velit, id efficitur nulla enim at est. Duis congue ex a ipsum scelerisque gravida. Vestibulum vitae velit a mi cursus gravida non a massa. Aliquam dignissim tellus at nisl cursus, ut consequat mi efficitur. Donec interdum nunc nec nibh venenatis, eu malesuada dolor gravida. 
              </p>
            </Container>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}


export default Home;
