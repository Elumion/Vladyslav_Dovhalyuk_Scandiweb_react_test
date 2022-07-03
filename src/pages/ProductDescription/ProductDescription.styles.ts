import styled from "@emotion/styled";
import {default as globalStyles} from "../../globalStyles.json"

export const ProductDescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap:100px;
    padding-bottom: 40px;

    ul{
        margin:0;
        padding:0;
    }

    .selected-img{
        width:610px;
        height:fit-content;
        object-fit: contain;
    }

    .product__images{
        display: flex;
        flex-direction: row-reverse;
        gap: 40px;
    }
    .gallery__list {
        list-style:none;
        display: flex;
        flex-direction: column;

    }
    .gallery__item {
        cursor: pointer;
    }

    .gallery__img {
    }

    .product__info {
        width: 292px;
    }
    .product__brand {
        font-weight: 600;
        font-size: 30px;
        line-height: 27px;
        margin-bottom:16px;
    }
    .product__name {
        font-weight: 400;
        font-size: 30px;
        line-height: 27px;
    }

    .attribute__item {
        margin-top:24px;
        list-style:none;
        ul{
            list-style:none;
        }
        .item__name {
            margin-bottom:10px;
            font-weight: 700;
            font-size: 18px;
            line-height: 18px;
        }
        .attribute__buttons {
            display:flex;
            gap:12px;
        }
        .button__item {
        }
    }

    .price__text {
        margin-top:38px;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
    }
    .price__number {
        margin-top:10px;
        font-size: 24px;
        font-weight: 700;
        line-height: 18px;
    }

    .add-to-cart__btn{
        text-transform:uppercase;
        margin-top:20px;
        padding:15px 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 120%;
        width:100%;
        cursor:pointer;
        border:1px solid ${globalStyles["--c-primary"]};
        color: #FFFFFF;
        background-color:${globalStyles["--c-primary"]};
        transition: background-color 100ms ease-in-out, color 100ms ease-in-out, border 100ms ease-in-out;
        :hover{
            border:1px solid #1D1F22;
            color: #1D1F22;
            background-color:#fff;

        }

        &.disabled{
            background-color: #e6e6e6 !important;
            color: #8c8c8c !important;
            border:1px solid #e6e6e6 !important;
        }
    }

    #descriptionHTML{
        margin-top:40px;
        font-familty: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 159.96%;

    }
`
