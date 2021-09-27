import {React,useState} from 'react'
import {MembersWrapper,Title,MemberSlider,MemberSliderPhone} from './membersElements'
import Card from './Card'
import Slider from "react-slick";
import { Dot } from '../OurServices/ourServicesElements';
import styled from 'styled-components';

import { team } from './Card/Data';
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'


const Index = () => {
    const [slideIndex, setslideIndex] = useState(0)

    const  stylesNext ={
        position: "absolute",
        cursor:"pointer",

        bottom:"0%",
        right:"45%"

    }
    const  stylesPrev ={
        "z-index":"50",
        position: "absolute",
        cursor:"pointer",
        bottom:"0%",
        left:"45%",
        
    }
   

    const NextArrow = ({onClick})=>{
       
        return (<div  style={stylesNext} ><FaArrowRight size={30} onClick = {onClick} color={"orange"} /></div>)
    }
    const PrevArrow = ({onClick})=>{
        return (<div  style={stylesPrev} ><FaArrowLeft  size={30} onClick = {onClick} color={"orange"} /></div>)
    }
   
    const settings = {
        infinite:true,
        lazyLoad:true,
        speed:300,
        slidesToShow: 5,
        slidestoScroll:1,
        mobileFirst:true,
        centerMode:true,
        centerPadding:0,

       
        beforeChange:(current,next) => setslideIndex(next),
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        responsive: [
            {
              breakpoint:1300,
              settings: {
                slidesToShow: 3,
                 slidestoScroll:3,

              }
            },
            {
                breakpoint:720,
                settings: {
                   slidesToShow: 1,
                   slidestoScroll:2,

                }
              },
     
       
          ]
    }

    

    return (
        <>
            <MembersWrapper>
                    <Title>Meet Our Team</Title>


                <MemberSlider>
                
                    <Slider {...settings}>
                      {team.map((member,index)=>(
                      <Card position={slideIndex==index?"active":"nonActive"}></Card>) 
                      )}     
                      
                    </Slider>
                        
                    
                    
                </MemberSlider>

          
                
                
            </MembersWrapper>   
        </>
    )
}

export default Index
