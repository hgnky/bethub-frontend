import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft } from 'react-icons/fa'
import { Styles } from "./styles";
import { SHOW_SIDEBAR } from '../../store/types';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const dispatch = useDispatch(null)
    const { show_sidebar } = useSelector(state => state.animation)

    const hide = () => {
        dispatch({
            type: SHOW_SIDEBAR,
            payload: false
        })
    }

    return (
        <Styles>
            <div className={`sidebar ${show_sidebar === true ? `sidebar-show position-xs-left` : `d-none`}`}>
                <div className="py-2">
                    <div className="px-4 logo d-flex justify-content-between align-items-center">
                        <Link to="/">
                            <img src="img/logo.png" alt="Buthub" />
                        </Link>
                        <button type='button' className='btn d-flex p-1' onClick={hide}>
                            <FaChevronLeft className='m-auto' style={{ fontSize: '20px', color: '#75969D' }} />
                        </button>
                    </div>
                    <div className='mt-6'>
                        <div className='casino-menu'>
                            <div className='px-4 font-size--small font--bold' style={{ color: '#4A626B' }}>CASINO</div>
                            <ul className='pl-0' style={{ listStyleType: 'none' }}>
                                <li className='px-4 py-2 color-white active d-flex'>
                                    <Link to="/slots" className='w-100 d-block'>
                                        <img src='img/new_icons/Slots.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Slots
                                    </Link>
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <img src='img/new_icons/live.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Live Shows
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <Link to="/slot-arenas" className='w-100 d-block'>
                                        <img src='img/new_icons/swords_1.svg' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Slot Arena
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='original-menu'>
                            <div className='px-4 font-size--small font--bold' style={{ color: '#4A626B' }}>ORIGINALS</div>
                            <ul className='pl-0' style={{ listStyleType: 'none' }}>
                                <li className='px-4 py-2 color-white'>
                                    <Link to="roulette" className='w-100 d-block'>
                                        <img src='img/new_icons/Roulette.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Roulette
                                    </Link>
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <img src='img/new_icons/crash.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Crash
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <img src='img/new_icons/Jackpot.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Jackpot
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <img src='img/new_icons/coinflip.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Coinflip
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <img src='img/new_icons/Dice.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Dice
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <img src='img/new_icons/cases.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Cases
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <img src='img/new_icons/MineSweeper.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Minesweeper
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <img src='img/new_icons/Tower.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Tower
                                </li>
                                <li className='px-4 py-2 color-white'>
                                    <img src='img/new_icons/plinko.png' alt='' width="24px" height="24px" />&nbsp;&nbsp;&nbsp;&nbsp;Plinko
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-4 mt-6'>
                        <div className='mt-4'>
                            <div className='py-2 color-green-black'>Affliates</div>
                            <div className='py-2 color-green-black'>Promotions</div>
                            <div className='py-2 color-green-black'>Leaderboard</div>
                            <div className='py-2 color-green-black'>Live Support</div>
                        </div>
                    </div>
                </div>
                <div className='mt-4' style={{ background: 'linear-gradient(274.28deg, rgba(255, 195, 76, 0.12) 0%, rgba(255, 195, 76, 0) 100%), #0F232A' }}>
                    <div className='px-4 py-2'>
                        <div className='d-flex align-items-center'>
                            <img src="img/pirate-treasure.png" width="40px" height="40px" alt='' />
                            <div className='d-flex flex-direction-column px-3'>
                                <div style={{ color: '#FFC34C', textShadow: '2px 2px 5px' }}>Exclusive Rewards</div>
                                <div className='color-white'>Explore Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default Sidebar