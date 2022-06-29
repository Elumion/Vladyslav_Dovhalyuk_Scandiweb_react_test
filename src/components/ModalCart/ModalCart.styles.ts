import styled from "@emotion/styled";

export const ModalCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    background-color: #fff;
    position:absolute;
    top:100%;
    right:0;
    z-index:10;
    


    .bag{
        font-size:16px;
        line-height:25px;
        font-weight: 500;
        margin: 0;
    }
     .bold-text{
        font-weight:700;
    }
    .minicart__products-list{
        display:flex;
        flex-direction:column;
        gap:40px;

        max-height:60vh;
        overflow-y:scroll;

        ::-webkit-scrollbar-track {
        border: 1px solid transparent;
        padding: 2px 0;
        background-color: transparent;
        }

        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #f1f1f1;
            border: 1px solid #f1f1f1;
            transform: rotate(180deg);
        }
    }
    `
