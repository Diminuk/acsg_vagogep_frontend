import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';


const ManualJumpPopup = () => {


    const manualJumpTrigger = useSelector(state => state.statusled.processStatus["ManualJumpTrigger"]);

    const handleClosePopup = (success) => {
        fetch(`http://localhost:8000/api/reset_manual_jump_trigger?success=${success}`, {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('ManualJump popup reseted');
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
            });

    };

    return (
        < Dialog
            disableBackdropClick
            open={manualJumpTrigger}
            sx={{
                width: "100%",
                height: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <DialogTitle>Manual Jump</DialogTitle>
            <DialogContent>
                <p>Manual Jump triggered.</p>
                <p>Please validate the results.</p>
            </DialogContent>
            <DialogActions>
                <Button
                    variant='contained'
                    onClick={() => handleClosePopup(true)}
                    color="success">
                    Good
                </Button>
                <Button
                    variant='contained'
                    onClick={() => handleClosePopup(false)}
                    color="error">
                    Bad
                </Button>
            </DialogActions>
        </Dialog >
    );
};

export default ManualJumpPopup