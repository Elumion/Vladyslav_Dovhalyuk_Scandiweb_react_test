import styled from "@emotion/styled";

export const StyledCard = styled.li`
    padding:16px;
    position:relative;
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
        width:354px;
        height:330px;
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