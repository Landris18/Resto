import React from 'react';
import '../css/App.css';
import Navbar from '../components/navbar';
import { Button, Stack } from '@mui/material';
import { Container } from '@mui/system';
import "../css/home.css";
import EastIcon from "@mui/icons-material/East";
import SectionTitre from '../components/sectionTitre';


const Home = () => {

  return (
    <>
      <Container id="hero" sx={{ height: { xs: "80vh", md: "100vh" } }} maxWidth={false}>
        <Navbar />
        <Stack direction="row" maxWidth="60%" justifyContent="end">
          <Stack direction="column" sx={{ bgcolor: 'transparent', marginLeft: { xs: '8%', md: '8%' }, marginTop: { xs: '18vh', md: '22vh' } }}>
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

      <Container id="about" maxWidth={false}>
        <SectionTitre text={"Resto c'est quoi ?"} />
      </Container>
      
    </>
  );
}


export default Home;
