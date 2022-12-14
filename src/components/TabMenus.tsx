import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import "../assets/scss/slider.scss";
import CardMenu from './CardMenu';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
};

const StyledTab = styled(Tab)({
    "&.Mui-selected": {
        color: "#222"
    }
});

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Stack direction="row" py={1} className="slider">
                    <div className="slide-track">
                        {
                            Array.from(Array(14)).map((menu, index) => (
                                <div key={index} className="slide">
                                    <CardMenu />
                                </div>
                            ))
                        }
                    </div>
                </Stack>
            )}
        </div>
    );
};

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};


export default function TabMenus() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', justifyContent: "center !important" }}>
            <Stack direction={"row"} sx={{ marginTop: 3, justifyContent: "center" }}>
                <Tabs
                    value={value}
                    variant="scrollable" scrollButtons allowScrollButtonsMobile
                    onChange={handleChange}
                    TabIndicatorProps={{ style: { backgroundColor: "#edbb28" } }}
                >
                    <StyledTab label="Starters" {...a11yProps(0)} sx={{ color: "#222", fontFamily: "circular", textTransform: "capitalize", fontSize: 20 }} />
                    <StyledTab label="Mains" {...a11yProps(1)} sx={{ color: "#222", fontFamily: "circular", textTransform: "capitalize", fontSize: 20 }} />
                    <StyledTab label="Pastries & drinks" {...a11yProps(2)} sx={{ color: "#222", fontFamily: "circular", textTransform: "capitalize", fontSize: 20 }} />
                </Tabs>
            </Stack>
            <TabPanel value={value} index={0} />
            <TabPanel value={value} index={1} />
            <TabPanel value={value} index={2} />
        </Box>
    );
};