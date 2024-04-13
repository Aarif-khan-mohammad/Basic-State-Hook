import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`


export const SubHeading = styled.h2`
    margin-top: 10px;
    margin-bottom: 10px;
    color : #000;
`

export const InputUser = styled.input`
    width: 30rem;
    height: 3rem;
    border-radius: 5px;
    border: 1px solid #000;
    text-align:center;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #000;
        text-align:center;
    }
    @media (max-width: 768px) {
        width: 200px;
    }

`

export const MsgContent = styled.p`
    color: #000;
    font-size: 2rem;
    font-weight:bold;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 12px;
    }

`

export const NameText = styled.span`
    color: #074ccc;
    font-size: 2rem;
    font-weight:bold;
    @media (max-width: 768px) {
        font-size: 12px;
    }


`