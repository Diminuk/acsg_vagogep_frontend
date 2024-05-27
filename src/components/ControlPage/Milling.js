import React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import { updateSingleModeMill } from '../../store/actions/statusLedActions';
import { grey } from '@mui/material/colors';
import KeyboardTextField from '../KeyBoard';

const Milling = () => {

    const dispatch = useDispatch();

    const handleMillingParameter = (event) => {
        const newValue = event.target.value;

        fetch('http://localhost:8000/api/update/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Single_Milling_Placeholder: newValue })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                dispatch(updateSingleModeMill({ single_milling_placeholder: newValue }));
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

    const handleKeyboardMilling = (key) => {
        if (key === "<") {
            if (String((singleModeStatus['Single_Milling_Placeholder'])).length === 1) {
                dispatch(updateSingleModeMill({ single_milling_placeholder: 0 }));
            }
            else {
                dispatch(updateSingleModeMill({ single_milling_placeholder: String((singleModeStatus['Single_Milling_Placeholder'])).slice(0, -1) }));
            }
        }
        else if (key === "CLEAR") {
            dispatch(updateSingleModeMill({ single_milling_placeholder: 0 }));
        }
        else {
            if (String((singleModeStatus['Single_Milling_Placeholder'])) === "0") {
                dispatch(updateSingleModeMill({ single_milling_placeholder: key }));
            }
            else {
                dispatch(updateSingleModeMill({ single_milling_placeholder: singleModeStatus['Single_Milling_Placeholder'] + key }));
            }
        }
    }

    const isProcessStarted = useSelector(state => state.statusled.processStatus["IsProcessStarted"]);
    const singleModeStatus = useSelector(state => state.statusled.singleModeStatus);

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
                <strong>Milling</strong>
            </Typography>

            <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <KeyboardTextField
                    disabledBool={isProcessStarted}
                    handleChange={handleKeyboardMilling}
                    valueProp={singleModeStatus['Single_Milling_Placeholder']}
                    left="35%"
                    top="40%"
                    sx={{
                        width: 120,
                        mr: 2
                    }}
                >
                </KeyboardTextField>
            </Box>


        </Paper>
    );
};

export default Milling