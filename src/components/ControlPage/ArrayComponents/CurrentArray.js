//  '#ffe0b2'
import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import ArrayElement from './ArrayElement';
import { SvgIcon } from '@mui/material';
import EditArrayDialog from '../../../pages/ControlPage/EditArrayPopup';
import { useState } from 'react';
import { grey, red } from '@mui/material/colors';


const CurrentArray = ({ height }) => {

    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted']);
    const CurrentArray = useSelector(state => state.array)

    const { isAuthenticated, isAdmin } = useSelector(state => state.auth);

    const arrayName = CurrentArray.name;

    CurrentArray.elements.sort((a, b) => a.number - b.number);

    const [open, setOpen] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(2);

    const handleOpen = () => {
        resetData();
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }


    const [data, setData] = useState({
        name: CurrentArray.name,
        elements: CurrentArray.elements
    });
    const resetData = () => {
        setData(prevState => ({
            name: CurrentArray.name,
            elements: CurrentArray.elements
        }));
        setCurrentNumber(CurrentArray.elements.length + 1);
    }
    const handleEditArray = () => {
        return null;
    }



    return (
        <Paper elevation={3}
            sx={{
                bgcolor: grey[700],
                width: 400,
                height: height ? height : 500,
                marginTop: 2
            }}>

            <EditArrayDialog
                open={open}
                onClose={handleClose}
                onSubmit={handleEditArray}
                data={data}
                setData={setData}
                currentNumber={currentNumber}
                setCurrentNumber={setCurrentNumber}
            ></EditArrayDialog>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography fontWeight={"bold"} variant="h5" component="h3" sx={{ color: "white", mr: 1, ml: 1, maxWidth: isAdmin ? 200 : 400 }}>
                    Name: {arrayName}
                </Typography>
                {
                    isAdmin && (

                        <Box sx={{ display: 'flex', gap: 1, m: 1, mb: 2 }}>
                            <Button
                                onClick={handleOpen}
                                disabled={isProcessStarted || CurrentArray.elements.length === 0}
                                variant='contained'
                                sx={{
                                    height: 40,
                                    width: 40,
                                    bgcolor: grey[200],
                                    '&:hover': { backgroundColor: grey[200] }

                                }}>
                                <SvgIcon component="svg" viewBox="0 0 15 15" sx={{ fontSize: 30 }}>
                                    <path d="M9.85355 0.146447C9.65829 -0.0488155 9.34171 -0.0488155 9.14645 0.146447L6.50002 2.79288L12.2071 8.49998L14.8536 5.85355C15.0488 5.65829 15.0488 5.34171 14.8536 5.14645L9.85355 0.146447Z" fill={grey[900]} /> <path d="M0 9.29289L5.79291 3.49998L11.5 9.20709L5.70711 15H0.5C0.223858 15 0 14.7761 0 14.5V9.29289Z" fill={grey[900]} /> <path d="M8 15H15V14H8V15Z" fill={grey[900]} />
                                </SvgIcon>
                            </Button>
                            <Button
                                disabled={isProcessStarted || CurrentArray.elements.length === 0}
                                variant='contained'
                                sx={{
                                    height: 40,
                                    width: 40,
                                    bgcolor: red[900],
                                    '&:hover': { backgroundColor: red[900] }
                                }}>
                                <SvgIcon component="svg" viewBox="0 0 24 24" sx={{ fontSize: 30 }}>
                                    <path fill='none' d="M0 0h24v24H0z" /> <path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z" />
                                </SvgIcon>
                            </Button>
                        </Box>
                    )
                }
            </Box>

            <Box sx={{
                marginLeft: 1,
                maxHeight: 440, overflowX: 'hidden', overflowY: 'scroll',
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
                {CurrentArray.elements.map((element, index) => (
                    <ArrayElement key={index} {...element} />
                ))}
            </Box>
        </Paper>
    );
};

export default CurrentArray