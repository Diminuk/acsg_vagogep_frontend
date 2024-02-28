import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useControlButtonFunctions } from '../../services/controlButtonFunctions';
import { Grid, SvgIcon } from '@mui/material';

const ControlButtons = () => {

    const {
        handleStart,
        handleStop,
        handlePause,
        handleCutDown,
        handleCutUp,
        handleFeed,
        handleUnload,
        handleLoad,
        handleStop1,
        // Include other button functions here...
    } = useControlButtonFunctions();

    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted']);
    const autoJump = useSelector(state => state.statusled.processStatus['AutoJump']);
    const IsProcessPaused = useSelector(state => state.statusled.processStatus['IsProcessPaused']);
    const currentBatch = useSelector(state => state.statusled.singleModeStatus['Single_Batch_Current']);
    const maxBatch = useSelector(state => state.statusled.singleModeStatus['Single_Batch']);

    const handleChangeAutoJump = (event) => {
        fetch('http://localhost:8000/api/update/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ AutoJump: "change" })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Value posted successfully:', "change");
            })
            .catch(error => {
                // Handle error
                console.error('Error posting value:', error);
            });
    };

    return (
        <Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 5 }}>

                <Button
                    variant="contained"
                    color={autoJump ? "primary" : "secondary"}
                    onClick={handleChangeAutoJump}
                    sx={{ width: 80, height: 80 }}
                >
                    {autoJump && (
                        <SvgIcon class="icon icon-tabler icon-tabler-letter-a" fill="none" component="svg" viewBox="0 0 24 24" width="80" height="80" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" sx={{ fontSize: 90 }}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" /> <line x1="7" y1="13" x2="17" y2="13" />
                        </SvgIcon>
                    )}
                    {!autoJump && (
                        <SvgIcon component="svg" class="icon icon-tabler icon-tabler-letter-m" width="80" height="80" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M6 20v-16l6 14l6 -14v16" />
                        </SvgIcon>
                    )}

                </Button>

                <Button onClick={handleStart} variant="contained" color="success"
                    disabled={isProcessStarted && (Number(currentBatch) - 1 !== Number(maxBatch))}
                    sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </SvgIcon>
                </Button>

                <Box sx={{ width: '20px' }} />

                <Button onClick={handlePause} variant="contained" color="secondary"
                    disabled={!isProcessStarted}
                    sx={{ width: 100, height: 80 }}>
                    {IsProcessPaused && (
                        <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </SvgIcon>)}
                    {!IsProcessPaused && (
                        <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
                        </SvgIcon>)}
                </Button>
                <Button onClick={handleStop1} variant="contained" color="error" disabled={!isProcessStarted}
                    sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                    </SvgIcon>
                </Button>

                <Box sx={{ width: '20px' }} />

                <Button onClick={handleStop} variant="contained" color="error" disabled={!isProcessStarted} sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 512 512" sx={{ fontSize: 60 }}>
                        <path d="M352.7 21.04l-194.4.41L21.04 159.3l.41 194.4L159.3 491l194.4-.4L491 352.7l-.4-194.4L352.7 21.04zm-8 19.66l126.2 125.7.4 178.3-123.1 123.6-2.6 2.6-178.3.4L41.08 345.6l-.38-178.3L166.4 41.08l178.3-.38zm-7.5 18.01l-163.3.34L58.71 174.8l.34 163.3L174.8 453.3l163.3-.3 115.2-115.8-.3-163.3L337.2 58.71zM108.4 210.4c5.3 0 10.8.5 16.4 1.3 5.7.8 11.5 2 17.5 3.6v20.5c-5.3-2.4-10.5-4.2-15.6-5.4-5.1-1.2-9.9-1.8-14.4-1.8-6 0-10.4.8-13.25 2.5-2.87 1.6-4.3 4.2-4.3 7.7 0 2.6.96 4.6 2.87 6.1 1.95 1.4 5.48 2.7 10.58 3.7l10.6 2.1c10.8 2.2 18.5 5.5 23.1 9.9 4.5 4.5 6.8 10.8 6.8 18.9 0 10.7-3.2 18.7-9.5 24-6.4 5.2-16.1 7.8-29.2 7.8-6.1 0-12.3-.6-18.51-1.8-6.2-1.1-12.41-2.9-18.61-5.2v-21.1c6.2 3.3 12.19 5.8 17.96 7.5 5.82 1.6 11.46 2.4 16.76 2.4 5.5 0 9.7-.9 12.6-2.7 2.9-1.8 4.4-4.4 4.4-7.8 0-3.1-1-5.4-3-7.1-2-1.6-5.9-3.1-11.8-4.4l-9.7-2.1c-9.73-2.1-16.85-5.4-21.37-10-4.47-4.5-6.7-10.7-6.7-18.4 0-9.7 3.12-17.1 9.37-22.3 6.25-5.3 15.24-7.9 27-7.9zm187.7 0c15.6 0 27.8 4.5 36.7 13.5 8.9 8.9 13.3 21.2 13.3 37 0 15.7-4.4 28-13.3 37-8.9 8.9-21.1 13.4-36.7 13.4-15.6 0-27.8-4.5-36.7-13.4-8.9-9-13.3-21.3-13.3-37 0-15.8 4.4-28.1 13.3-37 8.9-9 21.1-13.5 36.7-13.5zm-141.9 1.8h89.6v18.9h-32.2v78.3h-25.1v-78.3h-32.3v-18.9zm205.8 0h41.6c12.3 0 21.8 2.8 28.4 8.3 6.7 5.4 10 13.2 10 23.4s-3.3 18.1-10 23.6c-6.6 5.4-16.1 8.2-28.4 8.2H385v33.7h-25v-97.2zm-63.9 16.4c-7.7 0-13.6 2.8-17.8 8.5-4.2 5.6-6.3 13.6-6.3 23.8 0 10.2 2.1 18.1 6.3 23.8 4.2 5.6 10.1 8.4 17.8 8.4 7.7 0 13.6-2.8 17.8-8.4 4.2-5.7 6.3-13.6 6.3-23.8 0-10.2-2.1-18.2-6.3-23.8-4.2-5.7-10.1-8.5-17.8-8.5zm88.9 1.8v27.1h13.9c4.9 0 8.6-1.2 11.3-3.5 2.6-2.4 3.9-5.8 3.9-10.1s-1.3-7.7-3.9-10c-2.7-2.4-6.4-3.5-11.3-3.5H385z" />
                    </SvgIcon>
                </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginRight: 3 }}>
                <Box sx={{ width: '20px' }} />

                <Button onClick={() => handleFeed(100)} variant="contained" color="primary" disabled={isProcessStarted} sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        <path d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </SvgIcon>
                </Button>
                <Button onClick={() => handleFeed(10)} variant="contained" color="primary" disabled={isProcessStarted} sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </SvgIcon>
                </Button>
                <Button onClick={() => handleFeed(-10)} variant="contained" color="primary" disabled={isProcessStarted} sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                    </SvgIcon>
                </Button>
                <Button onClick={() => handleFeed(-100)} variant="contained" color="primary" disabled={isProcessStarted} sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" /> <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </SvgIcon>
                </Button>

                <Box sx={{ width: '20px' }} />

                <Button onClick={handleCutUp} variant="contained" color="primary" disabled={isProcessStarted} sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path fillRule="evenodd" d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z" />
                    </SvgIcon>
                </Button>
                <Button onClick={handleCutDown} variant="contained" color="error" disabled={isProcessStarted} sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path fillRule="evenodd" d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                    </SvgIcon>
                </Button>

                <Box sx={{ width: '20px' }} />

                <Button onClick={handleUnload} variant="contained" color="primary" disabled={isProcessStarted} sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" />
                    </SvgIcon>
                </Button>
                <Button onClick={handleLoad} variant="contained" color="primary" disabled={isProcessStarted} sx={{ width: 100, height: 80 }}>
                    <SvgIcon component="svg" viewBox="0 0 16 16" sx={{ fontSize: 60 }}>
                        <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z" />
                    </SvgIcon>
                </Button>
            </Box>
        </Grid>
    );
};

export default ControlButtons;
