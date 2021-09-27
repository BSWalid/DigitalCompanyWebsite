import React, { useState,useEffect } from 'react'

import {services} from './Data'
import {ServiceContent,OurServicesWrapper,OurServiceTitle,Indicator,Dot,
        TitleWraper,IndicatorWrapper,ServiceImageWrapper} from './ourServicesElements'

import Slider from "react-slick";


import 'pure-react-carousel/dist/react-carousel.es.css';
import './styles.css'


const Index = () => {

 

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true

      };
    

     
        const [currentSlide, setcurrentSlide] = useState(0)
        const incremantCurrentSlide = ()=>{
        currentSlide == services.length-1 ?  setcurrentSlide(0) :  setcurrentSlide(currentSlide+1) 
        
    }

   
     

   

    return (
        <>
            <OurServicesWrapper>
                <TitleWraper>
                    <OurServiceTitle >Our Services</OurServiceTitle>
                </TitleWraper>
            <IndicatorWrapper >

                <Indicator>
             
                </Indicator>

                <Dot top="20%" color="red"></Dot>
                <Dot top="20%" color="red"></Dot>
                <Dot top="20%" color="red"></Dot>
                       

            </IndicatorWrapper>

           
            <ServiceImageWrapper>

                       

        {/*     <CarouselProvider
                    naturalSlideWidth={500}
                    naturalSlideHeight={600}
                    totalSlides={services.length}
                    interval={4000}
                    isPlaying={true}
                    infinite={true}
                    tag={'div'}
                >
                    <Slider classNameAnimation={animation} >
                    { services.map((service ,index)=>{
                            console.log("this is index"+index)
                            console.log("current"+currentSlide)
                            
                            return <Slide index={0}><ServiceContent  key={service.id} color={service.color}></ServiceContent></Slide>
                            

                        })}
                    </Slider>
                    
                </CarouselProvider>      */}
                    <Slider {...settings}>
                    { services.map((service ,index)=>{
                         
                            
                         return  <ServiceContent  key={service.id} color={service.color}></ServiceContent> 
                            

                     })}

                    </Slider>  



              
    

            </ServiceImageWrapper>
                               
            <button onClick={ incremantCurrentSlide }> click me </button>


                           

            </OurServicesWrapper>
        </>
    )
} 
export default Index
