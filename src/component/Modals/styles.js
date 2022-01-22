import styled from "styled-components";

export const Styles = styled.div`

    div[role='tabpanel'] > .MuiBox-root {
        padding-left: 0;
        padding-right: 0;
    }

    div.balance1 {
        background: radial-gradient(63.27% 100% at 63.27% 100%, rgba(91, 240, 151, 0.08) 0%, rgba(0, 0, 0, 0) 100%), #112F37;
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.32);
        border-radius: 4px;
    }

    .search-input span, .search-input input {
        border: 2px solid rgb(7, 62, 74);
    }

    .search-input input {
        max-width: 150px;
        border-left: 0 !important;
    }

    .splitter {
        border: 1px solid #08191E;
        margin: 0 !important;
    }

    .MuiOutlinedInput-input {
        color: white !important;
    }
    
`