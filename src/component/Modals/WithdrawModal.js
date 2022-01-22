
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { Styles } from './styles'
import { MdClose } from 'react-icons/md';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    color: '#FFFFFF',
    bgcolor: '#0B1E24',
    border: '1px solid #0B1E24',
    boxShadow: 80,
    p: 4,
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#0F232A',
        color: 'white',
        border: '1px solid rgb(7,62,74)',
        fontSize: 14,
        padding: '5px 13px 5px 15px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            backgroundColor: '#0F232A',
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const WithdrawModal = ({ open, handleClose }) => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Box display="flex" alignItems="center">
                                <Box
                                    background="radial-gradient(63.27% 100% at 63.27% 100%, rgba(91, 240, 151, 0.08) 0%, rgba(0, 0, 0, 0) 100%), #112F37"
                                    boxShadow="inset 0px 0px 4px rgba(0, 0, 0, 0.32)"
                                    borderRadius="4px"
                                    className="d-flex align-items-center p-2"
                                >
                                    <img src="img/coins1.png" alt="" width="16px" height="20px" />
                                    <span className="color-white ml-2 mr-4 font-size--small">500.00</span>
                                </Box>
                                <Box className="input-group ml-4 ml-xs-0 search-input" backgroundColor="#0F232A" border="1px solid #0F232A">
                                    <span className="input-group-text background-transparent color-green-black"><FaSearch /></span>
                                    <input
                                        type="text"
                                        className="form-control background-transparent color-white font-size--small"
                                        placeholder="Search for item..."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </Box>
                                <Box>
                                    <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
                                        <Select
                                            labelId="demo-customized-select-label"
                                            id="demo-customized-select"
                                            value={age}
                                            onChange={handleChange}
                                            input={<BootstrapInput />}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Button sx={{ display: 'flex', background: '#112F37', boxShadow: 'box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.06)', borderRadius: '5px', color: 'white' }}>
                                    <FaArrowLeft />&nbsp;Back to Methods
                                </Button>
                                <Button className='ml-2' onClick={handleClose}>
                                    <MdClose color='white' fontSize="26px" cursor="pointer" />
                                </Button>
                            </Box>
                        </Box>
                        <hr className='splitter' />
                        <Grid container sx={{ maxHeight: '500px', overflowY: 'auto' }}>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                            <Grid item md={2} lg={2} xs={6} padding={1}>
                                <Box className="item"></Box>
                            </Grid>
                        </Grid>
                        <Box marginY={2} display="flex" justifyContent="end" alignItems="center">
                            <Box><span style={{ color: '#6B7C82' }}>You have selected</span> 1CG: GO item.</Box>
                            <Box marginX={2}>
                                <img src="img/coins1.png" alt="" width="16px" height="20px" />
                                <span className="color-white mx-2 font-size--small">20.00</span>
                            </Box>
                            <Button className="btn-withdraw" style={{ color: 'white' }}>
                                Withdraw
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Styles >
    )
}

export default WithdrawModal