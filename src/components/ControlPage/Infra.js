import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { Slider, TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';

const Infra = () => {

    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted']);

    const handleSliderChange = (event, newValue) => {
        fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Infra_Percentage: newValue })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Value posted successfully:', newValue);
            })
            .catch(error => {
                // Handle error
                console.error('Error posting value:', error);
            });
    };
    const handleInfraDelayChange = (event) => {
        const newValue = event.target.value;

        fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Infra_Delay: newValue })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Value posted successfully:', newValue);
            })
            .catch(error => {
                // Handle error
                console.error('Error posting value:', error);
            });
    };

    const singleModeStatus = useSelector(state => state.statusled.singleModeStatus);

    return (
        <Paper elevation={8}
            square={false}
            sx={{
                background: "lightblue",
                width: 400,
                height: 100,
                marginLeft: 1,
                marginTop: 1,
                p: 1
            }}>

            <Typography variant="h6" component="h2" sx={{

            }}>
                <strong>Infra</strong>
            </Typography>
            <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', justifyContent: 'center', gap: 3, alignItems: "center" }}>
                <TextField
                    disabled={isProcessStarted}
                    value={singleModeStatus['Single_Infra_Delay']}
                    onChange={handleInfraDelayChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">DLY</InputAdornment>,
                    }} size="small" sx={{ width: 140, alignSelf: 'strech', }}>
                </TextField>
                <Box flexDirection={'column'}>
                    <Typography gutterBottom>
                        Percentage: {singleModeStatus['Single_Infra_Percentage']}
                    </Typography>

                    <Slider
                        disabled={isProcessStarted}
                        aria-label="Temperature"
                        defaultValue={30}
                        valueLabelDisplay="auto"
                        value={singleModeStatus['Single_Infra_Percentage']}
                        onChange={handleSliderChange}
                        step={10}
                        marks
                        min={0}
                        max={100}
                        sx={{ width: 200 }}
                    />
                </Box>
            </Box>
        </Paper>

    );
};

export default Infra