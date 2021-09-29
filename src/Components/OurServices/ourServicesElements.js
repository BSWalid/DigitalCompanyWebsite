import styled from 'styled-components'


export const OurServicesWrapper = styled.section`

    position: relative;
    height: calc(100vh - 80px);
    scroll-snap-align: end;
    margin-bottom:100px;

    width: 100%;
    background-color:#2D55B6 ;
    text-align: center;


`
export const TitleWraper = styled.div`


    top:50px;
    width:200px;
    margin: auto;
    left: 50%;
    position: absolute;

`

export const OurServiceTitle = styled.h1`
   
    font-size  :30px ;
    font-weight: bold;
    color: white;

`
export const IndicatorWrapper = styled.div`
     z-index: 10;

    position: relative;
    left: 20%;
    height: 100%;
    width: 40px;

`
export const Indicator = styled.div`

    z-index: 15;
    height: 100%;
    background-color: white;
    margin: auto;
    width: 20px;
    overflow: hidden;

`
export const Dot = styled.div`

    position: absolute;
    z-index: 10;
    top: -20px;
    transform: translateY();
    background-color:${props => props.color }; ;
    left: 0;
    width: 40px;
    height: 40px;   
    border-radius: 50%;
    transform: 0.8s ease-in;
`

export const ServiceImageWrapper = styled.div`

    height: 600px;
    width: 700px;
    position: absolute;
    top: 20%;
    right: 10%;
    overflow: hidden;


`
export const ServiceContent = styled.div`
z-index: 100;
height: 400px;
width: 400;



background-color: ${props => props.color };





`

