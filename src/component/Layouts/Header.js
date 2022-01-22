import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdHome, MdLogin } from 'react-icons/md'
import { Styles } from "./styles";
import { FaSearch, FaBell, FaBars } from 'react-icons/fa';
import { Button } from '@mui/material';
import { SHOW_SIDEBAR } from '../../store/types';
import FundModal from '../Modals/FundModal';
import WithdrawModal from '../Modals/WithdrawModal';
import LoginModal from '../Modals/LoginModal';

const Header = () => {

    const dispatch = useDispatch(null)
    const [openFundModal, setOpenFundModal] = useState(false)
    const [openWithdrawModal, setOpenWithdrawModal] = useState(false)
    const [openLoginModal, setOpenLoginModal] = useState(false)
    const { show_sidebar } = useSelector(state => state.animation)

    return (
        <Styles>
            <div className="header px-6 py-3 px-xs-2 py-xs-1">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-center home' style={{ width: '50px' }}>
                            <MdHome className='background-white border-circle' style={{ fontSize: '24px' }} />
                        </div>
                        <div className="input-group ml-4 ml-xs-0 search-input">
                            <span className="input-group-text background-transparent color-green-black"><FaSearch /></span>
                            <input
                                type="text"
                                className="form-control background-transparent color-white font-size--small"
                                placeholder="Search games..."
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2 balance">
                        <img src="img/coins1.png" alt="" width="16px" height="20px" />
                        <span className="color-white ml-2 mr-4 font-size--small">500.00</span>
                        <button onClick={() => setOpenFundModal(true)} type="button" className="btn p-1 ml-3 d-flex" style={{ backgroundColor: '#FFE400' }}>
                            <img src="img/wallet-svgrepo-com.png" alt="" width="15px" height="15px" />
                        </button>
                    </div>
                    <div className="d-flex align-items-center claim-rank-wrapper">
                        <div className="claim_rankback py-2 px-3 d-xs-none font-size--small">Claim Rankback</div>
                        <Button className="p-2 mx-2 btn-bell d-xs-none" onClick={() => setOpenWithdrawModal(true)}>
                            <FaBell style={{ color: '#3B464A', fontSize: '18px' }} />
                        </Button>
                        <Button className="p-2 mx-2 btn-bell d-xs-none" onClick={() => setOpenLoginModal(true)}>
                            <MdLogin style={{ color: '#3B464A', fontSize: '18px' }} />
                        </Button>
                        <div className='ml-4 position-relative'>
                            <img src='img/chat-img.png' alt='' width='36px' height="36px" />
                            <span className='d-flex justify-content-center align-items-center position-absolute border-circle badge color-white'>12</span>
                        </div>
                        <Button className="btn-navmenu" onClick={() => {
                            dispatch({
                                type: SHOW_SIDEBAR,
                                payload: !show_sidebar
                            })
                        }}><FaBars className='color-green-black' /></Button>
                    </div>
                </div>
                <div className='w-100 mt-2 d-flex justify-content-between'>
                    <div className='header-bottom-left'></div>
                    <div className='header-bottom-right'></div>
                </div>
            </div>
            {
                openFundModal && (
                    <FundModal open={openFundModal} handleClose={() => setOpenFundModal(false)} />
                )
            }
            {
                openWithdrawModal && (
                    <WithdrawModal open={openWithdrawModal} handleClose={() => setOpenWithdrawModal(false)} />
                )
            }
            {
                openLoginModal && (
                    <LoginModal open={openLoginModal} handleClose={() => setOpenLoginModal(false)} />
                )
            }
        </Styles >
    )
}

export default Header;