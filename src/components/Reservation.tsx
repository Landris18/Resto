import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import "dayjs/locale/fr";
import "../assets/scss/reservation.scss";
import { Fab, styled, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


const Input = styled(TextField)(({ theme }) => ({
	"& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
		display: "none",
	},
	"& input[type=number]": {
		MozAppearance: "textfield",
	},
}));


const theme = createTheme({
	palette: {
		primary: {
			main: '#edbb28'
		}
	}
});


export default function Reservation() {
	const [value, setValue] = React.useState<Dayjs | null>(
		dayjs(new Date()),
	);

	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue);
	};

	const color = "white";

	return (
		<ThemeProvider theme={theme}>
			<Typography sx={{ color: "white", fontSize: 14, fontWeight: "500", fontFamily: "circular", mt: 2 }}>
				Réserver dès maintenant une table.
			</Typography>
			<LocalizationProvider adapterLocale="fr" dateAdapter={AdapterDayjs}>
				<Stack gap={2} mt={4}>
					<DateTimePicker
						label="Date de reservation"
						value={value}
						onChange={handleChange}
						minDate={dayjs(new Date())}
						maxDate={dayjs('2023-01-31')}
						renderInput={(params: any) =>
							<TextField {...params}
								className="date-picker"
								sx={{
									svg: { color },
									input: { color },
									label: { color }
								}}
							/>
						}
					/>
					<Input
						label="Nombre de personne"
						type="number"
						sx={{
							svg: { color },
							input: { color },
							label: { color }
						}}
					/>
					<Input
						label="Téléphone"
						type="number"
						sx={{
							svg: { color },
							input: { color },
							label: { color }
						}}
					/>
				</Stack>
			</LocalizationProvider>
			<Fab variant="extended" sx={{ boxShadow: "none", height: 35, borderRadius: 0, fontFamily: "circular", textTransform: "capitalize", marginTop: 3 }}>
				<EditIcon sx={{ mr: 1, fontSize: 15 }} /> Réserver
			</Fab>
		</ThemeProvider>
	);
};