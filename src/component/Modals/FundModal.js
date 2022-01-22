import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../../component/common/TabPanel';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { MdClose } from 'react-icons/md'
import { Button } from '@mui/material';
import { FaCopy } from 'react-icons/fa';
import QRCode from "react-qr-code";
import { Styles } from './styles'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    bgcolor: '#0B1E24',
    border: '1px solid #0B1E24',
    boxShadow: 80,
    p: 4,
};

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 80,
        width: '100%',
        background: 'radial-gradient(50% 50% at 50% 50%, #094F25 0%, #33C16C 100%)',
        boxShadow: '0px 0px 12px #33C16C',
        borderRadius: '5px'
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const FundModal = ({ open, handleClose }) => {

    const textRef = useRef()
    const [value, setValue] = React.useState(0);
    const [show, setShow] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onCopyText = (e) => {
        const text = textRef.current.innerText
        navigator.clipboard.writeText(text)
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }

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
                            <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <StyledTab label="Deposit" {...a11yProps(0)} />
                                <StyledTab label="Withdraw" {...a11yProps(1)} />
                            </StyledTabs>
                            <Button onClick={handleClose}>
                                <MdClose color='white' fontSize="32px" cursor="pointer" />
                            </Button>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Box display="flex" justifyContent="center">
                                <Button>
                                    <img src='img/methods/footer-icon1.png' alt='' />
                                </Button>
                                <Button>
                                    <img src='img/methods/footer-icon2.png' alt='' />
                                </Button>
                                <Button>
                                    <img src='img/methods/footer-icon3.png' alt='' />
                                </Button>
                                <Button>
                                    <img src='img/methods/footer-icon4.png' alt='' />
                                </Button>
                                <Button>
                                    <img src='img/methods/footer-icon5.png' alt='' />
                                </Button>
                                <Button>
                                    <img src='img/methods/footer-icon6.png' alt='' />
                                </Button>
                                <Button>
                                    <img src='img/methods/footer-icon7.png' alt='' />
                                </Button>
                            </Box>
                            <Box mt={3} mb={3} display="flex" justifyContent="center">
                                <Box padding="2rem" backgroundColor="white" display="inline-block">
                                    <QRCode value="hey" />
                                </Box>
                            </Box>
                            <Box
                                mt={4}
                                padding="10px"
                                spacing={2}
                                backgroundColor="#112F37"
                                boxShadow="0px 0px 12px rgba(0, 0, 0, 0.24)"
                                borderRadius="8px"
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box ref={textRef} color="white" className="font-size--small">32LgqY1mHAELkKYK4AD46AV132xdYZ1KsN</Box>
                                <Tooltip title={show === false ? "" : "Copied!"} followCursor>
                                    <Button onClick={onCopyText}><FaCopy /></Button>
                                </Tooltip>
                            </Box>
                            <Box mt={4} textAlign="center" color="#6B7C82" className="font-size--small">
                                Only send BTC to this address, 1 confirmation(s) required. We do not accept BEP20 from Binance.
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Withdraw
                        </TabPanel>
                    </Box>
                </Fade>
            </Modal>
        </Styles>
    )
}

export default FundModal