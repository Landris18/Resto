import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Container, Box, Button, Fab, Grid, Paper, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import EastIcon from "@mui/icons-material/East";
import SectionTitle from '../components/SectionTitle';
import promotion from '../assets/images/promotion.png';
import hero from '../assets/images/hero.png';
import burger from '../assets/images/burger.png';
import { getSpeciallOffers } from '../services';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-scroll';
import { ScrollToTop } from '../components/Scrolls';
import Footer from '../components/Footer';
import TabMenu from '../components/TabMenu';


const Home = (props: any) => {
	const theme = useTheme();
	const [offers, setOffers] = useState<any>([]);
	const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
	const notMatchesXs = useMediaQuery(theme.breakpoints.not('xs'));
	const matchesOnlyXs = useMediaQuery(theme.breakpoints.only('xs'));
	const matchesOnlySm = useMediaQuery(theme.breakpoints.only('sm'));


	useEffect(() => {
		const getOffers = async () => {
			const data = await getSpeciallOffers();
			if (matchesOnlyXs) {
				setOffers(data.slice(0, 4));
			} else if (matchesOnlySm) {
				setOffers(data.slice(0, 6));
			} else {
				setOffers(data);
			}
		}
		getOffers();
	}, [matchesOnlySm, matchesOnlyXs]);


	return (
		<>
			<Container id="hero" sx={{ height: "100vh" }} maxWidth={false}>
				<Navbar />
				<Container maxWidth={"lg"}>
					<Stack direction="column" gap={3} maxWidth={{ xs: "90%", md: "60%" }} justifyContent="end" sx={{ bgcolor: 'transparent' }}>
						<Typography variant="h2" sx={{ fontFamily: "circular", color: "white", fontSize: { xs: "1.7rem", sm: "3rem", md: "3rem" } }} mt={{ md: "32vh", sm: "32vh", xs: "27vh" }}>
							Les menus que vous ne trouvez pas sur notre carte, vous ne les trouverez nulle part ailleurs.
						</Typography>
						<Link smooth spy duration={400} style={{ textDecoration: "none" }} to="footer">
							<Button className='button-reservation' endIcon={<EditIcon />} variant="contained" disableElevation
								sx={{ py: 1.5, px: 3, color: 'white', textTransform: 'none', fontFamily: "circular", fontSize: "16px", backgroundColor: "#000", borderRadius: "50px" }}
							>
								Réserver une table
							</Button>
						</Link>
					</Stack>
				</Container>
			</Container>

			<section id="about">
				<Container maxWidth="lg" style={{ marginTop: "5%" }}>
					<SectionTitle text={"Parlons de Resto !"} />
					<Grid container my={5} sx={{ justifyContent: "center", alignItems: "center" }}>
						<Grid container item xs={12} md={4} justifyContent={{ xs: "center", md: "start" }}>
							<Stack style={{ textAlign: "center" }}>
								<Box className="rotated-image" component="img" alt="Food" src={hero} sx={{ width: 300, maxWidth: { xs: 250, md: 300 } }} />
							</Stack>
						</Grid>
						<Grid container item xs={12} md={8}>
							<Stack sx={{ textAlign: { xs: "center", md: "start" } }} alignItems={{ xs: "center", md: "start" }}>
								<Typography sx={{ display: { xs: "none", md: "block" }, color: "white", fontFamily: "circular", fontSize: 13, py: 0.5, px: 2, backgroundColor: "#edbb28", borderRadius: 50 }}>
									A propos de nous
								</Typography>
								<h2 style={{ color: "#e7b10c" }}>Le meilleur Fast-Food de l'océan indien, c'est ici.</h2>
								<p style={{ margin: 0, lineHeight: 1.7, color: "#000", fontSize: 16, fontFamily: "Josefin Sans, circular", fontWeight: "500" }}>
									Vous en avez assez des mêmes options de restauration habituelles ? Ne cherchez plus !
									Notre restaurant vous propose une expérience culinaire unique, avec une carte mêlant plats classiques et créations contemporaines.
									Nos chefs talentueux utilisent uniquement des ingrédients frais pour concocter des plats savoureux qui raviront vos papilles.
									Alors n’attendez plus, réservez dès aujourd’hui et offrez-vous un moment gourmand inoubliable.
								</p>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</section>

			<section id="offres">
				<Container maxWidth={"lg"} sx={{ mt: { xs: 10, md: 15 } }}>
					<h2 style={{ color: "#222", textAlign: notMatchesXs ? "start" : "center" }}>OFFRES SPECIALES</h2>
					<Grid container spacing={2} sx={{ justifyContent: "center", alignItems: "start", mt: { xs: 0, sm: 8, md: 5 } }}>
						<Grid container item xs={12} sm={4} md={4}>
							<Stack gap={3} justifyContent={notMatchesXs ? "start" : "center"} alignItems={notMatchesXs ? "start" : "center"}>
								<Box component="img" src={promotion} alt="Food" sx={{ width: 350, maxWidth: { xs: 250, md: 350 }, borderRadius: 3 }} />
								<Stack>
									<Stack direction={"column"} alignItems={notMatchesXs ? "start" : "center"} spacing={1} textAlign={notMatchesXs ? "start" : "center"} justifyContent={notMatchesXs ? "start" : "center"}>
										<h3 style={{ lineHeight: 1.5 }}>
											Burger Tasty King
										</h3>
										<Typography sx={{ whiteSpace: "nowrap", fontFamily: "circular", fontSize: 13, py: 0.2, px: 1, backgroundColor: "#edbb28", borderRadius: 50 }}>
											10 000 Ar
										</Typography>
									</Stack>
									<p style={{ textAlign: notMatchesXs ? "start" : "center", lineHeight: 1.5, fontFamily: "circular", fontSize: 15, color: "#111", marginBottom: 0 }}>
										Burger Tasty King est notre meilleur offre actuellement.
									</p>
								</Stack>
								<Link smooth spy duration={400} offset={-90} to="menus">
									<Button className='button-reservation' endIcon={<EastIcon />} variant="contained" disableElevation sx={{ color: 'white', fontFamily: "circular", fontSize: "12px", width: "190px", backgroundColor: "#000", borderRadius: "50px" }}>
										Voir les menus
									</Button>
								</Link>
							</Stack>
						</Grid>
						<Grid container item xs={12} sm={8} md={8} rowSpacing={8} mt={{ xs: 1, sm: -8, md: -8.5 }}>
							{offers.map((offer: any) => (
								<Grid className="paper" key={offer.id} item xs={12} sm={6} md={4} px={{ xs: 1, md: 0 }} pl={{ xs: 0, md: 2 }} py={1} sx={{ justifyContent: "center", alignItems: "center" }}>
									<Paper elevation={0} sx={{ textAlign: "center", justifyContent: "center", pb: 0, minHeight: 140, backgroundColor: "whitesmoke", borderRadius: 4 }}>
										<Box component="img" src={offer?.image} alt="Food" sx={{ width: 150, maxWidth: { xs: 150, md: 150 }, marginTop: -10 }} />
										<Container>
											{offer?.name}
										</Container>
										<Grid container item justifyContent="center">
											<Typography sx={{ fontFamily: "circular", mt: 1, fontSize: 13, py: 0.2, px: 1, backgroundColor: "#edbb28", borderRadius: 50 }}>
												{offer?.price} Ar
											</Typography>
										</Grid>
									</Paper>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Container>

				<Container maxWidth={false} sx={{ width: "100%", backgroundColor: "#111", py: 10, my: 15 }} >
					<Container maxWidth='lg'>
						<Grid container item spacing={4} sx={{ justifyContent: "space-between", alignItems: "center" }}>
							<Grid container item justifyContent="center" xs={12} sm={7} md={7} >
								<Stack alignItems={"start"}>
									<Typography sx={{ fontFamily: "circular", fontSize: 13, py: 0.2, px: 2, backgroundColor: "#fc0330", borderRadius: 50, color: "#fff" }}>
										GRATUIT
									</Typography>
									<Typography variant={matchesXs ? "h4" : "h3"} sx={{ fontFamily: "circular", color: "white", mt: 3 }}>
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
								</Stack>
							</Grid>
							<Grid container item justifyContent={{ xs: "center", md: "end" }} xs={12} sm={5} md={5} >
								<Box component="img" src={burger} alt="Food" sx={{ width: 500, maxWidth: { xs: 300, md: 500 } }} />
							</Grid>
						</Grid>
					</Container>
				</Container>
			</section>

			<section id="menus">
				<Container maxWidth={"lg"} style={{ width: "100%" }} >
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
};


export default Home;