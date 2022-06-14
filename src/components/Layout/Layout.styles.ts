import styled from "@emotion/styled";
import {default as globalStyles} from "../../globalStyles.json";

const arrow: string = require("../../assets/arrow_down.svg").default;

export const HeaderContainer = styled.header`
    display:flex;
    
    padding: 24px 0  0;
    
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

            li{
                padding: 4px 16px 32px;
                font-weight:400;
                font-size:16px;
                line-height: 120%;
                text-transform:uppercase;
                cursor:pointer;

                &:hover{
                    color:${globalStyles["--c-primary"]};
                    border-bottom:1px solid ${globalStyles["--c-primary"]};
                    padding-bottom:31px;
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
            gap:38px;
            align-items:baseline;
            .currency{
                
                font-size:18px;
                font-weight:500;
                line-height: 160%;
                position:relative;
                &::after{
                    content:"";
                    position:absolute;
                    bottom: 10px;
                    right: -10px;
                    background-image: url(${arrow});
                    background-repeat:no-repeat;
                    background-size:contain;
                    width:6px;
                    height:3px;
                }
            }
        }

    }
`