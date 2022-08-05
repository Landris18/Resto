import React, { useEffect, useState } from 'react';
import '../css/App.css';
import Navbar from '../components/navbar';
import { Box, Button, Fab, Grid, Paper, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import "../css/home.css";
import EastIcon from "@mui/icons-material/East";
import SectionTitle from '../components/utils/sectionTitle';
import promotion from '../images/promotion.png';
import { getSpeciallOffers } from '../services/menuService';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import burger from '../images/burger.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-scroll';
import {ScrollToTop} from '../components/utils/scrollUtils';


const Home = (props: any) => {

  const [offers, setOffers] = useState<any>([])
  const matchesQuery = useMediaQuery('(max-width:1340px)');

  useEffect(() => {
    const getOffers = async () => {
      if (matchesQuery) {
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
      <Container id="hero" sx={{ height: "100vh" }} maxWidth={false}>
        <Navbar />
        <Stack direction="row" maxWidth="60%" justifyContent="end">
          <Stack direction="column" sx={{ bgcolor: 'transparent', marginLeft: '8%', marginTop: { xs: '22vh', md: '20vh' } }}>
            <h1 >
              Des menus que vous ne trouverez pas ici, vous ne les trouverez pas nulle part ailleurs.
            </h1>
            <Button className='button-reservation' endIcon={<ShoppingCartOutlinedIcon />} variant="contained"
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

      <section id="about">
        <Container maxWidth="lg" style={{ marginTop: "5%" }}>
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
                <Typography sx={{ color: "white", fontFamily: "circular", fontSize: 13, py: 0.5, px: 2, backgroundColor: "#edbb28", borderRadius: 50, width: 108 }}>
                  A propos de nous
                </Typography>
                <h2 style={{ color: "#e7b10c" }}>Le meilleur restaurant de fast food de l'océan indien, c'est ici.</h2>
                <p style={{ lineHeight: 1.7, color: "#222", fontSize: 16, fontFamily: "Josefin Sans, circular", fontWeight: "500" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum enim tortor, sit amet egestas neque placerat ut. Nulla ut elit auctor ipsum tincidunt interdum non sed nunc. Donec mollis, justo in ullamcorper luctus, magna velit posuere tortor, vel suscipit libero orci vitae orci.
                </p>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id="offres">
        <Container maxWidth={false} style={{ width: "100%", padding: "2% 5% 0% 5% " }}>
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
                <p style={{ fontFamily: "Josefin Sans, circular", fontSize: 15 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum enim tortor, sit amet egestas neque.
                </p>
                <Grid container item spacing={2} px={0} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Grid container item xs={4} md={3} >
                    <h2>20 $</h2>
                  </Grid>
                  <Grid container item xs={8} md={9} justifyContent="end">
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
                <Grid className="paper" key={offer.id} item xs={12} md={matchesQuery ? 6 : 4} pl={{ xs: 0, md: 2 }} py={1} sx={{ justifyContent: "center", alignItems: "center", lignContents: "center" }}>
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
                    <Grid container item justifyContent="center">
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

        <Container maxWidth={false} style={{ width: "100%", backgroundColor: "#111", margin: "6% 0% 0% 0%", padding: "4% 0% 4% 0%" }} >
          <Container maxWidth='xl'>
            <Grid container item spacing={4} sx={{ justifyContent: "space-between", alignItems: "center" }}>
              <Grid container item justifyContent="center" xs={12} md={7} >
                <Container maxWidth={false}>
                  <Typography sx={{ fontFamily: "circular", fontSize: 13, py: 0.2, px: 2, backgroundColor: "#fc0330", borderRadius: 50, width: 45, color: "#fff" }}>
                    Gratuit
                  </Typography>
                  <h1 style={{ color: "#fff" }}>Plus de 100 Burgers offerts gratuiment tous les jours.</h1>
                  <p style={{ fontFamily: "Josefin Sans, circular", fontSize: 15, color: "#fff" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button className="voir-plus" variant="outlined" sx={{ borderRadius: 50, color: "#fff", borderColor: "#fff", fontFamily: "circular", textTransform: "none" }}>
                    Voir plus
                  </Button>
                </Container>
              </Grid>
              <Grid container item justifyContent={{ xs: "center", md: "end" }} xs={12} md={5} >
                <Box
                  component="img"
                  sx={{
                    width: 500,
                    maxWidth: { xs: 300, md: 500 },
                  }}
                  alt="Food"
                  src={burger}
                />
              </Grid>
            </Grid>
          </Container>
        </Container>
      </section>

      <section id="menu">
        <Container maxWidth={false} style={{ width: "100%", margin: "5% 0% 0% 0%" }} >
          <SectionTitle text={"Menus disponibles"} />
          <p style={{ textAlign: "center", color: "#222", fontSize: 16, fontFamily: "Josefin Sans, circular", fontWeight: "500" }}>
            Tous les menus listés ici sont disponibles, réserver une table dès maintenant pour les savourer.
          </p>
        </Container>
      </section>

      <ScrollToTop {...props}>
        <Link
          smooth spy
          duration={400}
          style={{ textDecoration: "none" }}
          to="hero">
          <Fab sx={{ backgroundColor: "#edbb28" }} size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </Link>
      </ScrollToTop>
    </>
  );
}


export default Home;
