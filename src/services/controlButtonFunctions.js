import { useDispatch } from 'react-redux';
import {
    startProcessSuccess, startProcessFailure, stopProcessSuccess, stopProcessFailure,
    stop1ProcessSuccess, stop1ProcessFailure, pauseProcessSuccess, pauseProcessFailure,
    feedProcessSuccess, feedProcessFailure, cutProcessSuccess, cutProcessFailure,
    unloadProcessFailure, unloadProcessSuccess
} from '../store/actions/processActions.js';
import { useSelector } from 'react-redux';

export const useControlButtonFunctions = () => {
    const dispatch = useDispatch();
    const IsProcessPaused = useSelector(state => state.statusled.processStatus['isProcessPaused']);
    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted']);
    const singleModeStatus = useSelector(state => state.statusled.singleModeStatus)

    const handleStart = async () => {
        try {
            if (isProcessStarted) {
                // POST updated data if already running
                fetch('http://localhost:8000/api/update/single', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ Single_Batch_Current: 1 })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Handle successful response
                        console.log('Value posted successfully:', 1);
                    })
                    .catch(error => {
                        // Handle error
                        console.error('Error posting value:', error);
                    });
            }
            else {
                // post  single parameters
                fetch('http://localhost:8000/api/update/single', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(singleModeStatus)
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Handle successful response
                        console.log('Value posted successfully:');
                    })
                    .catch(error => {
                        // Handle error
                        console.error('Error posting value:', error);
                    });

                // post current array
                /*fetch('http://localhost:8000/api/update/single', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(singleModeStatus)
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Handle successful response
                        console.log('Value posted successfully:');
                    })
                    .catch(error => {
                        // Handle error
                        console.error('Error posting value:', error);
                    });*/

                // start process
                const response = await fetch('http://localhost:8000/api/start_process', {
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
                        console.log('Value posted successfully:');
                    })
                    .catch(error => {
                        // Handle error
                        console.error('Error:', error);
                    });

            }
            // Dispatch action for success
            //dispatch(startProcessSuccess());
        } catch (error) {
            console.log("Error: ")
            console.log(error)
        }
    };


    const handleStop = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/stop_immidietly', {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to stop process');
            }
            // Dispatch action for success
            //dispatch(stopProcessSuccess());
        } catch (error) {
            console.log("Error stopping process:", error)
            //dispatch(stopProcessFailure());
        }
    };

    const handleStop1 = async () => {
        try {
            await fetch('http://localhost:8000/api/stop_after');
            // Dispatch action to stop process
            //(stop1Process());
        } catch (error) {
            console.log("Error stopping1 process:", error)
        }
    };

    const handlePause = async () => {
        try {
            if (IsProcessPaused) {
                await fetch('http://localhost:8000/api/resume');
            }
            else {
                await fetch('http://localhost:8000/api/pause');
            }
            // Dispatch action to pause process
            //dispatch(pauseProcess());
        } catch (error) {
            console.log("Error pause process:", error)
        }
    };

    const handleFeed = async (length) => {
        try {
            const response = await fetch(`http://localhost:8000/api/feed?length=${length}`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to stop process');
            }
            // Dispatch action for success
            //dispatch(stopProcessSuccess());
        } catch (error) {
            console.log("Error stopping process:", error)
            //dispatch(stopProcessFailure());
        }
    };

    const handleCutDown = async () => {
        try {
            await fetch('http://localhost:8000/api/cut_down');
            // Dispatch action to cut process
            //dispatch(cutProcess());
        } catch (error) {
            console.log("Error cut process:", error)
        }
    };

    const handleCutUp = async () => {
        try {
            await fetch('http://localhost:8000/api/cut_up');
            // Dispatch action to cut process
            //dispatch(cutProcess());
        } catch (error) {
            console.log("Error cut process:", error)
        }
    };

    const handleUnload = async () => {
        try {
            await fetch('http://localhost:8000/api/unload');
            // Dispatch action to unload process
            //dispatch(unloadProcess());
        } catch (error) {
            console.log("Error unload process:", error)
        }
    };

    const handleLoad = async () => {
        try {
            await fetch('http://localhost:8000/api/load');
            // Dispatch action to unload process
            //dispatch(unloadProcess());
        } catch (error) {
            console.log("Error unload process:", error)
        }
    };

    return {
        handleStart,
        handleStop,
        handleStop1,
        handlePause,
        handleFeed,
        handleCutDown,
        handleCutUp,
        handleUnload,
        handleLoad,
    };
};