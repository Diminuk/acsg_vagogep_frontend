import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import ControlButtons from '../../components/ControlPage/ControlButtons';
import SessionDisplay from '../../components/ControlPage/Session';
import ChangeMode from '../../components/ControlPage/ChangeMode';
import NavBar from '../../components/Header/Navbar';
import { Button, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Input } from '@mui/base/Input';
import { Color } from '@mui/material';
import { blue, grey, red } from '@mui/material/colors';
import KeyboardTextField from '../../components/KeyBoard';


const handleAccSubmit = () => {
    // TODO implement
    return null;
}

const handleSpdSubmit = () => {
    // TODO implement
    return null;
}




const ParameterSettingsPage = () => {

    const [spdArray, setSpdArray] = useState({
        1: 0,
        2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0
    })
    const [accArray, setAccArray] = useState({
        1: 0,
        2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0
    })

    const changeSpdArray = (value, id) => {
        setSpdArray({
            ...spdArray,
            [id]: value
        })
    }
    const changeAccArray = (value, id) => {
        setAccArray({
            ...accArray,
            [id]: value
        })
    }

    const SpeedParameters = useSelector(state => state.parameter.Speed);
    const AccelerationParameters = useSelector(state => state.parameter.Acceleration);

    const handleSpdArrayKeyboard = (key, id) => {
        console.log(key, id);
        if (key === "<") {
            changeSpdArray(String(spdArray[id]).slice(0, -1), id);
        }
        else if (key === "CLEAR") {
            changeSpdArray(0, id);
        }
        else {
            changeSpdArray(String(spdArray[id]) + key, id)
        }
    }
    const handleAccArrayKeyboard = (key, id) => {
        console.log(key, id);
        if (key === "<") {
            changeAccArray(String(accArray[id]).slice(0, -1), id);
        }
        else if (key === "CLEAR") {
            changeAccArray(0, id);
        }
        else {
            changeAccArray(String(accArray[id]) + key, id)
        }
    }

    return (
        <Grid container spacing={3}
            justifyContent="space-evenly"
            alignItems="stretch">
            <Grid item xs={12}>
                <NavBar />
            </Grid>
            <Grid item xs={6} sx={{

            }} >
                <Paper elevation={10} sx={{
                    m: 2,
                    justifyContent: 'center',
                    display: 'flex',
                    alignContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: grey[300]
                }} >
                    <Typography fontSize={20} fontWeight={'bold'}
                        sx={{
                            marginLeft: 1,
                            marginTop: 1
                        }}>
                        Change speed parameters
                    </Typography>

                    <TableContainer component={Paper} sx={{
                        backgroundColor: grey[400],
                        m: 2,
                        height: 500,
                        width: 550,
                        '&::-webkit-scrollbar': {
                            width: '15px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '5px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#555',
                        },
                        '&::-webkit-scrollbar-track:hover': {
                            backgroundColor: '#f4f4f4',
                        },
                    }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Speed param ID</TableCell>
                                <TableCell align="right">Value</TableCell>
                                <TableCell align="right">New value</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {Object.entries(SpeedParameters).map(([paramID, value]) => (
                                <TableRow key={paramID}>
                                    <TableCell align="center">{paramID}</TableCell>
                                    <TableCell align="right">{value}</TableCell>
                                    <TableCell align="right">
                                        <KeyboardTextField
                                            valueProp={spdArray[paramID]}
                                            handleChange={handleSpdArrayKeyboard}
                                            idProp={paramID}
                                            left="40%"
                                            top="40%"
                                            sx={{
                                                width: 220,
                                                mr: 2
                                            }}
                                        >
                                        </KeyboardTextField>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableContainer>
                    <Button variant='contained'
                        onClick={handleSpdSubmit}
                        sx={{
                            height: 70,
                            m: 2,
                            bgcolor: red[900],
                            '&:hover': { backgroundColor: red[900] }
                        }}>
                        <Typography fontSize={20} fontWeight={'bold'}
                            sx={{

                            }}>
                            Submit
                        </Typography>
                    </Button>
                </Paper>
            </Grid>


            <Grid item xs={6} >
                <Paper elevation={10} sx={{
                    m: 2,
                    justifyContent: 'center',
                    display: 'flex',
                    alignContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: grey[300]
                }} >
                    <Typography fontSize={20} fontWeight={'bold'}
                        sx={{
                            marginLeft: 1,
                            marginTop: 1
                        }}>
                        Change acceleration parameters
                    </Typography>

                    <TableContainer component={Paper} sx={{
                        backgroundColor: grey[400],
                        m: 2,
                        maxHeight: 500,
                        maxWidth: 550,
                        '&::-webkit-scrollbar': {
                            width: '15px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '5px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#555',
                        },
                        '&::-webkit-scrollbar-track:hover': {
                            backgroundColor: '#f4f4f4',
                        },
                    }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Acceleration param ID</TableCell>
                                <TableCell align="right">Value</TableCell>
                                <TableCell align="right">New value</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {Object.entries(AccelerationParameters).map(([paramID, value]) => (
                                <TableRow key={paramID}>
                                    <TableCell align="center">{paramID}</TableCell>
                                    <TableCell align="right">{value}</TableCell>
                                    <TableCell align="right">
                                        <KeyboardTextField
                                            valueProp={accArray[paramID]}
                                            handleChange={handleAccArrayKeyboard}
                                            idProp={paramID}
                                            left="40%"
                                            top="40%"
                                            sx={{
                                                width: 220,
                                                mr: 2
                                            }}
                                        >
                                        </KeyboardTextField>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableContainer>
                    <Button variant='contained'
                        onClick={handleAccSubmit}
                        sx={{
                            height: 70,
                            m: 2,
                            bgcolor: red[900],
                            '&:hover': { backgroundColor: red[900] }
                        }}>
                        <Typography fontSize={20} fontWeight={'bold'}
                            sx={{

                            }}>
                            Submit
                        </Typography>
                    </Button>
                </Paper>
            </Grid>



        </Grid >
    );
};

export default ParameterSettingsPage;
