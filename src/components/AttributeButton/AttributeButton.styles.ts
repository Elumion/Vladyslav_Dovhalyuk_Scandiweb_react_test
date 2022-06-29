import styled from "@emotion/styled";

export const AttributeButtonContainer = styled.div`
    cursor:pointer;

    &.text{
        padding:0 4px;
        min-width:24px;
        min-height:24px;
        background-color: #fff;
        color:#1D1F22;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        text-align:center;
        border: 1px solid #1D1F22;
        border-radius:0;
        transition: background-color 100ms ease-in-out, color 100ms ease-in-out;

        :hover, &.checked{
            background-color: #1D1F22;
            color:#fff;
        }
    }

    &.swatch{
        line-height:1;
        padding:0;
        width: 16px;
        height: 16px;
        background-color: ${(props:any) => props.itemProp};

        :hover, &.checked{
            outline: 1px solid #5ECE7B;
            outline-offset: 2px;
        }

    }
`