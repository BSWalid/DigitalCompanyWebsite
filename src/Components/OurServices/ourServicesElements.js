import styled from 'styled-components'


export const OurServicesWrapper = styled.section`

    position: relative;
    height: calc(100vh - 80px);
    scroll-snap-align: end;
    margin-bottom:100px;

    width: 100%;
    background-color:#2D55B6 ;
    text-align: center;
    display: flex;
    flex-direction:column;


`


export const OurServiceTitle = styled.h1`
    
    font-size  :30px ;
    margin-top: 20px;
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

    height:500px;
     width: 100%;
   

`
export const ServiceContent = styled.div`
    z-index: 100;
    height: 400px;
    width: 50%;
    background-color: ${props => props.color };








`


export const ServiceContentWrapper = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    flex-wrap: wrap;

`
export const ServiceDescriptionWrapper = styled.div`
  z-index: 100;
    height: 400px;
    width: 50%;
    
    text-align: center;
    p{
        color: white;
    }
   


`
export const ServiceDesceiption = styled.p`
    
    color: white;
    height: 100px;
    width: 100px;
    z-index: 100;
`


