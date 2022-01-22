import styled from "styled-components";

export const Styles = styled.section`

    .page-title {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;

        color: white;
        // border-top: 0;
        // border-left: 0;
        // border-right: 0;
        // border-bottom : 3px solid radial-gradient(50% 50% at 50% 50%, #094F25 0%, #33C16C 100%);
        // box-shadow: 0px 0px 12px #33C16C;
    }

    .slots-section-title {
        min-width: 150px;
        color: #FFFFFF;
        background-image: url(img/section-title-background.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        font-weight: bold;
    }

    .search-input span, .search-input input {
        border: 2px solid rgb(7, 62, 74);
    }

    .search-input input {
        border-left: 0 !important;
    }

    .top-imgs {
        width: 20%;
    }

    .mask {
        background-color: #000;
        opacity: 0.6;
        border-radius: 8px;
    }

    .description {
        background-color: black;
        opacity: 0.5;
        border-radius: 0 0 8px 8px;
    }

    .hot-slot-title {
        text-align: center !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        color: white !important;
    }

    .hot-slot-desc {
        text-align: center !important;
        font-size: 12px !important;
        font-weight: 600 !important;
        color: #3ea2bd !important;
    }

    .description {
        display: block !important;
    }

    .MuiFormControl-root {
        margin: 0 !important;
    }

    .popular-games {
        border-radius: 8px;
    }

    @media screen and (max-width: 1366px) {
        .hot-slot-title {
            font-size: 12px !important;
        }
        .hot-slot-desc {
            font-size: 10px !important;
        }
    }

    @media screen and (max-width: 992px) {
        .description {
            display: none !important;
        }
    }

`