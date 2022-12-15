import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Stack, Fab } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import "../assets/scss/slider.scss";
import CardMenu from './CardMenu';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    stopped: boolean;
};

const StyledTab = styled(Tab)({
    "&.Mui-selected": {
        color: "#222"
    }
});

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, stopped, ...other } = props;

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
                    <div className={stopped ? "slide-track-stopped" : "slide-track"}>
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


export default function TabMenu() {
    const [value, setValue] = React.useState(0);
    const [isStop, setIsStop] = React.useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleStop = () => {
        const stopOrPlay = !isStop;
        setIsStop(stopOrPlay);
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
            <TabPanel value={value} index={0} stopped={isStop} />
            <TabPanel value={value} index={1} stopped={isStop} />
            <TabPanel value={value} index={2} stopped={isStop} />
            <Stack direction={"row"} sx={{ marginTop: 1.5, justifyContent: "center" }}>
                <Fab sx={{ backgroundColor: "#edbb28", boxShadow: "none" }} size="medium" aria-label="scroll back to top" onClick={() => { handleStop() }}>
                    {
                        isStop ? <PlayArrowIcon sx={{ fontSize: 25, color: "#fff" }} /> :
                            <PauseIcon sx={{ fontSize: 25, color: "#fff" }} />
                    }
                </Fab>
            </Stack>
        </Box>
    );
};