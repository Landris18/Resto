import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import "dayjs/locale/fr";
import "../assets/scss/date-time-picker.scss";
import { styled } from '@mui/material';


const Input = styled(TextField)(({ theme }) => ({
	"& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
		display: "none",
	},
	"& input[type=number]": {
		MozAppearance: "textfield",
	},
}));


export default function MaterialUIPickers() {
	const [value, setValue] = React.useState<Dayjs | null>(
		dayjs(new Date()),
	);

	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue);
	};

	const color = "white";

	return (
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
				<Input
					label="Nombre de personne"
					type="number"
					sx={{
						svg: { color },
						input: { color },
						label: { color }
					}}
				/>
			</Stack>
		</LocalizationProvider>
	);
};
