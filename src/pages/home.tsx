import React, { useEffect, useState } from 'react';
import '../css/App.css';
import Navbar from '../components/navbar';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import "../css/home.css";
import EastIcon from "@mui/icons-material/East";
import SectionTitle from '../components/sectionTitle';
import promotion from '../images/promotion.png';
import { getSpeciallOffers } from '../services/menuService';
import useMediaQuery from '@mui/material/useMediaQuery';


const Home = () => {

  const [offers, setOffers] = useState<any>([])
  const matchesQuery = useMediaQuery('(max-width:1340px)');

  useEffect(() => {
    const getOffers = async () => {
      if (matchesQuery){
        const data = await getSpeciallOffers();
        data.splice(data.length - 2, 2);        
        setOffers(data);
      }
      else {
        setOffers(await getSpeciallOffers());
      }
    }
    getOffers();

  }, [matchesQuery]);

  return (
    <>
      <Container id="hero" sx={{ height: { xs: "100vh", md: "100vh" } }} maxWidth={false}>
        <Navbar />
        <Stack direction="row" maxWidth="60%" justifyContent="end">
          <Stack direction="column" sx={{ bgcolor: 'transparent', marginLeft: { xs: '8%', md: '8%' }, marginTop: { xs: '22vh', md: '20vh' } }}>
            <h1 >
              Des foods que vous ne trouverez pas ici, vous ne les trouverez pas nulle part ailleurs.
            </h1>
            <Button className='button-reservation' endIcon={<EastIcon />} variant="contained"
              sx={{
                my: 2,
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

      <Container id="about" maxWidth="lg" style={{ marginTop: "5%" }}>
        <SectionTitle text={"Resto c'est quoi ?"} />
        <Grid container item spacing={2} my={5} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Grid container item xs={12} md={5}>
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
          <Grid container item xs={12} md={7}>
            <Container maxWidth={false}>
              <Typography sx={{ color:"white", fontFamily: "circular", fontSize: 13, py: 0.5, px: 2, backgroundColor: "#edbb28", borderRadius: 50, width: 108 }}>
                A propos de nous
              </Typography>
              <h2 style={{ color: "#e7b10c" }}>Le meilleur distributer de fast food de l'océan indien, c'est ici.</h2>
              <p style={{ lineHeight: 1.7,  color: "#222", fontSize:15}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum enim tortor, sit amet egestas neque placerat ut. Nulla ut elit auctor ipsum tincidunt interdum non sed nunc. Donec mollis, justo in ullamcorper luctus, magna velit posuere tortor, vel suscipit libero orci vitae orci.
              </p>
            </Container>
          </Grid>
        </Grid>
      </Container>

      <Container id="promotion" maxWidth={false} style={{ width: "100%", padding: "2% 5% 0% 5% " }}>
        <h2 style={{ color: "#222" }}>OFFRE SPECIALE</h2>
        <Grid container item spacing={2} my={5} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Grid container item xs={12} md={matchesQuery ? 6 : 4}>
            <Container maxWidth={false}>
              <Typography sx={{ fontFamily: "circular", fontSize: 13, py: 0.2, px: 2, backgroundColor: "#edbb28", borderRadius: 50, width: 75 }}>
                Promotions
              </Typography>
              <Box
                component="img"
                sx={{
                  width: 400,
                  maxWidth: { xs: 300, md: 400 },
                }}
                alt="Food"
                src={promotion}
              />
              <h3>Burger king combo x4</h3>
              <p style={{ fontFamily: "circular", fontSize: 14 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum enim tortor, sit amet egestas neque.
              </p>
              <Grid container item spacing={2} px={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Grid container item xs={4} md={6}>
                  <h2>20 $</h2>
                </Grid>
                <Grid container item xs={8} md={6} >
                  <Button className='button-reservation' endIcon={<EastIcon />} variant="contained"
                    sx={{
                      color: 'white',
                      fontFamily: "circular",
                      fontSize: "12px",
                      width: "190px",
                      backgroundColor: "#000",
                      borderRadius: "50px",
                    }}
                    disableElevation
                  >
                    Voir les autres
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid container item xs={12} md={matchesQuery ? 6 : 8}>
            {offers.map((offer: any) => (
              <Grid className="paper" key={offer.id} item xs={12} md={matchesQuery ? 6 : 4} pl={{xs: 0, md:2}} py={1} sx={{ justifyContent: "center", alignItems: "center", lignContents: "center" }}>
                <Paper elevation={0} sx={{ textAlign: "center", justifyContent: "center", pb: 5, minHeight: 200, backgroundColor: "whitesmoke", borderRadius: 4 }}>
                  <Box
                    component="img"
                    sx={{
                      width: 150,
                      maxWidth: { xs: 150, md: 150 },
                    }}
                    alt="Food"
                    src={offer?.image}
                  />
                  <Container>
                    {offer?.name}
                  </Container>
                  <Grid container justifyContent="center">
                    <Typography sx={{ fontFamily: "circular", fontSize: 13, py: 0.2, px: 1, backgroundColor: "#edbb28", borderRadius: 50, width: 40 }}>
                      {offer?.price}
                    </Typography>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>

    </>
  );
}


export default Home;
