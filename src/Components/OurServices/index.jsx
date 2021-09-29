import React, { useState,useEffect } from 'react'

import {services} from './Data'
import {ServiceContent,OurServicesWrapper,OurServiceTitle,
        ServiceImageWrapper, ServiceContentWrapper, ServiceDescriptionWrapper, ServiceDesceiption,} from './ourServicesElements'

        

import Slider from "react-slick";


import 'pure-react-carousel/dist/react-carousel.es.css';
import './styles.css'


const Index = () => {

 

    const settings = {
        fade:true,
        infinite: true,
        autoplay:true,
        
        speed: 500,
        pauseOnFocus:true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        

      };
      const settings2 = {
        fade:true,
        infinite: true,
        autoplay:true,
        speed: 500,
        autoplaySpeed: 3000,
        
        

      };
    
        const [nav1, setNav1] = useState();
        const [nav2, setNav2] = useState();
     
        

   
     

   

    return (
        <>
            <OurServicesWrapper>
                    <OurServiceTitle >Our Services</OurServiceTitle>
                         <ServiceContentWrapper >
                            {/* <ServiceDescriptionWrapper>
                                <Slider {...settings} >
                                    { services.map((service ,index)=>{
                                        return <ServiceDescriptionWrapper  key={service.id} color={service.color}><p>{service.description}</p></ServiceDescriptionWrapper>   
                                    })}
                                </Slider> 
                            </ServiceDescriptionWrapper> */} 
                        <ServiceImageWrapper>

                                <Slider {...settings}> 

                                    {services.map((service)=>{

                                        return <ServiceContent  key={service.id} color={service.color}></ServiceContent>
                                        })}
                            
                                </Slider>                           
                        </ServiceImageWrapper>      
                           
                    

                    
                    </ServiceContentWrapper> 
           
                
                               


                           

            </OurServicesWrapper>
        </>
    )
} 
export default Index
