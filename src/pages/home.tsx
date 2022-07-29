import React from 'react';
import '../css/App.css';
import Navbar from '../components/navbar';
import { Button, Stack } from '@mui/material';
import { Container } from '@mui/system';
import "../css/home.css";
import EastIcon from "@mui/icons-material/East";


const Home = () => {

  return (
    <>
      <Container className='hero' sx={{ height: { xs: "80vh", md: "100vh" } }} maxWidth={false}>
        <Navbar />
        <Stack direction="row" sx={{ bgcolor: 'transparent', marginLeft: { xs: '8%', md: '8vh' }, marginTop: { xs: '18%', md: '15vh' } }} maxWidth="60%" justifyContent="end">
          <Stack direction="column">
            <h1 >
              Des foods que vous ne trouviez pas ici, vous ne les trouverez pas nulle part ailleurs.
            </h1>
            <Button className='button-reservation' endIcon={<EastIcon />} variant="contained"
              sx={{
                my: 2,
                textAlign: "center",
                color: 'white',
                textTransform: 'capitalize',
                fontFamily: "circular",
                fontSize: "18px",
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
    </>
  );
}


export default Home;
