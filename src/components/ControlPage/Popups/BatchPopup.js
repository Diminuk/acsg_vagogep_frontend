import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const BatchPopup = () => {

    const singleBatchLimitReached = useSelector(state => state.statusled.processStatus["SingleBatchLimitReached"]);

    const handleClosePopup = () => {
        fetch('http://localhost:8000/api/reset_batch_popup', {
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
                console.log('Batch popup reseted');
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
            });

    };

    return (
        < Dialog
            open={singleBatchLimitReached}
            sx={{
                width: "100%",
                height: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onClose={handleClosePopup} >
            <DialogTitle>Batch limit reached</DialogTitle>
            <DialogContent>
                <p>Batch limit reached.</p>
                <p>Please press the start button to proceed.</p>
            </DialogContent>
            <DialogActions>
                <Button
                    variant='contained'
                    onClick={handleClosePopup}
                    color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog >
    );
};

export default BatchPopup