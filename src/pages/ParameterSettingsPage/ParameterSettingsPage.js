import React from 'react';
import Grid from '@mui/material/Grid';
import ControlButtons from '../../components/ControlPage/ControlButtons';
import SessionDisplay from '../../components/ControlPage/Session';
import ChangeMode from '../../components/ControlPage/ChangeMode';
import NavBar from '../../components/Header/Navbar';
const ParameterSettingsPage = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <NavBar />
            </Grid>

            {/* Add more Grid items for other components */}
        </Grid>
    );
};

export default ParameterSettingsPage;
