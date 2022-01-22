import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { MdSentimentSatisfiedAlt } from 'react-icons/md';
import { Styles } from "./styles";

const data = {
    en: 'English Room',
    ru: 'Russia Room',
    de: 'German Room',
    fr: 'France Room',
    es: 'Spanish Room'
}

const Chat = () => {

    const [show_menu, setShowMenu] = useState(false)
    const [room, setRoom] = useState('en')

    const onClickRoom = (item) => {
        setRoom(item)
        setShowMenu(false)
    }
    return (
        <Styles>
            <div className="chat float-left">
                <div className="px-2 py-3">
                    <div className="cursor-pointer lang-select position-relative">
                        <div
                            onClick={() => setShowMenu(!show_menu)}
                            className="color-green-black d-flex justify-content-between align-items-center p-2"
                            style={{ border: '2px solid #073e4a', borderRadius: '5px' }}
                        >
                            <div>{data[room]}</div>
                            <div className="d-flex align-items-center">
                                <span className="color-green-light">50,000</span>&nbsp;&nbsp;
                                <span className="dot"></span>&nbsp;&nbsp;
                                <FaChevronDown />
                            </div>
                        </div>
                        {
                            show_menu && (
                                <div className={`position-absolute w-100 p-2 rooms mt-2 ${show_menu ? `fade-in` : 'fade-out'}`}>
                                    <ul className='pl-0 mb-0' style={{ listStyleType: 'none' }}>
                                        <li className="py-1" onClick={() => onClickRoom('en')}>
                                            <div>
                                                <img src="img/lang/US.svg" alt="" width="20px" height="14px" />&emsp; English room
                                            </div>
                                            {
                                                room === 'en' && (
                                                    <FaCheck className="color-green-light" />
                                                )
                                            }
                                        </li>
                                        <li className="py-1" onClick={() => onClickRoom('ru')}>
                                            <div>
                                                <img src="img/lang/ru.png" alt="" width="20px" height="14px" />&emsp; Russia room
                                            </div>
                                            {
                                                room === 'ru' && (
                                                    <FaCheck className="color-green-light" />
                                                )
                                            }
                                        </li>
                                        <li className="py-1" onClick={() => onClickRoom('de')}>
                                            <div>
                                                <img src="img/lang/de.png" alt="" width="20px" height="14px" />&emsp; German room
                                            </div>
                                            {
                                                room === 'de' && (
                                                    <FaCheck className="color-green-light" />
                                                )
                                            }
                                        </li>
                                        <li className="py-1" onClick={() => onClickRoom('fr')}>
                                            <div>
                                                <img src="img/lang/fr.png" alt="" width="20px" height="14px" />&emsp; France room
                                            </div>
                                            {
                                                room === 'fr' && (
                                                    <FaCheck className="color-green-light" />
                                                )
                                            }
                                        </li>
                                        <li className="py-1" onClick={() => onClickRoom('es')}>
                                            <div>
                                                <img src="img/lang/es.png" alt="" width="20px" height="14px" />&emsp; Spanish room
                                            </div>
                                            {
                                                room === 'es' && (
                                                    <FaCheck className="color-green-light" />
                                                )
                                            }
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                    <div className="chat-list">
                        <div className="chat-item d-flex align-items-center py-3">
                            <img src="img/chat-img.png" alt="" width="32px" height="32px" />
                            <div className="ml-2 w-100">
                                <div className="d-flex align-items-center">
                                    <img src="img/chat-subimg1.png" alt="" width="15px" height="17px" />&nbsp;&nbsp;
                                    <span className="chat-sub"></span>&nbsp;&nbsp;
                                    <span className="color-white font-size--small">Zeldous</span>
                                </div>
                                <div className="chat-text color-green-black p-2">
                                    Hey, How is it going?
                                </div>
                            </div>
                        </div>
                        <div className="chat-item d-flex align-items-center py-3">
                            <img src="img/chat-img.png" alt="" width="32px" height="32px" />
                            <div className="ml-2 w-100">
                                <div className="d-flex align-items-center">
                                    <img src="img/chat-subimg1.png" alt="" width="15px" height="17px" />&nbsp;&nbsp;
                                    <span className="chat-sub"></span>&nbsp;&nbsp;
                                    <span className="color-white font-size--small">Zeldous</span>
                                </div>
                                <div className="chat-text color-green-black p-2">
                                    Hey, How is it going?
                                </div>
                            </div>
                        </div>
                        <div className="chat-item d-flex align-items-center py-3">
                            <img src="img/chat-img.png" alt="" width="32px" height="32px" />
                            <div className="ml-2 w-100">
                                <div className="d-flex align-items-center">
                                    <img src="img/chat-subimg1.png" alt="" width="15px" height="17px" />&nbsp;&nbsp;
                                    <span className="chat-sub"></span>&nbsp;&nbsp;
                                    <span className="color-white font-size--small">Zeldous</span>
                                </div>
                                <div className="chat-text color-green-black p-2">
                                    Hey, How is it going?
                                </div>
                            </div>
                        </div>
                        <div className="chat-item d-flex align-items-center py-3">
                            <img src="img/chat-img.png" alt="" width="32px" height="32px" />
                            <div className="ml-2 w-100">
                                <div className="d-flex align-items-center">
                                    <img src="img/chat-subimg1.png" alt="" width="15px" height="17px" />&nbsp;&nbsp;
                                    <span className="chat-sub"></span>&nbsp;&nbsp;
                                    <span className="color-white font-size--small">Zeldous</span>
                                </div>
                                <div className="chat-text color-green-black p-2">
                                    Hey, How is it going?
                                </div>
                            </div>
                        </div>
                        <div className="chat-item d-flex align-items-center py-3">
                            <img src="img/chat-img.png" alt="" width="32px" height="32px" />
                            <div className="ml-2 w-100">
                                <div className="d-flex align-items-center">
                                    <img src="img/chat-subimg1.png" alt="" width="15px" height="17px" />&nbsp;&nbsp;
                                    <span className="chat-sub"></span>&nbsp;&nbsp;
                                    <span className="color-white font-size--small">Zeldous</span>
                                </div>
                                <div className="chat-text color-green-black p-2">
                                    Hey, How is it going?
                                </div>
                            </div>
                        </div>
                        <div className="chat-item d-flex align-items-center py-3">
                            <img src="img/chat-img.png" alt="" width="32px" height="32px" />
                            <div className="ml-2 w-100">
                                <div className="d-flex align-items-center">
                                    <img src="img/chat-subimg1.png" alt="" width="15px" height="17px" />&nbsp;&nbsp;
                                    <span className="chat-sub"></span>&nbsp;&nbsp;
                                    <span className="color-white font-size--small">Zeldous</span>
                                </div>
                                <div className="chat-text color-green-black p-2">
                                    Hey, How is it going?
                                </div>
                            </div>
                        </div>
                        <div className="chat-item d-flex align-items-center py-3">
                            <img src="img/chat-img.png" alt="" width="32px" height="32px" />
                            <div className="ml-2 w-100">
                                <div className="d-flex align-items-center">
                                    <img src="img/chat-subimg1.png" alt="" width="15px" height="17px" />&nbsp;&nbsp;
                                    <span className="chat-sub"></span>&nbsp;&nbsp;
                                    <span className="color-white font-size--small">Zeldous</span>
                                </div>
                                <div className="chat-text color-green-black p-2">
                                    Hey, How is it going?
                                </div>
                            </div>
                        </div>
                        <div className="chat-item d-flex align-items-center py-3">
                            <img src="img/chat-img.png" alt="" width="32px" height="32px" />
                            <div className="ml-2 w-100">
                                <div className="d-flex align-items-center">
                                    <img src="img/chat-subimg1.png" alt="" width="15px" height="17px" />&nbsp;&nbsp;
                                    <span className="chat-sub"></span>&nbsp;&nbsp;
                                    <span className="color-white font-size--small">Zeldous</span>
                                </div>
                                <div className="chat-text color-green-black p-2">
                                    Hey, How is it going?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 chat-input">
                    <div className="p-2 d-flex justify-content-between align-items-center">
                        <textarea className="msg-input background-transparent color-green-black w-100" rows="1" placeholder="Say something..."></textarea>
                        <MdSentimentSatisfiedAlt style={{ color: '#33C16C', fontSize: '32px' }} />
                    </div>
                </div>
            </div>
        </Styles >
    )
}

export default Chat