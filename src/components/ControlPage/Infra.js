import React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { Slider, TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import { updateSingleModeInfdly, updateSingleModeInfp } from '../../store/actions/statusLedActions';
import KeyboardTextField from '../KeyBoard';
import { grey, red } from '@mui/material/colors';

const Infra = () => {

    const dispatch = useDispatch();
    const singleModeStatus = useSelector(state => state.statusled.singleModeStatus);

    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted']);

    const handleSliderChange = (event, newValue) => {
        dispatch(updateSingleModeInfp({ single_infra_percentage: newValue }));
        /*fetch('http://localhost:8000/api/update/single', {
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
                dispatch(updateSingleModeInfp({ single_infra_percentage: newValue }));
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
                dispatch(updateSingleModeInfdly({ single_infra_delay: newValue }))
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

    const handleInfraDlyPost = (event) => {
        if (Number(singleModeStatus['Single_Infra_Delay']) > 0 && String(singleModeStatus['Single_Infra_Delay']).length > 0) {
            fetch('http://localhost:8000/api/update/single', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Single_Infra_Delay: singleModeStatus['Single_Infra_Delay'] })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    //dispatch(updateSingleModeInfdly({ single_infra_delay: newValue }))
                    return response.json();
                })
                .then(data => {
                    // Handle successful response
                    console.log('Value posted successfully:', singleModeStatus['Single_Infra_Delay']);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error posting value:', error);
                });
        }
    };

    const handleKeyboardDelay = (key) => {
        if (key === "<") {
            if (String((singleModeStatus['Single_Infra_Delay'])).length === 1) {
                dispatch(updateSingleModeInfdly({ single_infra_delay: 0 }));
            }
            else {
                dispatch(updateSingleModeInfdly({ single_infra_delay: String((singleModeStatus['Single_Infra_Delay'])).slice(0, -1) }));
            }
        }
        else if (key === "CLEAR") {
            dispatch(updateSingleModeInfdly({ single_infra_delay: 0 }));
        }
        else {
            if (String((singleModeStatus['Single_Infra_Delay'])) === "0") {
                dispatch(updateSingleModeInfdly({ single_infra_delay: key }));
            }
            else {
                dispatch(updateSingleModeInfdly({ single_infra_delay: singleModeStatus['Single_Infra_Delay'] + key }));
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
                <strong>Infra</strong>
            </Typography>
            <Box noValidate component="form" autoComplete="off" sx={{ backgroundColor: "", width: 400, height: 50, display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <KeyboardTextField
                    disabledBool={isProcessStarted}
                    valueProp={singleModeStatus['Single_Infra_Delay']}
                    //onChange={handleInfraDelayChange}
                    inputadornment={"DLY"}
                    handleChange={handleKeyboardDelay}
                    left="35%"
                    top="40%"
                    sx={{
                        width: 120,
                        mr: 7
                    }}
                >
                </KeyboardTextField>
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
                        sx={{
                            width: 200,
                            color: red[900]
                        }}
                    />
                </Box>
            </Box>
        </Paper>

    );
};

export default Infra