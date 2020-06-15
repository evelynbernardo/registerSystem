import styled from 'styled-components'

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    //overflow-x: auto;
    max-width: 80vw;
    margin-left:10vw;
    margin-top: 10vh;
    thead tr th{
        width: 20vw;
        text-align: center;
        padding: 20px;
        border-top: solid 1px #e4e4e4;
        border-bottom: solid 1px #e4e4e4;
    }

    tbody{
        tr td{
            width: 25vw;
            height: 24px;
            text-align: center;
            padding: 0px 20px;
            border-bottom: solid 1px #e4e4e4;
            // &:last-child{
            //     text-align: right;
            //     }
            //     img{
            //       cursor: pointer;
            //     }
            // }
        }
    }
`;