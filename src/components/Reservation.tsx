import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import "dayjs/locale/fr";
import "../assets/scss/reservation-form.scss";
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


export default function Reservation() {
	const [value, setValue] = React.useState<Dayjs | null>(
		dayjs(new Date()),
	);

	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue);
	};

	const color = "white";

	return (
		<>
			<Typography sx={{ color: "white", fontSize: 14, fontWeight: "500", fontFamily: "circular", mt: 2 }}>
				Réserver dès maintenant une table.
			</Typography>
			<LocalizationProvider adapterLocale="fr" dateAdapter={AdapterDayjs}>
				<Stack direction="column" marginTop={3} spacing={3}>
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
				</Stack>
				<Stack direction="row" marginTop={3} spacing={1.2}>
					<Input
						label="Nombre"
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
			<Fab variant="extended" sx={{ boxShadow: "none", height: 35, borderRadius: 0.5, fontFamily: "circular", textTransform: "capitalize", marginTop: 2 }}>
				<EditIcon sx={{ mr: 1, fontSize: 15 }} />
				Réserver
			</Fab>
		</>
	);
};