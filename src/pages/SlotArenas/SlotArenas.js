import React from 'react'
import { Button, Box } from '@mui/material'
import { FaCoins, FaUsers } from 'react-icons/fa'
import SlotArenaModal from '../../component/Modals/SlotArenaModal'
import { Styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getSlotGames } from '../../store/action/slots'
import { MdSentimentVeryDissatisfied } from 'react-icons/md'

const SlotArenas = () => {

    const dispatch = useDispatch(null)
    const [open, setOpen] = React.useState(false)
    const [tab, setTab] = React.useState('open')

    const { all_games } = useSelector(state => state.slots)

    React.useEffect(() => {
        dispatch(getSlotGames())
    }, [dispatch])

    return (
        <Styles>
            <div className='row mx-0 d-flex align-items-center'>
                <div className='col-md-6 col-12 color-white d-flex'>
                    <h4 className='mb-0'>Slot Arenas</h4>&nbsp;
                    <Button
                        onClick={() => setOpen(true)}
                        sx={{ marginX: 4, backgroundColor: '#31bc69', color: 'white', '&:hover': { backgroundColor: '#31bc69' } }}
                    >Create new battle</Button>
                </div>
                <div className='col-md-6 col-12 d-flex justify-content-end'>
                    <ul>
                        <li onClick={() => setTab('open')} className={tab === 'open' && 'color-white'}>Open</li>
                        <li onClick={() => setTab('in_progress')} className={tab === 'in_progress' && 'color-white'}>In Progress</li>
                        <li onClick={() => setTab('finished')} className={tab === 'finished' && 'color-white'}>Finished</li>
                    </ul>
                </div>
            </div>
            {
                tab === 'open' ? (
                    <Box position="absolute" left="50%" top="50%" color="#75969D" textAlign="center" fontSize="18px">
                        <MdSentimentVeryDissatisfied />
                        <br />
                        Nothing here just yet
                    </Box>
                ) : tab === 'in_progress' ? (
                    <div className='row mx-0 my-4'>
                        <div className='col-md-4 col-lg-3 col-xs-6 p-2'>
                            <div className='slot-card p-4'>
                                <img src="https://cdn.softswiss.net/i/s4/pragmaticexternal/BuffaloKingMegaways1.png" alt='' width="100%" />
                                <Box paddingY={2}>
                                    <Box className='title' color="white" fontSize="18px" fontWeight="bold">Buffalo King Megaways</Box>
                                    <Box className='status' color="#75969D">Finished</Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={3}>
                                        <Box className='color-green-black'>Bonus buy</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;20.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Players</Box>
                                        <Box color="white" fontWeight="bold"><FaUsers />&nbsp;2/2</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Created by</Box>
                                        <Box color="white" fontWeight="bold">Simon</Box>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xs-6 p-2'>
                            <div className='slot-card p-4'>
                                <img src="https://cdn.softswiss.net/i/s4/pragmaticexternal/BuffaloKingMegaways1.png" alt='' width="100%" />
                                <Box paddingY={2}>
                                    <Box className='title' color="white" fontSize="18px" fontWeight="bold">Buffalo King Megaways</Box>
                                    <Box className='status' color="#75969D">Finished</Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={3}>
                                        <Box className='color-green-black'>Bonus buy</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;20.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Players</Box>
                                        <Box color="white" fontWeight="bold"><FaUsers />&nbsp;2/2</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Created by</Box>
                                        <Box color="white" fontWeight="bold">Simon</Box>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xs-6 p-2'>
                            <div className='slot-card p-4'>
                                <img src="https://cdn.softswiss.net/i/s4/pragmaticexternal/BuffaloKingMegaways1.png" alt='' width="100%" />
                                <Box paddingY={2}>
                                    <Box className='title' color="white" fontSize="18px" fontWeight="bold">Buffalo King Megaways</Box>
                                    <Box className='status' color="#75969D">Finished</Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={3}>
                                        <Box className='color-green-black'>Bonus buy</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;20.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Players</Box>
                                        <Box color="white" fontWeight="bold"><FaUsers />&nbsp;2/2</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Created by</Box>
                                        <Box color="white" fontWeight="bold">Simon</Box>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xs-6 p-2'>
                            <div className='slot-card p-4'>
                                <img src="https://cdn.softswiss.net/i/s4/pragmaticexternal/BuffaloKingMegaways1.png" alt='' width="100%" />
                                <Box paddingY={2}>
                                    <Box className='title' color="white" fontSize="18px" fontWeight="bold">Buffalo King Megaways</Box>
                                    <Box className='status' color="#75969D">Finished</Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={3}>
                                        <Box className='color-green-black'>Bonus buy</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;20.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Players</Box>
                                        <Box color="white" fontWeight="bold"><FaUsers />&nbsp;2/2</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Created by</Box>
                                        <Box color="white" fontWeight="bold">Simon</Box>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='row mx-0 my-4'>
                        <div className='col-md-4 col-lg-3 col-xs-6 p-2'>
                            <div className='slot-card p-4'>
                                <img src="https://cdn.softswiss.net/i/s4/pragmaticexternal/BuffaloKingMegaways1.png" alt='' width="100%" />
                                <Box paddingY={2}>
                                    <Box className='title' color="white" fontSize="18px" fontWeight="bold">Buffalo King Megaways</Box>
                                    <Box className='status' color="#75969D">Finished</Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={3}>
                                        <Box className='color-green-black'>Bonus buy</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;20.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Players</Box>
                                        <Box color="white" fontWeight="bold"><FaUsers />&nbsp;2/2</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Total Wins</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;0.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Created by</Box>
                                        <Box color="white" fontWeight="bold">Simon</Box>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xs-6 p-2'>
                            <div className='slot-card p-4'>
                                <img src="https://cdn.softswiss.net/i/s4/pragmaticexternal/BuffaloKingMegaways1.png" alt='' width="100%" />
                                <Box paddingY={2}>
                                    <Box className='title' color="white" fontSize="18px" fontWeight="bold">Buffalo King Megaways</Box>
                                    <Box className='status' color="#75969D">Finished</Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={3}>
                                        <Box className='color-green-black'>Bonus buy</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;20.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Players</Box>
                                        <Box color="white" fontWeight="bold"><FaUsers />&nbsp;2/2</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Total Wins</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;0.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Created by</Box>
                                        <Box color="white" fontWeight="bold">Simon</Box>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xs-6 p-2'>
                            <div className='slot-card p-4'>
                                <img src="https://cdn.softswiss.net/i/s4/pragmaticexternal/BuffaloKingMegaways1.png" alt='' width="100%" />
                                <Box paddingY={2}>
                                    <Box className='title' color="white" fontSize="18px" fontWeight="bold">Buffalo King Megaways</Box>
                                    <Box className='status' color="#75969D">Finished</Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={3}>
                                        <Box className='color-green-black'>Bonus buy</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;20.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Players</Box>
                                        <Box color="white" fontWeight="bold"><FaUsers />&nbsp;2/2</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Total Wins</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;0.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Created by</Box>
                                        <Box color="white" fontWeight="bold">Simon</Box>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xs-6 p-2'>
                            <div className='slot-card p-4'>
                                <img src="https://cdn.softswiss.net/i/s4/pragmaticexternal/BuffaloKingMegaways1.png" alt='' width="100%" />
                                <Box paddingY={2}>
                                    <Box className='title' color="white" fontSize="18px" fontWeight="bold">Buffalo King Megaways</Box>
                                    <Box className='status' color="#75969D">Finished</Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={3}>
                                        <Box className='color-green-black'>Bonus buy</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;20.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Players</Box>
                                        <Box color="white" fontWeight="bold"><FaUsers />&nbsp;2/2</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Total Wins</Box>
                                        <Box color="white" fontWeight="bold"><FaCoins className='color-gold' />&nbsp;0.00</Box>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Box className='color-green-black'>Created by</Box>
                                        <Box color="white" fontWeight="bold">Simon</Box>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                open && (
                    <SlotArenaModal
                        games={all_games?.slice(0, 8)}
                        open={open}
                        handleClose={() => setOpen(false)}
                    />
                )
            }
        </Styles>
    )
}

export default SlotArenas