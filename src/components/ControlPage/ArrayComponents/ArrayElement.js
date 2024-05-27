import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { Slider, TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import { grey, red } from '@mui/material/colors';

const ArrayElement = (props) => {
    const params = useSelector(state => state.parameter);
    const { length, cutDelay, number, speed, acc, dec, infPercent, infDelay, count, ph } = props;
    return (
        <Paper sx={{ backgroundColor: grey[800], width: 370, borderRadius: 3 }} >
            <Typography variant="h6" component="h2" sx={{ color: "white", m: 1 }}>
                Number: {number}
            </Typography>
            <Box flexDirection={'column'} noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 80, display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <Box sx={{ backgroundColor: "", width: 400, height: 30, display: 'flex', justifyContent: 'left', gap: 3, alignItems: "center", marginLeft: 3 }}>
                    <Typography variant="body" sx={{ color: "white", width: 110 }}>
                        Length: {Number(length)}
                    </Typography>
                    <Typography variant="body" sx={{ color: "white", width: 110 }}>
                        Cut delay: {Number(cutDelay)}
                    </Typography>
                    <Typography variant="body" sx={{ color: "white", }} >
                        Count: {Number(count)}
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: "", width: 400, height: 30, display: 'flex', justifyContent: 'left', gap: 3, alignItems: "center", marginLeft: 3 }}>
                    <Typography variant="body" sx={{ color: "white", width: 110 }}>
                        Speed: {params.Speed[speed]}
                    </Typography>
                    <Typography variant="body" sx={{ color: "white", width: 110 }}>
                        Acc: {params.Acceleration[acc]}
                    </Typography>
                    <Typography variant="body" sx={{ color: "white", }}>
                        Dec: {params.Deceleration[dec]}
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: "", width: 400, height: 30, display: 'flex', justifyContent: 'left', gap: 3, alignItems: "center", marginLeft: 3 }}>
                    <Typography variant="body" sx={{ color: "white", width: 110 }}>
                        INF %: {Number(infPercent)}
                    </Typography>
                    <Typography variant="body" sx={{ color: "white", width: 110 }}>
                        INF DLY: {Number(infDelay)}
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: "", width: 400, height: 30, display: 'flex', justifyContent: 'left', gap: 3, alignItems: "center", marginBottom: 2, marginLeft: 3 }}>
                    <Typography variant="body" sx={{ color: "white", width: 110 }}>
                        PH:
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default ArrayElement;