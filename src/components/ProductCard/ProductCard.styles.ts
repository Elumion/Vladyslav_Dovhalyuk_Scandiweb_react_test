import styled from "@emotion/styled";

export const StyledCard = styled.li`
    padding:16px;

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