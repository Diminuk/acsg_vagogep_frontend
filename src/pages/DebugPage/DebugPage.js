import React from 'react';
import Grid from '@mui/material/Grid';
import NavBar from '../../components/Header/Navbar';
import { Button } from '@mui/material';
const DebugPage = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <NavBar />
            </Grid>
            <Grid item xs={12}>
                <Button variant='contained'>
                    Get State
                </Button>
                <Button variant='contained'>
                    Get Params
                </Button>
                <Button variant='contained'>
                    Get Websocker payload
                </Button>
            </Grid>

        </Grid>
    );
};

export default DebugPage;
