import React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { InputLabel, TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import { updateSIngleModeCount, updateSingleModeBatch, updateSingleModeBatchCurrent, updateSingleModeTotalCurrent } from '../../store/actions/statusLedActions';
import KeyboardTextField from '../KeyBoard';
import { grey, red } from '@mui/material/colors';

const SessionDisplay = () => {

    const dispatch = useDispatch();

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
                dispatch(updateSIngleModeCount({ single_count: newValue }));
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
                dispatch(updateSingleModeBatch({ single_batch: newValue }));
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
                dispatch(updateSingleModeTotalCurrent({ single_total_current: 1 }));
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
                dispatch(updateSingleModeBatchCurrent({ single_batch_current: 1 }));
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
    const singleCurrentBatch = useSelector(state => state.statusled.singleStatus["singleCurrentBatch"])
    const singleCurrentCount = useSelector(state => state.statusled.singleStatus["singleCurrentCount"])

    const handleKeyboardCount = (key) => {
        if (key === "<") {
            if (String((singleModeStatus['Single_Count'])).length === 1) {
                dispatch(updateSIngleModeCount({ single_count: 0 }));
            }
            else {
                dispatch(updateSIngleModeCount({ single_count: String(singleModeStatus['Single_Count']).slice(0, -1) }));
            }
        }
        else if (key === "CLEAR") {
            dispatch(updateSIngleModeCount({ single_count: 0 }));
        }
        else {
            if (String((singleModeStatus['Single_Count'])) === "0") {
                dispatch(updateSIngleModeCount({ single_count: key }));
            }
            else {
                dispatch(updateSIngleModeCount({ single_count: singleModeStatus['Single_Count'] + key }));
            }
        }
    }
    const handleKeyboardBatch = (key) => {
        if (key === "<") {
            if (String((singleModeStatus['Single_Batch'])).length === 1) {
                dispatch(updateSingleModeBatch({ single_batch: 0 }));
            }
            else {
                dispatch(updateSingleModeBatch({ single_batch: String(singleModeStatus['Single_Batch']).slice(0, -1) }));
            }
        }
        else if (key === "CLEAR") {
            dispatch(updateSingleModeBatch({ single_batch: 0 }));
        }
        else {
            if (String((singleModeStatus['Single_Batch'])) === "0") {
                dispatch(updateSingleModeBatch({ single_batch: key }));
            }
            else {
                dispatch(updateSingleModeBatch({ single_batch: singleModeStatus['Single_Batch'] + key }));
            }
        }
    }

    return (
        <Paper elevation={8}
            square={false}
            sx={{
                background: grey[200],
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

                <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 'bold', mr: 2 }} >
                        Count
                    </Typography>
                    <KeyboardTextField
                        disabledBool={isProcessStarted}
                        //onChange={handleCount}
                        valueProp={singleModeStatus['Single_Count']}
                        inputadornment="Total"
                        handleChange={handleKeyboardCount}
                        left="35%"
                        top="40%"
                        sx={{
                            width: 120,
                            mr: 2
                        }}
                    >
                    </KeyboardTextField>
                    <TextField
                        value={singleCurrentCount - 1}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Done</InputAdornment>,
                        }} disabled size="small"
                        sx={{ width: 115, alignSelf: 'strech', mr: 2 }}>
                    </TextField>
                    <Button
                        disabled={isProcessStarted}
                        onClick={handleZeroTotal}
                        variant='contained'
                        sx={{
                            bgcolor: red[900],
                            '&:hover': { backgroundColor: red[900] }
                        }}
                    >
                        Zero
                    </Button>
                </Box>

                <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 'bold', mr: 2 }} >
                        Batch
                    </Typography>
                    <KeyboardTextField
                        disabledBool={isProcessStarted}
                        //onChange={handleBatch}
                        valueProp={singleModeStatus['Single_Batch']}
                        inputadornment="Batch"
                        handleChange={handleKeyboardBatch}
                        left="35%"
                        top="40%"
                        sx={{
                            width: 120,
                            mr: 2
                        }}

                    >
                    </KeyboardTextField>
                    <TextField
                        value={singleCurrentBatch - 1}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Done</InputAdornment>,
                        }} disabled size="small" sx={{ width: 115, alignSelf: 'strech', mr: 2 }}>
                    </TextField>
                    <Button
                        disabled={isProcessStarted}
                        onClick={handleZeroBatch}
                        variant='contained'
                        sx={{
                            bgcolor: red[900],
                            '&:hover': { backgroundColor: red[900] }
                        }}>
                        Zero
                    </Button>
                </Box>

            </Grid>
        </Paper>
    );
};

export default SessionDisplay