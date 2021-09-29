import {React,useState,useEffect} from 'react'
import {OurProjectsWrapper,OurProjectsTitle, 
        ButtonsWrapper,SceneWrapper, ShowMore ,MobileSlilderWrapper} from './ourPorjectsElements'
import Button from './ourProjectsComponents/Button'

import ProjectCard from './ProjectCard'
import MobileProjectCard from './MobileProjectCard'

import { services,projectsList } from './Data'
import Slider from 'react-slick'

const Index = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const [selectedService, setselectedService] = useState(services[0].id)

    return (
        <OurProjectsWrapper>
            <OurProjectsTitle>Our Projects</OurProjectsTitle>
            <ButtonsWrapper>
                

                        {services.map((service) => (
                            <Button
                            click={() => {
                                setselectedService(service.id);
                            }}
                            selected={selectedService == service.id ? true : false}
                            key={service.id}
                            name={service.name}
                            ></Button>
                            
                        ))}
                
            </ButtonsWrapper>

            <SceneWrapper>
                            {(selectedService ==0
                            ?projectsList.filter(function(project){
                                if(this.count<6){
                                    this.count++
                                    return true
                                }
                                return false
                            },{count:0})
                            :projectsList.filter(function(project){
                                if (this.count <6 && project.service_id==selectedService ){
                                    this.count++;
                                    return true;
                                }
                                return false;
                            },{count:0})).map((myProject)=>{

                                return <ProjectCard picture= {myProject.picture} color={"purple"}></ProjectCard>
                            })}

              
                    


        
            </SceneWrapper>

          
             <MobileSlilderWrapper>
                <Slider {...settings}>
                            {(selectedService ==0
                            ?projectsList.filter(function(project){
                                if(this.count<6){
                                    this.count++
                                    return true
                                }
                                return false
                            },{count:0})
                            :projectsList.filter(function(project){
                                if (this.count <6 && project.service_id==selectedService ){
                                    this.count++;
                                    return true;
                                }
                                return false;
                            },{count:0})).map((myProject)=>{

                                return <MobileProjectCard picture= {myProject.picture} color={"purple"}></MobileProjectCard>
                            })}

                  </Slider>                  
            </MobileSlilderWrapper> 

            <ShowMore>

            </ShowMore>


        </OurProjectsWrapper>
    )
}

export default Index
