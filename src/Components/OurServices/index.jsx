import React, { useState } from 'react'

import { Container } from 'react-bootstrap'
import {services,dotsVersions} from './Data'
import {ServiceContent,OurServicesWrapper,OurServiceTitle,Indicator,Dot,
        TitleWraper,IndicatorWrapper,ServiceImageWrapper} from './ourServicesElements'

const Index = () => {
     
     const [dots, setdots] = useState([
        {
            id:0,
            position:"-150%",
            color:"red"
        },
        {
            id:2,
            position:"10%",
            color:"blue"
        },
        {
            id:3,
            position:"15%",
            color:"green"
        },
        {
            id:4,
            position:"50%",
            color:"grey"
        },
        {
            id:5,
            position:"120%",
            color:"black"
        },
    ])
     
    const [currentSlide, setcurrentSlide] = useState(0)
    const incremantCurrentSlide = ()=>{
        currentSlide == services.length-1 ?  setcurrentSlide(0) :  setcurrentSlide(currentSlide+1) 
        
    }

    const [dotPos, setdotPos] = useState(0)
    
    const handleDotsPosition = ()=>{
        dotPos == dots.length-1 ?  setdotPos(0) :  setdotPos(dotPos+1) 

        
        setdots(dotsVersions[dotPos])



    }

   

    return (
        <>
            <OurServicesWrapper>
                <TitleWraper>
                    <OurServiceTitle>Our Services</OurServiceTitle>
                </TitleWraper>
            <IndicatorWrapper>
                <Indicator>
             
                </Indicator>

               

                { dots.map((dot ,index)=>{
                
                    return <Dot key={index} color ={dot.color} top={dot.position}></Dot>
                       
            })}


                      
               

            </IndicatorWrapper>

            <ServiceImageWrapper>

            { services.map((service ,index)=>{
                console.log("this is index"+index)
                console.log("current"+currentSlide)
                

                return <ServiceContent currentslide= {index == currentSlide?true:false} key={service.id} color={service.color}></ServiceContent>
                 

            })}

            </ServiceImageWrapper>
                    
                    
            <button onClick={incremantCurrentSlide }> click me </button>
            <button onClick={handleDotsPosition }> click me </button>


            </OurServicesWrapper>
        </>
    )
} 
export default Index
