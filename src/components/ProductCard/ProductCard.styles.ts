import styled from "@emotion/styled";
import {default as globalStyles} from "../../globalStyles.json"

export const StyledCard = styled.li`
    padding:16px;
    position:relative;
    &:hover .add-to-cart{
            opacity:1;
        }

    &:hover{
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
    .out-of-stock__sheet{
        position:absolute;
        background-color:#fff;
        width:100%;
        height:100%;
        opacity:0.5;
        top:0;
        left:0;
        z-index:3;
    }

    .card__upper-container{
        position:relative;
        width: 354px;
        height: 330px;
        
    }
    .add-to-cart{
    position:absolute;
    top: 292px;
    right: 31px;
    background-color:${globalStyles["--c-primary"]};
    width:52px;
    height:52px;
    border-radius:100%;
    transform:translateY(50%);
    cursor:pointer;
    opacity:0;
    transition:opacity 400ms ease;
    .add-to-cart__img{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }


    }

    .out-of-stock__text{
        font-weight: 400;
        font-size: 24px;
        line-height: 160%;
        position:absolute;
        top:50%;
        left:50%;
        text-transform:uppercase;
        transform:translate(-50%,-50%);
        z-index:2;
    }
    
    .card__img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }

    .card__text{
        margin:24px 0 0;
        font-weight:300;
        font-size:18px;
        line-height: 160%;
    }

    .card__price{
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;  
    }
`