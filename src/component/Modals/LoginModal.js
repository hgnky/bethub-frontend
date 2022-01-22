import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import { Styles } from './styles'
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { MdClose } from 'react-icons/md';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    color: '#FFFFFF',
    bgcolor: '#0B1E24',
    border: '1px solid #0B1E24',
    boxShadow: 80,
    p: 4,
};

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        color: 'white'
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

const LoginModal = ({ open, handleClose }) => {
    return (
        <Styles>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box display="flex" alignItems="center" justifyContent="end">
                            <Button className='ml-2' onClick={handleClose}>
                                <MdClose color='white' fontSize="26px" cursor="pointer" />
                            </Button>
                        </Box>
                        <Box marginY={1}>
                            <Typography>USERNAME</Typography>
                            <CssTextField
                                label="Username"
                                id="custom-css-outlined-input"
                                fullWidth
                            />
                        </Box>
                        <Box marginY={1}>
                            <Typography>PASSWORD</Typography>
                            <CssTextField
                                label="Password"
                                id="custom-css-outlined-input"
                                fullWidth
                            />
                        </Box>
                        <Box marginTop={2} textAlign="center">
                            <Button sx={{
                                color: 'white', marginX: '1rem', minWidth: '100px', background: 'linear-gradient(225deg, rgba(51, 193, 108, 0) 0%, rgba(51, 193, 108, 0.08) 100%), #112F37', borderRadius: '8px'
                            }}>Login</Button>
                            <Button sx={{
                                color: 'white', marginX: '1rem', minWidth: '100px', background: 'linear-gradient(225deg, rgba(51, 193, 108, 0) 0%, rgba(51, 193, 108, 0.08) 100%), #112F37', borderRadius: '8px'
                            }}>Sign up</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Styles>
    )
}

export default LoginModal