import styled from "@emotion/styled";

export const FullProductContainer = styled.li`
    display:flex;
    cursor: auto !important;
    width: 100%;
    .product__image{
        width:121px;        
        object-fit:contain;
    }

    .product__info{
        width:164px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product__name{
        font-weight: 300;
        font-size: 16px;
        line-height: 160%;
        text-transform: none;
        overflow-wrap: anywhere;
    }
    .price{
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
    }
    .counter{
        margin:0 8px 0 4px;
        padding: 2px 0;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items: center;

        button{
            cursor:pointer;
            border: 1px solid #1D1F22;
            border-radius:0;
            background-color: #fff;
            :hover{
                background-color: #1D1F22;
                color:#fff;
            }
        }
        .plus, .minus{
            width:24px;
            height:24px;
            position:relative;

        }
        .plus::after, .plus::before, .minus::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width:8px;
            border: 1px solid #1D1F22;
            border-radius: 1px;
            background-color: #1D1F22;
        }
        .plus::after {
            transform: translate(-50%,-50%) rotate(90deg);
        }

        .minus:hover::after, .plus:hover::before,.plus:hover::after {
            border-color: #fff;
            background-color: #fff;

        }            
    }

    .attributes{
        flex-direction:column;
    }

    .attribute__item{
        cursor:default !important;
    }

    .attribute__name{
        margin:8px 0;
        cursor:default;
        text-transform:none;
    }

    .buttons{
        cursor:auto;
        padding:3px !important;
        display:flex;
        gap :5px;
        flex-wrap:wrap;
        align-items:flex-end;
    }

    &.full-size{

        .product__info{
            width:100%
        }
        .product__name{
            font-weight: 600;
            font-size: 30px;
            sline-height: 27px;
            span{
                display:inline-block;
                margin-top:16px;
                font-weight: 400;
                font-size: 30px;
                line-height: 27px;
            }
        }

        .price{
            margin:20px 0;
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;

        }

        .attributes{
            padding:0;
            .buttons{
                gap: 8px;
            }

            .attribute__name{
                font-weight: 700;
                font-size: 18px;
                line-height: 18px;
                text-transform:uppercase;
            }
        }
        .product__image{
            width: 200px;
        }
        .counter__button{
            width:45px;
            height:45px;
        }
        
        .plus::after, .plus::before, .minus::after {
            width:15px;
        }
        .arrow__rotate{
            transform: rotate(180deg);
        }

        .img-slider__container{
            position:relative;
            display:flex;
            align-items:center;
            .slider-btns__container{
                position:absolute;
                bottom:16px;
                right:16px;
                display:flex;
                gap:8px;
                .slider__btn{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:24px;
                    height:24px;
                    background: rgba(0, 0, 0, 0.73);
                    border:none;
                    cursor:pointer;
                    :hover{
                        background: rgba(0, 0, 0, 0.9);
                    }
                }
            }
        }

    }
`
