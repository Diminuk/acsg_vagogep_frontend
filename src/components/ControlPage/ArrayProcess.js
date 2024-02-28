//  '#ffe0b2'
import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import ArrayButtons from './ArrayComponents/ArrayButtons';
import CurrentArray from './ArrayComponents/CurrentArray';

const ArrayProcess = () => {
    return (
        <Paper elevation={8}
            square={false}
            sx={{
                background: "#ffe0b2",
                width: 400,
                height: 630,
                marginLeft: 1,
                marginTop: 1,
                p: 1
            }}>

            <Typography variant="h6" component="h2" sx={{
                marginBottom: 2
            }}>
                <strong>ArrayProcess</strong>
            </Typography>

            <ArrayButtons />


            <CurrentArray>

            </CurrentArray>




        </Paper>
    );
};

export default ArrayProcess