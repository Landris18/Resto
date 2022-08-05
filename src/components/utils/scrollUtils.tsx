import React from 'react';
import { Box, Fade, useScrollTrigger } from '@mui/material';


export const ScrollToTop = (props: any) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
    return (
        <Fade in={trigger}>
            <Box
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}


export const ElevationScroll = (props: any) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        style: { backgroundColor: trigger ? "black" : "transparent", boxShadow: "none" }
    });
}