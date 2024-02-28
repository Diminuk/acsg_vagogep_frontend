import React from 'react';
import Grid from '@mui/material/Grid';
import NavBar from '../../components/Header/Navbar';
const LogPage = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <NavBar />
            </Grid>

            {/* Add more Grid items for other components */}
        </Grid>
    );
};

export default LogPage;
