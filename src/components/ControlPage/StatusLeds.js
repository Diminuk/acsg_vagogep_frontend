import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { TextField, Typography, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { SvgIcon } from '@mui/material';
import { grey, red, green } from '@mui/material/colors';

const StatusDisplay = () => {

    const sensorStatus = useSelector(state => state.statusled.sensorStatus);
    const nullCut = useSelector(state => state.process.nullCut);

    return (
        <Paper elevation={8}
            square={false}
            sx={{
                background: grey[500],
                width: 800,
                height: 150,
                marginLeft: 1,
                marginTop: 3,
                p: 1
            }}>

            <Typography variant="h6" component="h2" sx={{
                marginBottom: 2
            }}>
                <strong>Status Display</strong>
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 5 }}>

                <SvgIcon component="svg" viewBox="0 -30 256 256" sx={{ height: 100, width: 100 }}>
                    <ellipse stroke={!!nullCut ? green[900] : red[900]} cx="128" cy="128" rx="32" ry="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
                    <rect stroke={!!nullCut ? green[900] : red[900]} x="40" y="40" width="176" height="176" rx="8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
                </SvgIcon>

                <SvgIcon component="svg" width="64" height="64" viewBox="0 -1 17 17" sx={{ height: 100, width: 100 }}>
                    <path color={sensorStatus['Door'] ? green[900] : red[900]} d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </SvgIcon>

                <SvgIcon component="svg" viewBox="20 8 50 50" sx={{ height: 130, width: 150 }}>
                    <rect
                        //color={!sensorStatus['Material_End'] && !sensorStatus['Material_Begin'] ? red[900] : ''}
                        width="34.696262"
                        height="13.18458"
                        x="28.364193"
                        y="14.65917"
                        ry="6.5922899" />
                    <circle
                        color='gray'
                        cx="34.913116"
                        cy="21.208088"
                        r="3.678488" />
                    <circle
                        color='gray'
                        cx="56.608971"
                        cy="21.208088"
                        r="3.678488" />
                    <rect
                        width="47.620613"
                        height="4.0768127"
                        x="22.032127"
                        y="28.19071"
                        ry="2.0384064"
                        rx="0" />
                    <rect
                        width="34.696262"
                        height="13.18458"
                        x="28.364193"
                        y="32.650852"
                        ry="6.5922899" />
                    <circle
                        color='gray'
                        cx="34.913116"
                        cy="39.199772"
                        r="3.678488" />
                    <circle
                        color='gray'
                        cx="56.608971"
                        cy="39.199772"
                        r="3.678488" />
                    <path
                        color={sensorStatus['Material_Begin'] ? green[900] : red[900]}
                        d="m 18.093796,26.159912 4.581141,7.93477 4.581141,7.93477 -9.162282,-10e-7 -9.1622831,0 4.5811411,-7.934769 z"
                        transform="matrix(0.58499807,0,0,0.58499807,11.467604,17.874783)" />
                    <path
                        color={sensorStatus['Material_End'] ? green[900] : red[900]}
                        d="m 18.093796,26.159912 4.581141,7.93477 4.581141,7.93477 -9.162282,-10e-7 -9.1622831,0 4.5811411,-7.934769 z"
                        transform="matrix(0.58499807,0,0,0.58499807,58.563467,17.874783)" />
                    <path
                        color={sensorStatus['Material_Begin'] ? green[900] : red[900]}
                        d="m 18.093796,26.159912 4.581141,7.93477 4.581141,7.93477 -9.162282,-10e-7 -9.1622831,0 4.5811411,-7.934769 z"
                        transform="matrix(-0.58499807,0,0,-0.58499807,32.637275,42.33914)" />
                    <path
                        color={sensorStatus['Material_End'] ? green[900] : red[900]}
                        d="m 18.093796,26.159912 4.581141,7.93477 4.581141,7.93477 -9.162282,-10e-7 -9.1622831,0 4.5811411,-7.934769 z"
                        transform="matrix(-0.58499807,0,0,-0.58499807,79.733138,42.33914)" />
                </SvgIcon>

                <SvgIcon component="svg" viewBox="0 -4 100 100" sx={{ height: 100, width: 100 }}>
                    <path color={sensorStatus['Infra'] ? green[900] : red[900]} d="M85,35H15C9.477,35,5,39.477,5,45v20c0,5.523,4.477,10,10,10h25v12.5H25V95h50v-7.5H60V75h25c5.523,0,10-4.477,10-10V45   C95,39.477,90.523,35,85,35z M17.5,67.5H15c-1.378,0-2.5-1.122-2.5-2.5V45c0-1.379,1.122-2.5,2.5-2.5h2.5V67.5z M55,87.5H45V75h10   V87.5z M77.5,67.5h-55v-25h55V67.5z M87.5,65c0,1.378-1.122,2.5-2.5,2.5h-2.5v-25H85c1.378,0,2.5,1.121,2.5,2.5V65z" />
                    <path color={sensorStatus['Infra'] ? green[900] : red[900]} d="M67.5,7.5c0,1.378-1.122,2.5-2.5,2.5c-6.893,0-12.5,5.607-12.5,12.5V30h5v-7.5c0-4.136,3.364-7.5,7.5-7.5   s7.5-3.364,7.5-7.5V5h-5V7.5z" />
                    <path color={sensorStatus['Infra'] ? green[900] : red[900]} d="M62.5,27.5V30h5v-2.5c0-1.378,1.122-2.5,2.5-2.5c6.893,0,12.5-5.607,12.5-12.5V5h-5v7.5c0,4.136-3.364,7.5-7.5,7.5   S62.5,23.364,62.5,27.5z" />
                    <path color={sensorStatus['Infra'] ? green[900] : red[900]} d="M32.5,7.5c0,1.378-1.122,2.5-2.5,2.5c-6.893,0-12.5,5.607-12.5,12.5V30h5v-7.5c0-4.136,3.364-7.5,7.5-7.5   s7.5-3.364,7.5-7.5V5h-5V7.5z" />
                    <path color={sensorStatus['Infra'] ? green[900] : red[900]} d="M27.5,27.5V30h5v-2.5c0-1.378,1.122-2.5,2.5-2.5c6.893,0,12.5-5.607,12.5-12.5V5h-5v7.5c0,4.136-3.364,7.5-7.5,7.5   S27.5,23.364,27.5,27.5z" />
                    <rect color={sensorStatus['Infra'] ? green[900] : red[900]} x="27.5" y="57.5" width="45" height="5" />
                    <rect color={sensorStatus['Infra'] ? green[900] : red[900]} x="27.5" y="47.5" width="45" height="5" />
                </SvgIcon>

                <SvgIcon component="svg" viewBox="20 25 60 60" sx={{ height: 100, width: 100 }}>
                    <rect

                        width="8.2004795"
                        height="58.472988"
                        x="26.367212"
                        y="26.740696"
                        ry="2.0384064" />

                    <rect
                        width="8.2004795"
                        height="58.472988"
                        x="68.700584"
                        y="26.740696"
                        ry="2.0384064" />
                    {sensorStatus['Knife_Up'] && (
                        <>
                            <rect
                                color={sensorStatus['Knife_Up'] && sensorStatus['Knife_Down'] || !sensorStatus['Knife_Down'] && !sensorStatus['Knife_Up'] ? red[900] : ''}
                                width="30.022438"
                                height="7.7385235"
                                x="36.646721"
                                y="26.615129"
                                ry="1.1491499" />
                            <path
                                color={sensorStatus['Knife_Up'] && sensorStatus['Knife_Down'] || !sensorStatus['Knife_Down'] && !sensorStatus['Knife_Up'] ? red[900] : ''}
                                d="m 37.539599,36.658147 v 14.09978 l 24.894537,-14.09978 z"
                            />
                            <rect
                                color='white'
                                width="16.850716"
                                height="0.97148479"
                                x="9.8925114"
                                y="61.363178"
                                ry="0.12173479"
                                transform="rotate(-29.201388)" />
                        </>
                    )}
                    {sensorStatus['Knife_Down'] && (
                        <>
                            <rect
                                color={sensorStatus['Knife_Up'] && sensorStatus['Knife_Down'] || !sensorStatus['Knife_Down'] && !sensorStatus['Knife_Up'] ? red[900] : ''}
                                width="30.022438"
                                height="7.7385235"
                                x="36.646721"
                                y="59.95266"
                                ry="1.1491499" />
                            <path
                                color={sensorStatus['Knife_Up'] && sensorStatus['Knife_Down'] || !sensorStatus['Knife_Down'] && !sensorStatus['Knife_Up'] ? red[900] : ''}
                                d="m 37.539599,69.995668 v 14.09978 l 24.894537,-14.09978 z" />
                            <rect
                                color='white'
                                width="16.850716"
                                height="0.97148479"
                                x="-6.3722124"
                                y="90.463768"
                                ry="0.12173479"
                                transform="rotate(-29.201388)" />
                        </>
                    )}
                </SvgIcon>


                <SvgIcon component="svg" viewBox="0 1 32 40" sx={{ height: 140, width: 100 }}>
                    <path color={sensorStatus['Milling'] ? green[900] : red[900]} d="M29,24h-8c-0.5522461,0-1,0.4477539-1,1c0,1.1030273-0.8969727,2-2,2h-4c-1.1030273,0-2-0.8969727-2-2   c0-0.5522461-0.4477539-1-1-1H3c-0.5522461,0-1,0.4477539-1,1v4c0,0.5522461,0.4477539,1,1,1h26c0.5522461,0,1-0.4477539,1-1v-4   C30,24.4477539,29.5522461,24,29,24z" />
                    <path color={sensorStatus['Milling'] ? green[900] : red[900]} d="M19,9h-6c-0.5522461,0-1,0.4477539-1,1v2c0,0.5522461,0.4477539,1,1,1h6c0.5522461,0,1-0.4477539,1-1v-2   C20,9.4477539,19.5522461,9,19,9z" />
                    <path color={sensorStatus['Milling'] ? green[900] : red[900]} d="M12,23c-0.2558594,0-0.5117188-0.0976563-0.7070313-0.2929688l-1-1c-0.390625-0.390625-0.390625-1.0234375,0-1.4140625   s1.0234375-0.390625,1.4140625,0l1,1c0.390625,0.390625,0.390625,1.0234375,0,1.4140625C12.5117188,22.9023438,12.2558594,23,12,23   z" />
                    <path color={sensorStatus['Milling'] ? green[900] : red[900]} d="M12,19c-0.2558594,0-0.5117188-0.0976563-0.7070313-0.2929688l-1-1c-0.390625-0.390625-0.390625-1.0234375,0-1.4140625   s1.0234375-0.390625,1.4140625,0l1,1c0.390625,0.390625,0.390625,1.0234375,0,1.4140625C12.5117188,18.9023438,12.2558594,19,12,19   z" />
                    <path color={sensorStatus['Milling'] ? green[900] : red[900]} d="M20,23c-0.2558594,0-0.5117188-0.0976563-0.7070313-0.2929688c-0.390625-0.390625-0.390625-1.0234375,0-1.4140625l1-1   c0.390625-0.390625,1.0234375-0.390625,1.4140625,0s0.390625,1.0234375,0,1.4140625l-1,1   C20.5117188,22.9023438,20.2558594,23,20,23z" />
                    <path color={sensorStatus['Milling'] ? green[900] : red[900]} d="M20,19c-0.2558594,0-0.5117188-0.0976563-0.7070313-0.2929688c-0.390625-0.390625-0.390625-1.0234375,0-1.4140625l1-1   c0.390625-0.390625,1.0234375-0.390625,1.4140625,0s0.390625,1.0234375,0,1.4140625l-1,1   C20.5117188,18.9023438,20.2558594,19,20,19z" />
                    <polygon color={sensorStatus['Milling'] ? green[900] : red[900]} points="14,18 14,19.5999756 18,18 18,16.4000244  " />
                    <polygon color={sensorStatus['Milling'] ? green[900] : red[900]} points="18,21 18,19.4000244 14,21 14,22.5999756  " />
                    <polygon color={sensorStatus['Milling'] ? green[900] : red[900]} points="18,15 18,14 14,14 14,16.5999756  " />
                    <path color={sensorStatus['Milling'] ? green[900] : red[900]} d="M14,24c0,1.1045532,0.8954468,2,2,2c1.1046143,0,2-0.8954468,2-2v-1.5999756L14,24z" />
                    <rect color={sensorStatus['Milling'] ? green[900] : red[900]} x="13" y="6" width="6" height="2" />
                    <path color={sensorStatus['Milling'] ? green[900] : red[900]} d="M21,5H11c-0.5522852,0-1-0.4477153-1-1V2h12v2C22,4.5522847,21.5522842,5,21,5z" />
                </SvgIcon>
            </Box>




        </Paper >
    );
};

export default StatusDisplay