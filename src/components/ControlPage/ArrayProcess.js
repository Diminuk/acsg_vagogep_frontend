//  '#ffe0b2'
import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import ArrayButtons from './ArrayComponents/ArrayButtons';
import CurrentArray from './ArrayComponents/CurrentArray';
import { grey, red } from '@mui/material/colors';

const ArrayProcess = ({ width, height }) => {
    return (
        <Paper elevation={8}
            square={false}
            sx={{
                bgcolor: grey[600],
                width: width ? width : 400,
                height: height ? height : 630,
                marginLeft: 1,
                marginTop: 1,
                p: 1
            }}>

            <Typography
                variant="h6"
                component="h2"
                fontWeight={"bold"}
                color={grey[0]}
                align='center'
                sx={{
                    marginBottom: 2,
                    color: "white"
                }}>
                <strong>ArrayProcess</strong>
            </Typography>

            <ArrayButtons />


            <CurrentArray
                height={height - 110}
            >

            </CurrentArray>




        </Paper>
    );
};

export default ArrayProcess