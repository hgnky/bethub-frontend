import styled from "styled-components";

export const Styles = styled.section`

    position: relative;
    
    .btn-slide {
        position: absolute;
        left: 10px;
        top: 10px;
        background-color: #112F37;
        border-radius: 4px;
        border: 2px solid rgb(7,62,74);
        display: flex;
    }
    
    .slot-wrapper {
        width: 85%;
        margin: auto;
    }

    div.top {
        background: linear-gradient(180deg, rgba(14, 38, 45, 0) 0%, #0E262D 100%);
        border-radius: 12px;
        height: 250px;
        border: 2px solid rgb(7,62,74);
    }

    .casino-section-title {
        min-width: 135px;
        color: #FFE400;
        background-image: url('img/section-title-background.png');
        background-repeat: no-repeat;

    }

    .home-tables {
        background: #0B1E24;
        border-radius: 8px 8px 0px 0px;
    }

    .home-tables > td {
        font-family: Rubik;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;

        color: #253D44;
    }

    div[role='tabpanel'] .MuiBox-root {
        padding-left: 0;
        padding-right: 0;
    }

    .game-info {
        position: absolute;
        left: 30px;
        bottom: 50px;
    }

    .game-title {
        color: white;
        text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.42);
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.2rem;
    }

    .game-desc {
        font-weight: bold;
        font-size: 0.8rem;
        line-height: 1rem;
        color: #00ffe7;
        opacity: 0.5;
    }

    @media screen and (max-width: 1367px) {
        .game-info {
            position: absolute;
            left: 20px;
            bottom: 20px;
        }
    }

    @media screen and (max-width: 768px) {
        .btn-slide {
            display: none
        }

        .slot-wrapper {
            width: 95%;
            margin: auto;
        }

        .game-info {
            position: absolute;
            left: 15px;
            bottom: 15px;
        }
    }
`