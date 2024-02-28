import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { Slider, TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';

const ArrayElement = (props) => {
    const { length, cutDelay, number, speed, acc, dec, infPercent, infDelay, count, ph } = props;
    return (
        <Paper sx={{ backgroundColor: '#ffcc80', width: 380 }} elevation={8}>
            <Typography variant="h6" component="h2" sx={{ m: 1 }}>
                Number: {number}
            </Typography>
            <Box flexDirection={'column'} noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 80, display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <Box sx={{ backgroundColor: "", width: 400, height: 30, display: 'flex', justifyContent: 'left', gap: 3, alignItems: "center", marginLeft: 3 }}>
                    <Typography variant="body" sx={{ width: 110 }}>
                        Length: {length}
                    </Typography>
                    <Typography variant="body" sx={{ width: 110 }}>
                        Cut delay: {cutDelay}
                    </Typography>
                    <Typography variant="body" >
                        Count: {count}
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: "", width: 400, height: 30, display: 'flex', justifyContent: 'left', gap: 3, alignItems: "center", marginLeft: 3 }}>
                    <Typography variant="body" sx={{ width: 110 }}>
                        Speed: {speed}
                    </Typography>
                    <Typography variant="body" sx={{ width: 110 }}>
                        Acc: {acc}
                    </Typography>
                    <Typography variant="body" >
                        Dec: {dec}
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: "", width: 400, height: 30, display: 'flex', justifyContent: 'left', gap: 3, alignItems: "center", marginLeft: 3 }}>
                    <Typography variant="body" sx={{ width: 110 }}>
                        INF %: {infPercent}
                    </Typography>
                    <Typography variant="body" sx={{ width: 110 }}>
                        INF DLY: {infDelay}
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: "", width: 400, height: 30, display: 'flex', justifyContent: 'left', gap: 3, alignItems: "center", marginBottom: 2, marginLeft: 3 }}>
                    <Typography variant="body" sx={{ width: 110 }}>
                        PH:
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default ArrayElement;