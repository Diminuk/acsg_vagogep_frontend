import React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardTextField from '../KeyBoard';
import { updateSingleModeLength, updateSingleModeCutdly } from '../../store/actions/statusLedActions';
import { grey } from '@mui/material/colors';

const Cut = () => {

    const dispatch = useDispatch();

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
                dispatch(updateSingleModeLength({ single_cut_length: newValue }));
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
    const handleLengthPost = (event) => {
        if (Number(singleModeStatus['Single_Cut_Length']) > 0 && String(singleModeStatus['Single_Cut_Length']).length > 0) {
            fetch('http://localhost:8000/api/update/single', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Single_Cut_Length: singleModeStatus['Single_Cut_Length'] })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle successful response
                    console.log('Value posted successfully:', singleModeStatus['Single_Cut_Length']);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error posting value:', error);
                });
        }
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
                dispatch(updateSingleModeCutdly({ single_cut_delay: newValue }));
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

    const handleCutDelayPost = () => {
        if (Number(singleModeStatus['Single_Cut_Delay']) > 0 && String(singleModeStatus['Single_Cut_Delay']).length > 0) {
            fetch('http://localhost:8000/api/update/single', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Single_Cut_Delay: singleModeStatus['Single_Cut_Delay'] })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle successful response
                    console.log('Value posted successfully:', singleModeStatus['Single_Cut_Delay']);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error posting value:', error);
                });
        }
    };

    const singleModeStatus = useSelector(state => state.statusled.singleModeStatus);

    const handleKeyboardCutDelay = (key) => {
        if (key === "<") {
            if (String((singleModeStatus['Single_Cut_Delay'])).length === 1) {
                dispatch(updateSingleModeCutdly({ single_cut_delay: 0 }));
            }
            else {
                dispatch(updateSingleModeCutdly({ single_cut_delay: String(singleModeStatus['Single_Cut_Delay']).slice(0, -1) }));
            }
        }
        else if (key === "CLEAR") {
            dispatch(updateSingleModeCutdly({ single_cut_delay: 0 }));
        }
        else {
            if (String((singleModeStatus['Single_Cut_Delay'])) === "0") {
                dispatch(updateSingleModeCutdly({ single_cut_delay: key }));
            }
            else {
                dispatch(updateSingleModeCutdly({ single_cut_delay: singleModeStatus['Single_Cut_Delay'] + key }));
            }
        }
    }
    const handleKeyboardLength = (key) => {
        if (key === "<") {
            if (String((singleModeStatus['Single_Cut_Length'])).length === 1) {
                dispatch(updateSingleModeLength({ single_cut_length: 0 }));
            }
            else {
                dispatch(updateSingleModeLength({ single_cut_length: String(singleModeStatus['Single_Cut_Length']).slice(0, -1) }));
            }
        }
        else if (key === "CLEAR") {
            dispatch(updateSingleModeLength({ single_cut_length: 0 }));
        }
        else {
            if (String((singleModeStatus['Single_Cut_Length'])) === "0") {
                dispatch(updateSingleModeLength({ single_cut_length: key }));
            }
            else {
                dispatch(updateSingleModeLength({ single_cut_length: singleModeStatus['Single_Cut_Length'] + key }));
            }
        }
    }

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
                <strong>Cut</strong>
            </Typography>

            <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <KeyboardTextField
                    disabledBool={isProcessStarted}
                    //onChange={handleCutLength}
                    valueProp={singleModeStatus['Single_Cut_Length']}
                    inputadornment="Length"
                    handleChange={handleKeyboardLength}
                    left="35%"
                    top="40%"
                    sx={{
                        width: 150,
                        mr: 5
                    }}
                >
                </KeyboardTextField>

                <KeyboardTextField
                    disabledBool={isProcessStarted}
                    //onChange={handleCutDelay}
                    valueProp={singleModeStatus['Single_Cut_Delay']}
                    inputadornment="DLY"
                    handleChange={handleKeyboardCutDelay}
                    left="35%"
                    top="40%"
                    sx={{
                        width: 150,

                    }}
                >
                </KeyboardTextField>


            </Box>
        </Paper>
    );
};

export default Cut