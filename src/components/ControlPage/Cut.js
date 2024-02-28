import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardTextField from '../KeyBoard';

const Cut = () => {

    const isProcessStarted = useSelector(state => state.statusled.processStatus["IsProcessStarted"]);

    const handleCutLength = (event) => {
        const newValue = event.target.value;

        fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Cut_Length: newValue })
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

    const handleCutDelay = (event) => {
        const newValue = event.target.value;

        fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Cut_Delay: newValue })
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
                <strong>Cut</strong>
            </Typography>

            <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', justifyContent: 'center', gap: 3, alignItems: "center" }}>
                <TextField
                    disabled={isProcessStarted}
                    onChange={handleCutLength}
                    value={singleModeStatus['Single_Cut_Length']}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Length</InputAdornment>,
                    }} size="small" sx={{ width: 140, alignSelf: 'strech', }}>
                </TextField>

                <TextField
                    disabled={isProcessStarted}
                    onChange={handleCutDelay}
                    value={singleModeStatus['Single_Cut_Delay']}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">DLY</InputAdornment>,
                    }} size="small" sx={{ width: 140, alignSelf: 'strech', }}>
                </TextField>

                <KeyboardTextField>

                </KeyboardTextField>

            </Box>
        </Paper>
    );
};

export default Cut