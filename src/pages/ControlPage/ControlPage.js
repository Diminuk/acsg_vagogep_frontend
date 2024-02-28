import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ControlButtons from '../../components/ControlPage/ControlButtons';
import SessionDisplay from '../../components/ControlPage/Session';
import ChangeMode from '../../components/ControlPage/ChangeMode';
import NavBar from '../../components/Header/Navbar';
import Infra from '../../components/ControlPage/Infra';
import Cut from '../../components/ControlPage/Cut';
import Milling from '../../components/ControlPage/Milling';
import { useSelector } from 'react-redux';
import StatusDisplay from '../../components/ControlPage/StatusLeds';
import ProcessDisplay from '../../components/ControlPage/ProcessDisplay';
import Servo from '../../components/ControlPage/Motor';
import ArrayProcess from '../../components/ControlPage/ArrayProcess';
import BatchPopup from '../../components/ControlPage/Popups/BatchPopup';
import ManualJumpPopup from '../../components/ControlPage/Popups/ManualJumpPopup';

const ControlPage = () => {

    const mode = useSelector(state => state.statusled.processStatus['Mode']);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <NavBar />
            </Grid>
            <Grid item xs={4}>

                <BatchPopup>
                </BatchPopup>
                <ManualJumpPopup>
                </ManualJumpPopup>

                <ChangeMode />
                {!mode && (
                    <>
                        <SessionDisplay />
                        <Servo />
                        <Infra />
                        <Cut />
                        <Milling />
                    </>
                )}
                {mode && (
                    <>
                        <ArrayProcess />
                    </>
                )}
            </Grid>

            <Grid item xs={8}>
                <ControlButtons />
                <StatusDisplay />
                <ProcessDisplay />
            </Grid>

            {/* Add more Grid items for other components */}
        </Grid >
    );
};

export default ControlPage;
