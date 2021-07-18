import styled, { keyframes } from "styled-components";

export const APage = styled.div`
min-height: 1000px;
height: 100%;
min-width: 100%;
width:100%;
background-color: #7ecdb9;
border: 5px solid lightyellow;
box-shadow: 10px 5px 5px maroon;
position:relative;
`;

export const HeaderCon = styled.div`
    background-color: ${props => props.clr ? props.clr : '#fff'};
    min-height:54px;
    display: flex;
    z-index: 10;
    align-items: center;
    width:100%;
    top: 0;
    ${props => props.fixedHdr ? 'position:fixed;' : null}
    ${props => props.shadow ? 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);' : null}
    ${props => props.shadowLight ? `box-shadow: 0 1px 6px 0 #4367B266;` : null}
    ${props => props.multiShadow ? `box-shadow: 0 1px 2px 0 #dad4bb; position: relative;` : null}
    > p {
      font-size: 1.5em;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.63;
      letter-spacing: normal;
      text-align: rigth;
      color: maroon;
      margin: auto;
    }
`

const loadRunner = keyframes`
    0%{
        left: 0%;
        background-color: #fdd535;
    }
    50%{
        left: 50%;
        background-color: red;
    }
    100%{
        left: 90%;
        background-color: #fdd535;
    }
`

export const BodyCon = styled.div`
    height: 100%;
    width: 100%;
    background-color: #f9fbfc;
    margin-top:54px;
    &:before, &:after{
        height: 6px;
        display: block;
        width: 100%;
        position: absolute;
        left:0%;
        right:0%;
        top:0px;
    }
    &:before{
        width: 100%;
    }
    &:after{
        width: 10%;
        z-index: 20;
        animation: ${loadRunner} 2s linear infinite alternate;
        background-color: red;
        border-radius: 55px;
    }
`

export const ItemCon = styled.button`
    margin: 20px;
    height: 100px;
    width: 150px;
    float:left;
    padding-top: 3%;
    border: 2px solid red;
    background-color: lightgrey;
    font-family: monospace;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    border-radius: 10px 25px;
    box-shadow: 10px 5px grey;
`;

export const FooterCon = styled.div`
    height: 150px;
    width: 100%;
    background-color: #23806a;
    bottom: 0px;
    position:absolute;
    padding: 2px;
    > table {
        font-size: 15px;
        font-weight:500;
        text-align: left;
        font-family: monospace;
        margin-right: 5px;
        margin-top: 10px;
        position:absolute;
        right: 10px;
    }
`;

export const TableCon = styled.table`
    margin: auto;
    border: 2px solid blue;
    width: 100%;
    > tbody > tr {
        box-shadow: 0px 3px grey;
        padding: 20px;
        width:100%;
    }
    > tbody > tr > td {
        padding: auto;
        word-break:break-all;
        overflow: hidden;
        border: 1.5px solid grey;
    }
`;

export const TRRow = styled.tr`
    font-size: 20px;
    font-family: monospace;
    font-weight: 500;
    background-color: #95d4ba;
    color: red;
    > td {
        border: 1.5px solid blue;
    }
`;