import React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import { updateSingleModeSpd, updateSingleModeAcc, updateSingleModeDec } from '../../store/actions/statusLedActions';
import { grey } from '@mui/material/colors';


const Servo = () => {

    const dispatch = useDispatch();

    const singleModeStatus = useSelector(state => state.statusled.singleModeStatus);
    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted']);
    const speed = useSelector(state => state.parameter.Speed);

    const handleChangeSpeed = (event) => {
        const newValue = event.target.value;
        dispatch(updateSingleModeSpd({ single_speed: newValue }));

        /*fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Speed: newValue })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                dispatch(updateSingleModeSpd({ single_speed: newValue }));
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Value posted successfully:', newValue);
            })
            .catch(error => {
                // Handle error
                console.error('Error posting value:', error);
            });*/
    };
    const handleChangeAcceleration = (event) => {
        const newValue = event.target.value;
        dispatch(updateSingleModeAcc({ single_acceleration: newValue }));

        /*fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Acceleration: newValue })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                dispatch(updateSingleModeAcc({ single_acceleration: newValue }));
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Value posted successfully:', newValue);
            })
            .catch(error => {
                // Handle error
                console.error('Error posting value:', error);
            });*/
    };
    const handleChangeDeceleration = (event) => {
        const newValue = event.target.value;
        dispatch(updateSingleModeDec({ single_deceleration: newValue }));

        /*fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Deceleration: newValue })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                dispatch(updateSingleModeDec({ single_deceleration: newValue }));
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Value posted successfully:', newValue);
            })
            .catch(error => {
                // Handle error
                console.error('Error posting value:', error);
            });*/
    };

    return (
        <Paper elevation={8}
            square={false}
            sx={{
                background: grey[200],
                width: 400,
                height: 100,
                marginLeft: 1,
                marginTop: 1,
                p: 1
            }}>

            <Typography variant="h6" component="h2" sx={{

            }}>
                <strong>Servo</strong>
            </Typography>

            <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', justifyContent: 'center', gap: 3, alignItems: "center" }}>
                <TextField
                    disabled={isProcessStarted}
                    value={singleModeStatus['Single_Speed']}
                    onChange={handleChangeSpeed}
                    select InputProps={{
                        startAdornment: <InputAdornment position="start">S</InputAdornment>,
                    }} size="small" sx={{ width: 140, alignSelf: 'strech', }}>
                    {Object.entries(speed).map(([number, value]) => (
                        <MenuItem key={number} value={number}>
                            {value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    disabled={isProcessStarted}
                    value={singleModeStatus['Single_Acceleration']}
                    onChange={handleChangeAcceleration}
                    select
                    InputProps={{
                        startAdornment: <InputAdornment position="start">A</InputAdornment>,
                    }} size="small" sx={{ width: 140, alignSelf: 'strech', }}>
                    {Object.entries(speed).map(([number, value]) => (
                        <MenuItem key={number} value={number}>
                            {value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    disabled={isProcessStarted}
                    value={singleModeStatus['Single_Deceleration']}
                    onChange={handleChangeDeceleration}
                    select
                    InputProps={{
                        startAdornment: <InputAdornment position="start">D</InputAdornment>,
                    }} size="small" sx={{ width: 140, alignSelf: 'strech', }}>
                    {Object.entries(speed).map(([number, value]) => (
                        <MenuItem key={number} value={number}>
                            {value}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>


        </Paper>
    );
};

export default Servo