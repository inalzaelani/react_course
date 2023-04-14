import Styled from 'styled-components';

export const StyledContainer = Styled.div`
    padding: 40px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family : 'Quicksand'

`

export const StyledTitle = Styled.h1`
    margin-bottom: 20px;
`

export const StyledForm = Styled.form`
    margin: 0 auto;
    width: 50%;
`
export const StyledButtonSubmit = Styled.button`
    font-family: Roboto, sans-serif;
    font-weight: 0;
    font-size: 14px;
    color: #fff;
    background-color: #0066CC;
    padding: 10px 30px;
    border: 2px solid #0066cc;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transition : 1000ms;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    
    &:hover{
        transition : 1000ms;
        padding: 10px 50px;
        transform : translateY(-0px);
        background-color: #fff;
        color: #0066cc;
        border: solid 2px #0066cc;
    }
`
export const StyledButtonReset = Styled.button`
    font-family: Roboto, sans-serif;
    font-weight: 0;
    font-size: 14px;
    color: #fff;
    background-color: #d62828;
    padding: 10px 30px;
    border: solid #d62828 2px;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transition : 1000ms;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    
    &:hover{
    transition : 1000ms;
    padding: 10px 50px;
    transform : translateY(-0px);
    background-color: #fff;
    color: #d62828;
    border: solid 2px #d62828;
    }
`