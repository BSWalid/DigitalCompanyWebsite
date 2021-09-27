import styled from "styled-components";

export const CardWraper = styled.div`

    background-color: #fff;
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 60px auto;
    border-radius: 2rem;
    transform: ${props=>props.position=="active"?"scale(1)":"scale(0.5)"};
    transition: transform 300ms;
    
    
    box-shadow: 0px 1rem 1.5rem rgb(0 0 0 / 50%);

`


export const Banner = styled.div`
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 9rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
    `


export const Image = styled.div`
background-color: #fff;
    width: 9.5rem;
    height: 9.5rem;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 30%);
    border-radius: 50%;
    transform: translateY(50%);
    transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);


    `


export const Content = styled.div`
text-align: center;
padding: 5rem 2rem;
`


export const Text = styled.h3`
margin: 1rem 0;
font-weight:thin;

`
export const SubText = styled.h4`
margin: 1rem 0;
font-size: 18px;
font-weight:200;

`


export const Description = styled.div``


export const Scoials = styled.div`
    width: 100%;
    margin: 2rem 0;
    height: 20%;
    display: flex;
    justify-content: space-around;


`

export const Icon = styled.div`
    height: 100%;
    width: 20%;
    aspect-ratio: 1/1;
    background-color: black;
    border-radius: 50%;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 30%);


`

