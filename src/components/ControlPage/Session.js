import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { InputLabel, TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';

const SessionDisplay = () => {

    const handleCount = (event) => {
        const newValue = event.target.value;

        fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Count: newValue })
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

    const handleBatch = (event) => {
        const newValue = event.target.value;

        fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Batch: newValue })
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

    const handleZeroTotal = (event) => {
        fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Total_Current: 1 })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Value posted successfully:', 1);
            })
            .catch(error => {
                // Handle error
                console.error('Error posting value:', error);
            });
    };

    const handleZeroBatch = (event) => {
        fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Batch_Current: 1 })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Value posted successfully:', 1);
            })
            .catch(error => {
                // Handle error
                console.error('Error posting value:', error);
            });
    };

    const singleModeStatus = useSelector(state => state.statusled.singleModeStatus);
    const isProcessStarted = useSelector(state => state.statusled.processStatus["IsProcessStarted"]);
    return (
        <Paper elevation={8}
            square={false}
            sx={{
                background: "lightblue",
                width: 400,
                height: 140,
                marginLeft: 1,
                p: 1,
                marginTop: 1
            }}>

            <Typography variant="h6" component="h2" sx={{

            }}>
                <strong>Quantity</strong>
            </Typography>

            <Grid container>

                <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', justifyContent: 'center', gap: 3, alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 'bold' }} >
                        Count
                    </Typography>
                    <TextField
                        disabled={isProcessStarted}
                        onChange={handleCount}
                        value={singleModeStatus['Single_Count']}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Total</InputAdornment>,
                        }} size="small" sx={{ width: 115, alignSelf: 'strech', }}>
                    </TextField>
                    <TextField
                        value={singleModeStatus['Single_Total_Current'] - 1}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Done</InputAdornment>,
                        }} disabled size="small" sx={{ width: 115, alignSelf: 'strech' }}>
                    </TextField>
                    <Button
                        disabled={isProcessStarted}
                        onClick={handleZeroTotal}
                        variant='contained'
                        color='error'>
                        Zero
                    </Button>
                </Box>

                <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', justifyContent: 'center', gap: 3, alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 'bold' }} >
                        Batch
                    </Typography>
                    <TextField
                        disabled={isProcessStarted}
                        onChange={handleBatch}
                        value={singleModeStatus['Single_Batch']}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Total</InputAdornment>,
                        }} size="small" sx={{ width: 115, alignSelf: 'strech', }}>
                    </TextField>
                    <TextField
                        value={singleModeStatus['Single_Batch_Current'] - 1}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Done</InputAdornment>,
                        }} disabled size="small" sx={{ width: 115, alignSelf: 'strech' }}>
                    </TextField>
                    <Button
                        disabled={isProcessStarted}
                        onClick={handleZeroBatch}
                        variant='contained'
                        color='error'>
                        Zero
                    </Button>
                </Box>

            </Grid>
        </Paper>
    );
};

export default SessionDisplay