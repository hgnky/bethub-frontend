import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FaDiscord, FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MdGroup } from 'react-icons/md'
import { Styles } from './styles';

const Footer = () => {
    return (
        <Styles>
            <div className='px-6 main_footer px-xs-2'>
                <Grid container spacing={2} className='px-6'>
                    <Grid item xs={12} md={6} display='flex' alignItems="center" className='px-0' borderBottom="1px solid #0F2D34">
                        <Grid container>
                            <Grid item xs={12} md={5} lg={5}>
                                <img className='d-xs-none' src='img/logo.png' alt='' width="170px" height="66px" />
                            </Grid>
                            <Grid item xs={12} md={7} lg={7} className='d-flex align-items-center'>
                                <Box marginLeft={2} className="d-flex flex-direction-row justify-content-center align-items-center col-xs-12 ml-xs-0">
                                    <button className='btn' style={{ display: 'flex', maxHeight: '40px', background: '#112F37', borderRadius: '5px', marginLeft: '10px', marginRight: '10px', padding: '10px', color: '#75969D' }}><FaDiscord /></button>
                                    <button className='btn' style={{ display: 'flex', maxHeight: '40px', background: '#112F37', borderRadius: '5px', marginLeft: '10px', marginRight: '10px', padding: '10px', color: '#75969D' }}><FaTwitter /></button>
                                    <button className='btn' style={{ display: 'flex', maxHeight: '40px', background: '#112F37', borderRadius: '5px', marginLeft: '10px', marginRight: '10px', padding: '10px', color: '#75969D' }}><FaInstagram /></button>
                                    <button className='btn' style={{ display: 'flex', maxHeight: '40px', background: '#112F37', borderRadius: '5px', marginLeft: '10px', marginRight: '10px', padding: '10px', color: '#75969D' }}><FaTelegram /></button>
                                    <button className='btn' style={{ display: 'flex', maxHeight: '40px', background: '#112F37', borderRadius: '5px', marginLeft: '10px', marginRight: '10px', padding: '10px', color: '#75969D' }}><FaFacebook /></button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} className='px-0 justify-content-xs-center' textAlign="right" display="flex" justifyContent="end" borderBottom="1px solid #0F2D34">
                        <Box className='footer-all-bets px-4 py-2 font-size--small' margin={2}>
                            <Box sx={{ color: '#ACCAD0' }}>50,000</Box>
                            <Box sx={{ color: '#33C16C', textShadow: '2px 0px 5px' }}>
                                All Time Bets
                                <MdGroup />
                            </Box>
                        </Box>
                        <Box margin={2} className='px-4 py-2 font-size--small' sx={{ background: 'linear-gradient(225deg, rgba(51, 193, 108, 0.08) 0%, rgba(51, 193, 108, 0) 100%), #112F37', borderRadius: '8px' }}>
                            <Box sx={{ color: '#ACCAD0' }}>50,000</Box>
                            <Box sx={{ color: '#33C16C', textShadow: '2px 0px 5px' }}>
                                Register Users
                                <MdGroup />
                            </Box>
                        </Box>
                        <Box margin={2} className='px-4 py-2 font-size--small' sx={{ background: 'linear-gradient(225deg, rgba(51, 193, 108, 0.08) 0%, rgba(51, 193, 108, 0) 100%), #112F37', borderRadius: '8px' }}>
                            <Box sx={{ color: '#ACCAD0' }}>50,000</Box>
                            <Box sx={{ color: '#33C16C', textShadow: '2px 0px 5px', display: 'flex', alignItems: 'center' }}>
                                Playing Live
                                <span className='dot ml-2'></span>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <div className='row py-6 px-6'>
                    <div className='col-md-12 col-lg-6 col-12 px-0 d-flex justify-content-xs-center'>
                        <img src='img/license-colored.png' alt='' />
                        <Box fontSize="12px" lineHeight="14px" marginLeft="16px" color="#3C6973">
                            Bethub.GG is operated by The Gaming Company S and N LTD. (Commercial register of Curaçao no.87909, Emancipatie Boulevard Dominico F. "Don" Martina 31, Curaçao) under a sublicense CIL pursuant to Master gaming License #5536/JAZ.
                        </Box>
                    </div>
                    <div className='col-md-12 col-lg-6 col-12 d-flex flex-direction-row justify-content-end justify-content-xs-center'>
                        <button className='btn btn-circle border-circle d-flex align-items-center justify-content-center mx-1 p-2 footer-circle-button'>
                            <img src='img/methods/footer-icon1.png' alt='' />
                        </button>
                        <button className='btn btn-circle border-circle d-flex align-items-center justify-content-center mx-1 p-2 footer-circle-button'>
                            <img src='img/methods/footer-icon2.png' alt='' />
                        </button>
                        <button className='btn btn-circle border-circle d-flex align-items-center justify-content-center mx-1 p-2 footer-circle-button'>
                            <img src='img/methods/footer-icon3.png' alt='' />
                        </button>
                        <button className='btn btn-circle border-circle d-flex align-items-center justify-content-center mx-1 p-2 footer-circle-button'>
                            <img src='img/methods/footer-icon4.png' alt='' />
                        </button>
                        <button className='btn btn-circle border-circle d-flex align-items-center justify-content-center mx-1 p-2 footer-circle-button'>
                            <img src='img/methods/footer-icon5.png' alt='' />
                        </button>
                        <button className='btn btn-circle border-circle d-flex align-items-center justify-content-center mx-1 p-2 footer-circle-button'>
                            <img src='img/methods/footer-icon6.png' alt='' />
                        </button>
                        <button className='btn btn-circle border-circle d-flex align-items-center justify-content-center mx-1 p-2 footer-circle-button'>
                            <img src='img/methods/footer-icon7.png' alt='' />
                        </button>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default Footer