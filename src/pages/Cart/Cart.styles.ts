import styled from "@emotion/styled";
import {default as globalStyles} from "../../globalStyles.json";

export const CartContainer = styled.div`
    padding-bottom: 40px;
    
    ul{
        list-style: none;
        margin:0;
    }
    .title{
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        text-transform:uppercase;
        margin-top:80px;
        margin-bottom:55px;
    }
    
    .cart-items{
        padding:0;
        border-top: 1px solid #E5E5E5;
        &>li{
            border-bottom: 1px solid #E5E5E5;
            padding:24px 0;
        }
    }


    .tax,
    .quantity,
    .cart-total{
        display:flex;
        gap:10px;
        margin-top:8px;
    }

    .tax {
        margin-top:32px;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        .price {
            font-weight: 700;
        }
    }
    .quantity {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        .number {
            font-weight: 700;
        }
    }
    .cart-total {
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        gap:44px;
        .price {
            font-weight: 700;
        }
    }
    .order-btn{
        margin-top:20px;
        text-transform:uppercase;
        padding: 16px 32px;
        font-weight: 600;
        font-size: 14px;
        line-height: 120%;
        width:279px;
        color:#fff;
        border:none;
        background-color: ${globalStyles["--c-primary"]};
        transition: background-color 0.1s ease;
        cursor:pointer;
         :hover{
            background-color: #20d14e;
            color:#fff;
         }
    }
        `