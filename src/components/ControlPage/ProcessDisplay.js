import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
const ProcessDisplay = () => {


    const steps = [
        'Infra',
        'Load',
        'Mill',
        'Cut',
    ];

    return (
        <Paper elevation={8}
            square={false}
            sx={{
                background: "lightblue",
                width: 800,
                height: 270,
                marginLeft: 1,
                marginTop: 3,
                p: 1
            }}>

            <Typography variant="h6" component="h2" sx={{

            }}>
                <strong>Process Status</strong>
            </Typography>

            <Grid container>
                <Grid item xs={4}>
                    <Paper elevation={5} sx={{ m: 1 }}>
                        <Box flexDirection={"column"} sx={{
                            backgroundColor: "red",
                            display: 'flex'

                        }}>
                            <Typography variant="h6" component="h4" >
                                Process
                            </Typography>
                            <Typography variant="body" >
                                Type:
                            </Typography>
                            <Typography variant="body" >
                                Current:
                            </Typography>
                            <Typography variant="body" >
                                Length used:
                            </Typography>
                            <Typography variant="body" >
                                Good | Bad:
                            </Typography>
                            <Typography variant="body" >
                                Estimated time:
                            </Typography>
                            <Typography variant="h6" component="h4" >
                                Session
                            </Typography>
                            <Typography variant="body" >
                                Uptime:
                            </Typography>
                            <Typography variant="body" >
                                Total length:
                            </Typography>
                            <Typography variant="body" >
                                Good | Bad:
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Box flexDirection={"column"}
                        sx={{
                            backgroundColor: "blue",
                            width: 525,
                            height: 230,
                            m: 1
                        }}>
                        <Typography variant="body" >
                            PH for svg image
                        </Typography>

                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ProcessDisplay