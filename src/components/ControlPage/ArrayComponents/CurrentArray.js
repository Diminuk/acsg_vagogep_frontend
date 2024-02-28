//  '#ffe0b2'
import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import ArrayElement from './ArrayElement';
import { SvgIcon } from '@mui/material';

const CurrentArray = () => {

    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted']);

    const elementArray = [
        { number: 3, length: 100, cutDelay: 200, speed: 300, acc: 100, dec: 200, infPercent: 100, infDelay: 2000, count: 2, ph: 'PH1' },
        { number: 1, length: 150, cutDelay: 250, speed: 320, acc: 120, dec: 220, infPercent: 110, infDelay: 2100, count: 3, ph: 'PH2' },
        { number: 2, length: 120, cutDelay: 220, speed: 310, acc: 110, dec: 210, infPercent: 120, infDelay: 2200, count: 6, ph: 'PH3' },
        { number: 4, length: 120, cutDelay: 220, speed: 310, acc: 110, dec: 210, infPercent: 120, infDelay: 2200, count: 6, ph: 'PH3' },
        { number: 5, length: 120, cutDelay: 220, speed: 310, acc: 110, dec: 210, infPercent: 120, infDelay: 2200, count: 6, ph: 'PH3' }
    ];

    const arrayName = "Test";

    elementArray.sort((a, b) => a.number - b.number);

    return (
        <Paper elevation={3}
            sx={{
                backgroundColor: "#ffe0b2",
                width: 400,
                height: 500,
                marginTop: 2
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="h3" sx={{ mr: 1, ml: 1, maxWidth: 200 }}>
                    Name: {arrayName}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, m: 1 }}>
                    <Button
                        disabled={isProcessStarted}
                        variant='contained' color='secondary' sx={{ height: 40, width: 40 }}>
                        <SvgIcon component="svg" viewBox="0 0 15 15" sx={{ fontSize: 30 }}>
                            <path d="M9.85355 0.146447C9.65829 -0.0488155 9.34171 -0.0488155 9.14645 0.146447L6.50002 2.79288L12.2071 8.49998L14.8536 5.85355C15.0488 5.65829 15.0488 5.34171 14.8536 5.14645L9.85355 0.146447Z" fill="white" /> <path d="M0 9.29289L5.79291 3.49998L11.5 9.20709L5.70711 15H0.5C0.223858 15 0 14.7761 0 14.5V9.29289Z" fill="white" /> <path d="M8 15H15V14H8V15Z" fill="white" />
                        </SvgIcon>
                    </Button>
                    <Button
                        disabled={isProcessStarted}
                        variant='contained' color='error' sx={{ height: 40, width: 40 }}>
                        <SvgIcon component="svg" viewBox="0 0 24 24" sx={{ fontSize: 30 }}>
                            <path fill='none' d="M0 0h24v24H0z" /> <path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z" />
                        </SvgIcon>
                    </Button>
                </Box>
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
                {elementArray.map((element, index) => (
                    <ArrayElement key={index} {...element} />
                ))}
            </Box>
        </Paper>
    );
};

export default CurrentArray