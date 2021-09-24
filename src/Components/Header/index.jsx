import React, { useState } from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'



import {HeaderWrapper,NavBarWraper,MascotImg,Logo, NavItems,
        MobileMenu,NavBar,MobileMenuToggle,MenuBar,HeroBg,HeroText,
        HeroVideo,HeroSection,CtaButton,CtaButtonWrapper,MascotImgWrapper} from './headerElements'


import { menuItems } from './Data'

const Index = () => {
    const  showHideMenu = ()=> setmobileMenueVisibility(!mobileMenueVisibility)
    const [mobileMenueVisibility, setmobileMenueVisibility] = useState(false)
    return (
        <>
            <HeaderWrapper> 
                <HeroBg></HeroBg>       
                <NavBarWraper>
                    <NavBar>       
                        <Logo>Logo</Logo>
                            <NavItems>
                                {menuItems.map((menuItem)=>{
                                return <a key={menuItem.menuName} href="google.com" >{menuItem.menuName}</a>
                                })}
                            </NavItems>

                        <MobileMenuToggle onClick={showHideMenu}>
                            <MenuBar/>
                            <MenuBar/>
                            <MenuBar/>
                        </MobileMenuToggle>

                    

                    </NavBar>
          

                  
                {console.log(mobileMenueVisibility)}
                 <MobileMenu visibility={mobileMenueVisibility}>
                {menuItems.map((menuItem)=>{
                           return <a key={menuItem.menuName} >{menuItem.menuName}</a>
                        })}
                </MobileMenu>

            </NavBarWraper>
              
            <HeroSection >
                    <Container>
                        <Row >
                            <Col ml={3} md={7} >
                                <HeroText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consectetur nesciunt dolore illo suscipit. Harum in quas </HeroText>
                                <HeroVideo></HeroVideo>
                            </Col>
                            <Col md={{ span: 4, offset: 1 }}>
                           

                              <MascotImgWrapper>
                               <MascotImg></MascotImg>
                              </MascotImgWrapper>

                               
                               <CtaButtonWrapper>
                               <CtaButton  >Contact Us</CtaButton>

                                   
                               </CtaButtonWrapper>
                              

                            </Col>
                            
                        </Row>
                    </Container>
                        
                </HeroSection>      
            
                
                
              
            </HeaderWrapper>           
            
        </>
    )
}

export default Index
