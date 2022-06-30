import styled from "@emotion/styled";
import {default as globalStyles} from "../../globalStyles.json";

export const ModalCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    background-color: #fff;
    position:absolute;
    top:100%;
    right:0;
    z-index:10;
    

    .minicart__total{
        display:flex;
        justify-content:space-between;
        margin-top:32px;

        .total__text{
            font-family: "Roboto", "Raleway", sans-serif;
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
        }

        .total__price{
            font-weight: 700;
            font-size: 16px;
            line-height: 160%;
        }
    }

    .bag{
        font-size:16px;
        line-height:25px;
        font-weight: 500;
        margin: 0 0 32px;
    }
     .bold-text{
        font-weight:700;
    }
    .minicart__products-list{
        display:flex;
        flex-direction:column;
        gap:40px;

        max-height:60vh;
        overflow-y:scroll;

        ::-webkit-scrollbar-track {
        border: 1px solid transparent;
        padding: 2px 0;
        background-color: transparent;
        }

        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #f1f1f1;
            border: 1px solid #f1f1f1;
            transform: rotate(180deg);
        }
    }

    .minicart__links{
        display:flex;
        justify-content:space-between;
        margin-top:32px;
    }
    .minicart__link{
        color: #1D1F22;
        text-decoration: none;
        text-transform:uppercase;
        font-weight: 600;
        font-size: 14px;
        line-height: 120%;
        width:140px;
        height:43px;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#fff;
        border:1px solid #1D1F22;
        transition:background-color 0.1s ease-in-out, border 0.1s ease-in-out, color 0.1s ease-in-out;

        :hover{
            background-color:${globalStyles["--c-primary"]};
            color:#fff;
            border:1px solid ${globalStyles["--c-primary"]};
        }
    }
    `
