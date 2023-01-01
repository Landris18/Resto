import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Container, Box, Button, Fab, Grid, Paper, Stack, Typography } from '@mui/material';
import EastIcon from "@mui/icons-material/East";
import SectionTitle from '../components/SectionTitle';
import promotion from '../assets/images/promotion.png';
import hero from '../assets/images/hero.png';
import burger from '../assets/images/burger.png';
import { getSpeciallOffers } from '../services';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-scroll';
import { ScrollToTop } from '../components/Scrolls';
import Footer from '../components/Footer';
import TabMenu from '../components/TabMenu';


const Home = (props: any) => {

	const [offers, setOffers] = useState<any>([]);
	const matchesQuery = useMediaQuery('(max-width:1340px)');


	useEffect(() => {
		const getOffers = async () => {
			const data = await getSpeciallOffers();
			setOffers(data);
		}
		getOffers();
	}, []);


	return (
		<>
			<Container id="hero" sx={{ height: "100vh" }} maxWidth={false}>
				<Navbar />
				<Stack direction="column" maxWidth={{ xs: "80%", md: "60%" }} justifyContent="end" sx={{ bgcolor: 'transparent', marginLeft: '8%' }}>
					<Typography variant="h2" sx={{ fontFamily: "circular", color: "white", fontSize: { xs: "2.2rem", md: "3.5rem" } }} mt={{ md: "32vh", xs: "25vh" }}>
						Des menus que vous ne trouverez pas ici, vous ne les trouverez pas nulle part ailleurs.
					</Typography>
					<Button className='button-reservation' endIcon={<EditIcon />} variant="contained" disableElevation
						sx={{ my: 2, color: 'white', textTransform: 'capitalize', fontFamily: "circular", fontSize: "16px", width: "160px", backgroundColor: "#000", borderRadius: "50px" }}
					>
						Reservation
					</Button>
				</Stack>
			</Container>

			<section id="about">
				<Container maxWidth="lg" style={{ marginTop: "5%" }}>
					<SectionTitle text={"Resto c'est quoi ?"} />
					<Grid container item spacing={2} my={5} sx={{ justifyContent: "center", alignItems: "center" }}>
						<Grid container item xs={12} md={5}>
							<Container maxWidth={false} style={{ textAlign: "center", }}>
								<Box className="rotated-image" component="img" alt="Food" src={hero} sx={{ width: 300, maxWidth: { xs: 250, md: 300 } }} />
							</Container>
						</Grid>
						<Grid container item xs={12} md={7}>
							<Container maxWidth={false} sx={{ textAlign: { xs: "center", md: "start" } }}>
								<Typography sx={{ display: { xs: "none", md: "block" }, color: "white", fontFamily: "circular", fontSize: 13, py: 0.5, px: 2, backgroundColor: "#edbb28", borderRadius: 50, width: 108 }}>
									A propos de nous
								</Typography>
								<h2 style={{ color: "#e7b10c" }}>Le meilleur restaurant de fast food de l'océan indien, c'est ici.</h2>
								<p style={{ lineHeight: 1.7, color: "#000", fontSize: 16, fontFamily: "Josefin Sans, circular", fontWeight: "500" }}>
									Are you tired of the same old dining options? Look no further! Our restaurant offers a unique dining experience with a menu that features a mix of classic and contemporary dishes. Our skilled chefs use only the freshest ingredients to create mouth-watering dishes that are sure to satisfy your taste buds. So, don't wait, make a reservation today and treat yourself to an unforgettable dining experience.
								</p>
							</Container>
						</Grid>
					</Grid>
				</Container>
			</section>

			<section id="offres">
				<Container maxWidth={false} style={{ width: "100%", padding: "2% 5% 0% 5% " }}>
					<h2 style={{ color: "#222", textAlign: matchesQuery ? "center" : "start" }}>OFFRES SPECIALES</h2>
					<Grid container item spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
						<Grid container item xs={12} md={matchesQuery ? 6 : 4} sx={{ textAlign: { xs: "center", md: "start" } }} >
							<Container maxWidth={false} >
								<Box component="img" src={promotion} alt="Food" sx={{ width: 350, maxWidth: { xs: 250, md: 350 }, borderRadius: 3 }} />
								<h3>Burger Tasty King</h3>
								<p style={{ lineHeight: 1.5, fontFamily: "Josefin Sans, circular", fontSize: 15, color: "#000" }}>
									Burger Tasty King est notre meilleur offre actuellement.
								</p>
								<h2 style={{ lineHeight: 0 }}>50 $</h2>
								<Link smooth spy duration={400} offset={-90} to="menus">
									<Button className='button-reservation' endIcon={<EastIcon />} variant="contained" disableElevation sx={{ color: 'white', fontFamily: "circular", fontSize: "12px", width: "190px", backgroundColor: "#000", borderRadius: "50px" }}>
										Voir les autres
									</Button>
								</Link>
							</Container>
						</Grid>
						<Grid container item xs={12} md={matchesQuery ? 6 : 8} rowSpacing={8} mt={{ xs: 1, md: 0 }}>
							{offers.map((offer: any) => (
								<Grid className="paper" key={offer.id} item xs={12} sm={6} md={4} px={{ xs: 1, md: 0 }} pl={{ xs: 0, md: 2 }} py={1} sx={{ justifyContent: "center", alignItems: "center", lignContents: "center" }}>
									<Paper elevation={0} sx={{ textAlign: "center", justifyContent: "center", pb: 0, minHeight: 140, backgroundColor: "whitesmoke", borderRadius: 4 }}>
										<Box component="img" src={offer?.image} alt="Food" sx={{ width: 150, maxWidth: { xs: 150, md: 150 }, marginTop: -10 }} />
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

				<Container maxWidth={false} style={{ width: "100%", backgroundColor: "#111", margin: "6% 0% 0% 0%", padding: "6% 0% 6% 0%" }} >
					<Container maxWidth='xl'>
						<Grid container item spacing={4} sx={{ justifyContent: "space-between", alignItems: "center" }}>
							<Grid container item justifyContent="center" xs={12} md={7} >
								<Container maxWidth={false}>
									<Typography sx={{ fontFamily: "circular", fontSize: 13, py: 0.2, px: 2, backgroundColor: "#fc0330", borderRadius: 50, width: 45, color: "#fff" }}>
										Gratuit
									</Typography>
									<Typography variant={matchesQuery ? "h3" : "h2"} sx={{ fontFamily: "circular", color: "white", mt: 2 }}>
										Plus de 100 Burgers offertent gratuitement tous les jours.
									</Typography>
									<p style={{ fontFamily: "Josefin Sans, circular", fontSize: 15, color: "#fff", lineHeight: 2 }}>
										Votre présence sera toujours récompenser.
									</p>
									<Link smooth spy duration={400} offset={-90} to="menus">
										<Button className="voir-plus" variant="outlined" sx={{ borderRadius: 50, color: "#fff", borderColor: "#fff", fontFamily: "circular", textTransform: "none" }}>
											Voir plus
										</Button>
									</Link>
								</Container>
							</Grid>
							<Grid container item justifyContent={{ xs: "center", md: "end" }} xs={12} md={5} >
								<Box component="img" src={burger} alt="Food" sx={{ width: 500, maxWidth: { xs: 300, md: 500 } }} />
							</Grid>
						</Grid>
					</Container>
				</Container>
			</section>

			<section id="menus">
				<Container maxWidth={false} style={{ width: "100%", margin: "5% 0% 0% 0%" }} >
					<SectionTitle text={"Menus disponibles"} />
					<p style={{ textAlign: "center", color: "#222", fontSize: 16, fontFamily: "Josefin Sans, circular", fontWeight: "500" }}>
						Tous les menus listés ici sont disponibles, réserver une table dès maintenant pour les savourer.
					</p>
					<TabMenu />
				</Container>
			</section>

			<section id="footer">
				<Footer />
			</section>

			<ScrollToTop {...props}>
				<Link smooth spy duration={400} style={{ textDecoration: "none" }} to="hero">
					<Fab sx={{ backgroundColor: "#edbb28" }} size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</Link>
			</ScrollToTop>
		</>
	);
}


export default Home;
