import React from 'react'

import { CardWraper, Banner, Image, Content, Text, Description, Scoials,SubText,Icon } from './cardElements'



const Index = (props) => {
    return (
        

            <CardWraper position={props.position}  >

                <Banner>
                    <Image>

                    </Image>
                </Banner>

                
                <Content>

                    <Text> Walid Bensidiaissa</Text>
                    <SubText>Web Developer</SubText>
                    <Description>Full Stack Web Developer with over 2 years experince</Description> 
                    <Scoials>
                        <Icon></Icon>
                        <Icon></Icon>
                        <Icon></Icon>


                    </Scoials>

                </Content>
            </CardWraper>
            
           

            
       
    )
}

export default Index
