import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { Styles } from './styles'
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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(1),
    },
    '& .MuiFormControl-root': {
        margin: '0 !important'
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#0F232A',
        color: 'white',
        border: '1px solid rgb(7,62,74)',
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

const SlotArenaModal = ({ games, open, handleClose }) => {

    const [amount, setAmount] = React.useState(20)
    const [selected, setSelected] = React.useState('')

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
                        <Box marginY={2} display="flex" alignItems="center" justifyContent="space-between">
                            <Box color="white" fontWeight="bold" fontSize="20px">Create a new Slot Arena</Box>
                            <Button onClick={handleClose}>
                                <MdClose color='white' fontSize="26px" cursor="pointer" />
                            </Button>
                        </Box>
                        <Box padding={2} backgroundColor='#163338' borderRadius="5px" >
                            <Grid container spacing={2}>
                                {
                                    games?.slice(0, 8).map((game, index) => (
                                        <Grid item xs={3} key={index}>
                                            <img
                                                className={`d-block m-auto cursor-pointer popular-games ${selected === game.title && `selected`}`}
                                                onError={() => {
                                                    this.onerror = null;
                                                    this.setAttribute('src', 'https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/');
                                                }}
                                                src={`https://cdn.softswiss.net/i/s4/${game.provider}/${game.identifier.split(':')[1]}.png`}
                                                width="100%"
                                                style={{ borderRadius: '5px' }}
                                                alt=""
                                                onClick={() => setSelected(game.title)}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                        <Box marginY={2}>
                            <Typography className='color-green-black'>Amount</Typography>
                            <FormControl sx={{ width: '100%' }} variant="standard">
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={amount}
                                    displayEmpty
                                    fullWidth
                                    onChange={(e) => setAmount(e.target.value)}
                                    input={<BootstrapInput />}
                                >
                                    <MenuItem value="20">20.00</MenuItem>
                                    <MenuItem value="40">40.00</MenuItem>
                                    <MenuItem value="60">60.00</MenuItem>
                                    <MenuItem value="80">80.00</MenuItem>
                                    <MenuItem value="100">100.00</MenuItem>
                                    <MenuItem value="120">120.00</MenuItem>
                                    <MenuItem value="140">140.00</MenuItem>
                                    <MenuItem value="160">160.00</MenuItem>
                                    <MenuItem value="180">180.00</MenuItem>
                                    <MenuItem value="200">200.00</MenuItem>
                                    <MenuItem value="240">240.00</MenuItem>
                                    <MenuItem value="280">280.00</MenuItem>
                                    <MenuItem value="300">300.00</MenuItem>
                                    <MenuItem value="360">360.00</MenuItem>
                                    <MenuItem value="400">400.00</MenuItem>
                                    <MenuItem value="480">480.00</MenuItem>
                                    <MenuItem value="500">500.00</MenuItem>
                                    <MenuItem value="540">540.00</MenuItem>
                                    <MenuItem value="600">600.00</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box marginY={1}>
                            <Typography className='color-green-black'>Participants (2-10)</Typography>
                            <CssTextField
                                label="Participants"
                                id="custom-css-outlined-input"
                                defaultValue={2}
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                fullWidth
                            />
                        </Box>
                        <Box marginTop={2} textAlign="center">
                            <Button sx={{
                                color: 'white', fontWeight: 'bold', backgroundColor: '#31bc69', '&:hover': { backgroundColor: '#31bc69' }
                            }} fullWidth>Create</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Styles >
    )
}

export default SlotArenaModal;