import styled from "@emotion/styled";

export const AttributeButtonContainer = styled.div`
    cursor:pointer;

    &.text{
        display: flex;
        align-items: center;
        justify-content: center;
        padding:0 4px;
        min-width: ${(props)=>props.property === "full"? "63px" :"24px" };
        min-height:${(props)=>props.property === "full"? "45px" :"24px" };
        background-color: #fff;
        color:#1D1F22;
        font-weight: 400;
        font-size: ${(props)=>props.property === "full"? "16px" :"14px" };
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
        width: ${(props)=>props.property === "full"? "32px" :"16px" };
        height: ${(props)=>props.property === "full"? "32px" :"16px" };
        background-color: ${(props:any) => props.itemProp};

        :hover, &.checked{
            outline: 1px solid #5ECE7B;
            outline-offset: 2px;
        }

    }
`

//props.property: full | small