import styled from "styled-components";

export const Styles = styled.section`

    ul li a {
        text-decoration: none;
        color: white;
    }
    
    .sidebar, .chat {
        width: 260px;
        background: #0B1E24;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.56);
        height: 100%;
    }

    .logo img {
        width: 154px;
        height: 62px;
        background: url(logo (8).png);
    }

    .logo button {
        background: #112F37;
        border-radius: 4px;       
    }

    .lang-select {
        height: 43px;
        background: #10262D;
        border-radius: 4px;
    }

    .dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #33C16C;
        box-shadow: 0px 0px 1px 3px green;
    }

    .chat-sub {
        display: block;
        width: 36px;
        height: 18px;
        background: radial-gradient(50% 50% at 50% 50%, #094F25 0%, #33C16C 100%);
        border-radius: 4px;
    }

    .chat-text {
        background: #0F232A;
        border-radius: 4px;
        border: 1px solid #052e1f;
        font-size: 12px;
    }

    .chat-input {
        background: #0F232A;
    }

    .msg-input:focus-visible {
        outline-offset: none;
    }

    .search-input span, .search-input input {
        border: 2px solid rgb(7, 62, 74);
    }

    .search-input input {
        max-width: 150px;
        border-left: 0 !important;
    }

    div.balance {
        background: radial-gradient(63.27% 100% at 63.27% 100%, rgba(91, 240, 151, 0.08) 0%, rgba(0, 0, 0, 0) 100%), #112F37;
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.32);
        border-radius: 4px;
    }

    div.claim_rankback {
        background: radial-gradient(50% 50% at 50% 50%, rgba(17, 47, 55, 0) 0%, #112F37 100%);
        border-radius: 4px;
        color: #FFE505;
        text-shadow: 2px 0px 8px;
    }

    .btn-bell {
        background: #0D1F24;
        border: 1px solid #112D35;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .badge {
        background: radial-gradient(50% 50% at 50% 50%, rgba(29, 51, 58, 0) 0%, #1D333A 100%), #1B2629;
        width: 20px;
        height: 20px;
        font-size: 10px;
        padding: 0;
        bottom: -5px;
        right: -5px;
        color: #FFE505;
        text-shadow: 2px 0px 8px;
    }

    .header {
        border-bottom: 2px solid #021a08;
    }

    .header-bottom-left {
        width: 42px;
        height: 2px;
        background: radial-gradient(50% 50% at 50% 50%, #FFE400 0%, #9F900F 100%);
        box-shadow: 0px 0px 12px #FFE400;
        border-radius: 5px;
    }

    .header-bottom-right {
        width: 100%;
        height: 2px;
        background: #112D35;
        border-radius: 5px;
    }

    .footer-all-bets {
        background-image: url(img/footer-all-bets-background.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .footer-circle-button {
        background: linear-gradient(225deg, rgba(247, 147, 26, 0) 0%, rgba(247, 147, 26, 0.18) 100%), #112F37;
        width: 40px;
        height: 40px;
    }

    .rooms {
        background-color: #10262d;
        z-index: 999;
        border: 2px solid #073e4a;
        border-radius: 5px;
    }

    .rooms ul li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    @keyframes slide-show {
        0% {
            opacity: 0;
            transform: translateX(-300px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .sidebar-show {
        animation: slide-show .5s;
    }

    @keyframes slide-hide {
        0% {
            opacity: 0;
            transform: translateX(px);
        }
        to {
            opacity: 1;
            transform: translateX(-300px);
        }
    }

    .sidebar-hide {
        position: absolute;
        left: 0;
        display: none;
        animation: slide-hide .5s;
    }

    .btn-navmenu {
        display: none;
    }

    .balance, .claim-rank-wrapper, .home {
        display: block;
    }

    @media screen and (max-width: 992px) {
        .btn-navmenu {
            display: block;
        }
        .balance, .home {
            display: none !important;
        }
        .chat {
            width: 100% !important;
            padding: 16px;
        }
        .chat-list {
            max-height: 300px !important;
            overflow-y: auto;
        }
        .position-xs-left {
            position: absolute;
            left: 0;
            z-index: 999;
        }
    }

    ul li {
        cursor: pointer;
    }

    ul li:hover {
        background-color: #3a504b4d;
    }

    .active {
        background: linear-gradient(90deg, rgba(51, 193, 108, 0.1) 0%, rgba(51, 193, 108, 0) 100%);
        border-left: 4px solid green;
    }

    textarea {
        border: none !important;
    }

`