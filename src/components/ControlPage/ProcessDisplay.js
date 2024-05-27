import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { grey, red } from '@mui/material/colors';




const ProcessDisplay = () => {

    const ProcessStatus = useSelector(state => state.statusled.processStatus['ProcessStatus']);
    const singleStatus = useSelector(state => state.statusled.singleStatus)
    const arrayStatus = useSelector(state => state.statusled.arrayStatus)

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
                background: grey[700],
                width: 800,
                height: 270,
                marginLeft: 1,
                marginTop: 3,
                p: 1
            }}>

            <Typography
                variant="h6"
                component="h2"
                fontWeight={"bold"}
                sx={{
                    color: "white"
                }}>
                Process Status
            </Typography>

            <Grid container>
                <Grid item xs={3}>
                    <Paper elevation={5}
                        sx={{
                            m: 1,
                            backgroundColor: grey[800],
                            p: 1,
                        }}>
                        <Box flexDirection={"column"} sx={{

                            display: 'flex'

                        }}>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="h6" component="h4"
                                align='center' >
                                Single
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Count: {singleStatus['singleCurrentCount']}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Batch: {singleStatus['singleCurrentBatch']}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Rem. length: {singleStatus["singleRemainingLength"]}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Good | Bad: {singleStatus["singleProcessGood"]} | {singleStatus["singleProcessBad"]}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                    mb: 1
                                }}
                                variant="body" >
                                Est. rem. time: {singleStatus["singleTotalRemainingTime"]}
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Uptime: {singleStatus["singleUptime"]}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Total length: {singleStatus["singleTotalLength"]}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                T. Good | Bad: {singleStatus["singleTotalGood"]} | {singleStatus["singleTotalBad"]}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5}
                        sx={{
                            m: 1,
                            backgroundColor: grey[800],
                            p: 1,
                        }}>
                        <Box flexDirection={"column"} sx={{

                            display: 'flex'

                        }}>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="h6" component="h4"
                                align='center'
                            >
                                Array
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Number: {arrayStatus["arrayCurrentNumber"]}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Count: {arrayStatus["arrayCurrentCount"]}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Rem. length: {arrayStatus["arrayProcessRemainingLength"]}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Good | Bad: {arrayStatus["arrayProcessGood"]} | {arrayStatus["arrayProcessBad"]}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                    mb: 1
                                }}
                                variant="body" >
                                Est. rem. time: {arrayStatus["arrayProcessRemainingTime"]}
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Uptime: {arrayStatus["arrayUptime"]}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Total length: {Number(arrayStatus["arrayUsedLengthGood"]) + Number(arrayStatus["arrayUsedLengthBad"])}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                T. Good | Bad: {arrayStatus["arrayTotalGood"]} | {arrayStatus["arrayTotalBad"]}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5}
                        sx={{
                            m: 1,
                            backgroundColor: grey[800],
                            p: 1,
                        }}>
                        <Box flexDirection={"column"} sx={{

                            display: 'flex'

                        }}>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="h6" component="h4"
                                align='center'
                            >
                                Current session
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Current: PH
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Length used: PH
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Good | Bad: PH
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Estimated time: PH
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Uptime: PH
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Total length: PH
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                variant="body" >
                                Good | Bad: PH
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Box flexDirection={"column"}
                        sx={{
                            m: 1
                        }}>
                        <Typography
                            sx={{
                                color: 'white'
                            }}
                            variant="h6"
                            component="h4"
                            align='center'
                            fontWeight={"bold"}
                            letterSpacing={2}
                        >
                            STATUS
                        </Typography>
                        <Typography>
                            {ProcessStatus}
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ProcessDisplay