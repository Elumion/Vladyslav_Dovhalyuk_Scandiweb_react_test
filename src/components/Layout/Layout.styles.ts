import styled from "@emotion/styled";
import {default as globalStyles} from "../../globalStyles.json";

const arrow: string = require("../../assets/arrow_down.svg").default;

export const HeaderContainer = styled.header`
    display:flex;
    
    padding: 24px 0  0;
    margin-bottom:80px;
    z-index: 8;
    background: #fff;
    position: relative;
    
    .header__inner-container{
        width:100%;
        display: flex;
        justify-content:space-between;
        align-items:baseline;
        position:relative;

        ul{
            padding:0;
            margin:0;
            list-style:none;
            display:flex;
            
            & .active__url a{
                color:${globalStyles["--c-primary"]};
                border-bottom:2px solid ${globalStyles["--c-primary"]};
                padding-bottom:30px;

                }

            li{
                font-weight:400;
                font-size:16px;
                line-height: 120%;
                text-transform:uppercase;
                /* cursor:pointer; */
                a{
                    padding: 4px 16px 32px;
                    text-decoration:none;
                    display:inline-block;
                    color:inherit;

                    &:hover{
                        color:${globalStyles["--c-primary"]};
                        border-bottom:2px solid ${globalStyles["--c-primary"]};
                        padding-bottom:30px;
                    }
                }
                

            }
        }

        .logo{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        .actions__container{
            display:flex;
            gap:22px;
            align-items:baseline;
            .currency{
                width:38px;
                text-align:center;
                font-size:18px;
                font-weight:500;
                line-height: 160%;
                position:relative;
                cursor:pointer;
                &::after{
                    content:"";
                    position:absolute;
                    bottom: 10px;
                    right: 0;
                    background-image: url(${arrow});
                    background-repeat:no-repeat;
                    background-size:contain;
                    width:6px;
                    height:3px;
                    
                }



                .currencies__list{
                    display:none;
                    position:absolute;
                    z-index: 11;
                    background-color: #fff;
                    left:-7px;
                    /* display:flex; */
                    flex-direction:column;
                    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
                    .currency__item{
                        width:70px;
                        text-align:left;
                        padding: 13px 20px;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 160%;
                        :hover{
                            background-color:#EEEEEE;
                        }
                    }
                }

                &.show .currencies__list{
                    display:flex;
                }
                &.show::after{
                    transform:rotate(180deg) ;
                }
            }
        }

        .cart__layout-container{
            position:relative;
            cursor:pointer;
            .items__count{
                position:absolute;
                top: -25%;
                right: -70%;
                width:20px;
                height:20px;
                text-align:center;
                border-radius:100%;
                font-weight:700;
                font-size:14px;
                line-height:16px;
                background-color:#1D1F22;
                color: #fff;
            }
        }

    }
`