import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, Typography } from '@mui/material'
import { FaSearch } from 'react-icons/fa'
import { MdLayers, MdSort } from 'react-icons/md'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Styles } from './styles'
import { getSlotGames } from '../../store/action/slots';
import { providers } from '../../utils/data';

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

const Slots = () => {

    const dispatch = useDispatch(null)

    const { push_games, all_games } = useSelector(state => state.slots)
    const [hovered, setHovered] = React.useState(null)
    const [page, setPage] = React.useState(0)
    const [popular_num, setPopularNum] = useState(0)
    const [searchKey, setSearchKey] = React.useState('')
    const [filterKey, setFilterKey] = React.useState('')
    const [sortKey, setSortKey] = React.useState('')

    React.useEffect(() => {
        dispatch(getSlotGames())
    }, [dispatch])

    const handlePrev = () => {
        if (popular_num > 0) {
            setPopularNum(popular_num - 1)
        }
    }

    const handleNext = () => {
        if (popular_num < push_games.length) {
            setPopularNum(popular_num + 1)
        }
    }

    return (
        <Styles>
            <Box backgroundColor="#0B1E24" width="100%" minHeight="150px" paddingX={8} display="flex" alignItems="center">
                <span className='page-title'>SLOTS</span>
            </Box>
            <Box className="px-xs-2" paddingX={8}>
                <Box className='py-xs-2' display="flex" alignItems="center" paddingY={4}>
                    <Box className='slots-section-title font-size--small' padding={1}>
                        <img src="img/fire.png" alt='' />&nbsp;POPULAR SLOTS
                    </Box>
                    <Box className="input-group ml-4 ml-xs-0 search-input">
                        <span className="input-group-text background-transparent color-green-black"><FaSearch /></span>
                        <input
                            type="text"
                            className="form-control background-transparent color-white font-size--small"
                            placeholder="Search slots..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setSearchKey(e.target.value)}
                        />
                    </Box>
                    <Box display="flex">
                        <Button onClick={handlePrev} sx={{ minWidth: '36px', border: '1px solid #1C3942', marginX: '5px' }}>
                            <img src="img/left-arrow.png" alt='' />
                        </Button>
                        <Button onClick={handleNext} sx={{ minWidth: '36px', border: '1px solid #1C3942', marginX: '5px' }}>
                            <img src="img/right-arrow.png" alt='' />
                        </Button>
                    </Box>
                </Box>
                <Box className='py-xs-2' paddingY={2} display="flex">
                    {
                        push_games.filter(game => String(game.title).toLowerCase().includes(searchKey.toLowerCase()))
                            .slice(popular_num, popular_num + 5).map((slot, index) => (
                                <Box
                                    key={index}
                                    className='top-imgs cursor-pointer'
                                    paddingX={1}
                                >
                                    <Box
                                        position="relative"
                                        onMouseEnter={(e) => setHovered(JSON.parse(e.target.dataset.info))}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        <img
                                            className='d-block m-auto popular-games'
                                            onError={() => {
                                                this.onerror = null;
                                                this.setAttribute('src', 'https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/');
                                            }}
                                            src={`https://cdn.softswiss.net/i/s4/${slot.provider}/${slot.identifier.split(':')[1]}.png`}
                                            width="100%"
                                            data-info={JSON.stringify(slot)}
                                            alt=""
                                        />
                                        <Box className={hovered && String(hovered?.title) === String(slot.title) ? 'd-block' : 'd-none'}>
                                            <Box className='mask' position="absolute" left={0} top={0} width="100%" height='100%'>
                                            </Box>
                                            <Box position="absolute" width="100%" height="100%" left={0} top={0} display="flex" alignItems="center" justifyContent="center">
                                                <img src='img/play.png' alt='' className='d-block m-auto' />
                                            </Box>
                                            <Box position="absolute" bottom={0} width="100%" paddingY={1} className='description'>
                                                <Typography className='hot-slot-title'>{slot.title}</Typography>
                                                <Typography className='hot-slot-desc'>PRAGMATIC PLAY</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                    }
                </Box>
                <Box className='py-xs-2' paddingY={4} display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex">
                        <Box className='slots-section-title font-size--small' padding={1}>
                            <MdLayers color='#01FF3B' />&nbsp;ALL GAMES
                        </Box>
                        <Box className="d-xs-none" display="flex" alignItems="center" paddingX={2}>
                            <MdSort color='#759198' />
                            <span className='mx-2 font-size--small' style={{ color: 'white' }}>FILTER BY</span>
                            <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    displayEmpty
                                    value={filterKey}
                                    onChange={(e) => setFilterKey(e.target.value)}
                                    input={<BootstrapInput />}
                                >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    {
                                        providers.map((p, index) => (
                                            <MenuItem value={p} key={index}>{p}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box className="d-xs-none" display="flex" alignItems="center" paddingX={2}>
                        <MdSort color='#759198' />
                        <span className='mx-2 font-size--small' style={{ color: 'white' }}>SORT BY</span>
                        <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={sortKey}
                                displayEmpty
                                onChange={(e) => setSortKey(e.target.value)}
                                input={<BootstrapInput />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>{`A -> Z`}</MenuItem>
                                <MenuItem value={2}>{`Z -> A`}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box className="d-xs-show d-none" display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center" paddingX={2}>
                        <MdSort color='#759198' />
                        <span className='mx-2 font-size--small' style={{ color: 'white' }}>FILTER BY</span>
                        <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={filterKey}
                                displayEmpty
                                onChange={(e) => setFilterKey(e.target.value)}
                                input={<BootstrapInput />}
                            >
                                <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                {
                                    providers.map((p, index) => (
                                        <MenuItem value={p} key={index}>{p}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box display="flex" alignItems="center" paddingX={2}>
                        <MdSort color='#759198' />
                        <span className='mx-2 font-size--small' style={{ color: 'white' }}>SORT BY</span>
                        <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={sortKey}
                                displayEmpty
                                onChange={(e) => setSortKey(e.target.value)}
                                input={<BootstrapInput />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>{`A -> Z`}</MenuItem>
                                <MenuItem value={2}>{`Z -> A`}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box className='py-xs-2' paddingY={2} display="flex" justifyContent="center">
                    <div className='row mx-0'>
                        {
                            all_games.length > 0 ? all_games.filter(g => filterKey !== "" ? g.provider === filterKey : true)
                                .filter(game => String(game.title).toLowerCase().includes(searchKey.toLowerCase()))
                                .slice(0, 36 * (page + 1))
                                .sort((a, b) => {
                                    return sortKey !== "" ? sortKey === 1 ? (a.title > b.title ? 1 : -1) : (b.title > a.title ? 1 : -1) : 0
                                })
                                .map((slot, index) => (
                                    <div className="cursor-pointer col-md-2 col-lg-2 col-6 p-1" key={index}>
                                        <Box
                                            position="relative"
                                            onMouseEnter={(e) => setHovered(JSON.parse(e.target.dataset.info))}
                                            onMouseLeave={() => setHovered(null)}
                                        >
                                            <img
                                                className='d-block m-auto popular-games'
                                                onError={() => {
                                                    this.onerror = null;
                                                    this.setAttribute('src', 'https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/');
                                                }}
                                                src={`https://cdn.softswiss.net/i/s4/${slot.provider}/${slot.identifier.split(':')[1]}.png`}
                                                width="100%"
                                                data-info={JSON.stringify(slot)}
                                                alt=""
                                            />
                                            <Box className={hovered && String(hovered?.title) === String(slot.title) ? 'd-block' : 'd-none'}>
                                                <Box className='mask' position="absolute" left={0} top={0} width="100%" height='100%'>
                                                </Box>
                                                <Box position="absolute" width="100%" height="100%" left={0} top={0} display="flex" alignItems="center" justifyContent="center">
                                                    <img src='img/play.png' alt='' className='d-block m-auto' />
                                                </Box>
                                                <Box position="absolute" bottom={0} width="100%" paddingY={1} className='description'>
                                                    <Typography className='hot-slot-title'>{slot.title}</Typography>
                                                    <Typography className='hot-slot-desc'>PRAGMATIC PLAY</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </div>
                                )) : (
                                <Box marginY={4} display="flex" justifyContent="center" flexDirection="column">
                                    <Box color="white" fontWeight="bold">Loaded 0 out of 0 games</Box>
                                    <Box width="80%" marginX="auto" height="5px" borderRadius="2px" backgroundColor="#75969D" marginY={2}></Box>
                                    <Button
                                        sx={{
                                            backgroundColor: '#31bc69',
                                            borderRadius: '15px',
                                            '&:hover': {
                                                backgroundColor: '#31bc69'
                                            },
                                            color: 'white',
                                            fontWeight: 'bold'
                                        }}
                                    >Load more</Button>
                                </Box>
                            )
                        }
                    </div>
                </Box>
                <Box textAlign="center">
                    <Button
                        className='px-xs-3 py-xs-2 my-2'
                        onClick={() => setPage(page + 1)}
                        sx={{
                            boxShadow: '0px 0px 5px #022424',
                            textShadow: '0 0 5px',
                            color: '#33C16C',
                            fontWeight: 'bold',
                            padding: '15px 30px',
                            background: 'linear-gradient(225deg, rgba(51, 193, 108, 0) 0%, rgba(51, 193, 108, 0.08) 100%), #112F37',
                            borderRadius: '8px'
                        }}>Load More</Button>
                </Box>
            </Box>
        </Styles>
    )
}

export default Slots