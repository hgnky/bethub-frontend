import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TabPanel from '../../component/common/TabPanel';
import { FaChevronRight } from 'react-icons/fa'
import { Styles } from "./styles"
import { SHOW_SIDEBAR } from '../../store/types';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '14px',
        color: '#253D44',
        backgroundColor: '#0B1E24',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#0d2329f0',
    },
    '&:nth-of-type(even)': {
        backgroundColor: '#0d2329',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const rows = [
    { id: 1, name: 'Big Bass Bonanza', calories: 'Zeldous', fat: 500.00, carbs: '1.00x', protein: 500.00 },
    { id: 2, name: 'Big Bass Bonanza', calories: 'Zeldous', fat: 500.00, carbs: '1.00x', protein: 500.00 },
    { id: 3, name: 'Big Bass Bonanza', calories: 'Zeldous', fat: 500.00, carbs: '1.00x', protein: 500.00 },
    { id: 4, name: 'Big Bass Bonanza', calories: 'Zeldous', fat: 500.00, carbs: '1.00x', protein: 500.00 },
    { id: 5, name: 'Big Bass Bonanza', calories: 'Zeldous', fat: 500.00, carbs: '1.00x', protein: 500.00 },
];

const Dashboard = () => {
    const dispatch = useDispatch(null)
    const { show_sidebar } = useSelector(state => state.animation)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Styles>
            {
                show_sidebar === false && (
                    <button type='button' className='btn btn-slide' onClick={() => {
                        dispatch({
                            type: SHOW_SIDEBAR,
                            payload: true
                        })
                    }}>
                        <FaChevronRight className='m-auto' style={{ fontSize: '20px', color: '#75969D' }} />
                    </button>
                )
            }
            <div className="slot-wrapper">
                <div className="row mx-0 py-4">
                    <div className="col-md-2 top py-1">

                    </div>
                    <div className="col-md-8 px-2 px-xs-0">
                        <div className='top'></div>
                    </div>
                    <div className="col-md-2 top py-1">

                    </div>
                </div>
                <div className="my-4">
                    <div className="p-2 casino-section-title">
                        <img src="img/mask-group.png" alt="" width="20px" height="20px" />&nbsp;&nbsp;Casino
                    </div>
                    <div className="row mx-0 py-1">
                        <div className="col-md-6 col-12 pl-0 px-xs-0 py-1">
                            <img src="img/home/Slots.png" alt="" width="100%" />
                        </div>
                        <div className="col-md-6 col-12 pr-0 px-xs-0 py-1">
                            <img src="img/home/Live.png" alt="" width="100%" />
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <div className="p-2 casino-section-title">
                        <img src="img/original-group.png" alt="" width="20px" height="20px" />&nbsp;&nbsp;Originals
                    </div>
                    <div className="row mx-0 py-2">
                        <div className="col-lg-4 col-md-6 col-6 px-0 position-relative">
                            <img src="img/home/Roulette-1.png" alt="" width="100%" height="100%" />
                            <div className='game-info'>
                                <div className='game-title'>ROULETTE</div>
                                <div className='game-desc'>SPIN THE WHEEL</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 px-0 position-relative">
                            <img src="img/home/Crash-1.png" alt="" width="100%" height="100%" />
                            <div className='game-info'>
                                <div className='game-title'>CRASH</div>
                                <div className='game-desc'>REACH THE SKY</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 px-0 position-relative">
                            <img src="img/home/Dice-1.png" alt="" width="100%" height="100%" />
                            <div className='game-info'>
                                <div className='game-title'>DICE</div>
                                <div className='game-desc'>ROLL YOUR LUCK</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 px-0 position-relative">
                            <img src="img/home/Plinko-1.png" alt="" width="100%" height="100%" />
                            <div className='game-info'>
                                <div className='game-title'>PLINKO</div>
                                <div className='game-desc'>BOUNCE TO WIN</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 px-0 position-relative">
                            <img src="img/home/Towers-1.png" alt="" width="100%" height="100%" />
                            <div className='game-info'>
                                <div className='game-title'>TOWER</div>
                                <div className='game-desc'>CLIMB THE TOP</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 px-0 position-relative">
                            <img src="img/home/Mines-1.png" alt="" width="100%" height="100%" />
                            <div className='game-info'>
                                <div className='game-title'>MINES</div>
                                <div className='game-desc'>HIT OR MISS</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 px-0 position-relative">
                            <img src="img/home/Coinflip-1.png" alt="" width="100%" height="100%" />
                            <div className='game-info'>
                                <div className='game-title'>COINFLIP</div>
                                <div className='game-desc'>FATE ON A TOSS</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 px-0 position-relative">
                            <img src="img/home/Jackpot-1.png" alt="" width="100%" height="100%" />
                            <div className='game-info'>
                                <div className='game-title'>JACKPOT</div>
                                <div className='game-desc'>THE CHOSEN ONE</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 px-0 position-relative">
                            <img src="img/home/Cases-1.png" alt="" width="100%" height="100%" />
                            <div className='game-info'>
                                <div className='game-title'>CASE OPENING</div>
                                <div className='game-desc'>UNVEIL THE MISTERY</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <StyledTab label="All Bets" {...a11yProps(0)} />
                                <StyledTab label="High Wins" {...a11yProps(1)} />
                                <StyledTab label="Lucky Wins" {...a11yProps(2)} />
                            </StyledTabs>
                        </Box>
                        <TabPanel sx={{ paddingLeft: '0', paddingRight: '0' }} value={value} index={0}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <StyledTableRow className='home-tables'>
                                            <StyledTableCell>GAME</StyledTableCell>
                                            <StyledTableCell align='center' color='secondary'>USER</StyledTableCell>
                                            <StyledTableCell align='center'>WAGER</StyledTableCell>
                                            <StyledTableCell align='center'>MULTI</StyledTableCell>
                                            <StyledTableCell align='right'>PAYOUT</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow
                                                key={row.id}
                                                sx={{ border: 0 }}
                                            >
                                                <StyledTableCell sx={{ color: '#33C16C', verticalAlign: 'middle' }}>
                                                    <img src="img/new_icons/Slots.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='center'>
                                                    <img src="img/chat-subimg1.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.calories}
                                                </StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='center'>
                                                    <img src="img/coins1.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.fat}
                                                </StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='center'>{row.carbs}</StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='right'>
                                                    <img src="img/coins1.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.protein}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <StyledTableRow className='home-tables'>
                                            <StyledTableCell>GAME</StyledTableCell>
                                            <StyledTableCell align='center' color='secondary'>USER</StyledTableCell>
                                            <StyledTableCell align='center'>WAGER</StyledTableCell>
                                            <StyledTableCell align='center'>MULTI</StyledTableCell>
                                            <StyledTableCell align='right'>PAYOUT</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow
                                                key={row.name}
                                                sx={{ border: 0 }}
                                            >
                                                <StyledTableCell sx={{ color: '#33C16C', verticalAlign: 'middle' }}>
                                                    <img src="img/new_icons/Slots.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='center'>
                                                    <img src="img/chat-subimg1.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.calories}
                                                </StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='center'>
                                                    <img src="img/coins1.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.fat}
                                                </StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='center'>{row.carbs}</StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='right'>
                                                    <img src="img/coins1.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.protein}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <StyledTableRow className='home-tables'>
                                            <StyledTableCell>GAME</StyledTableCell>
                                            <StyledTableCell align='center' color='secondary'>USER</StyledTableCell>
                                            <StyledTableCell align='center'>WAGER</StyledTableCell>
                                            <StyledTableCell align='center'>MULTI</StyledTableCell>
                                            <StyledTableCell align='right'>PAYOUT</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow
                                                key={row.name}
                                                sx={{ border: 0 }}
                                            >
                                                <StyledTableCell sx={{ color: '#33C16C', verticalAlign: 'middle' }}>
                                                    <img src="img/new_icons/Slots.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='center'>
                                                    <img src="img/chat-subimg1.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.calories}
                                                </StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='center'>
                                                    <img src="img/coins1.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.fat}
                                                </StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='center'>{row.carbs}</StyledTableCell>
                                                <StyledTableCell sx={{ color: '#FFFFFF', verticalAlign: 'middle' }} align='right'>
                                                    <img src="img/coins1.png" alt="" width="20px" />&nbsp;&nbsp;
                                                    {row.protein}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </Styles>
    )
}

export default Dashboard