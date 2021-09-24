import styled  from "styled-components"
            
export const HeaderWrapper = styled.div`
    position: relative;
    height: 800px;
    
    

`       

export const HeroText = styled.h3`
padding: 50px 50px 50px 0px;
z-index: 30;
color:white;
`

export const HeroSection = styled.div`

    margin-top: 80px;
    padding-top: 100px;
    top: 80px;
    max-height: 800px;
    height:  820px;

`
export const HeroVideo = styled.div`
    border-radius: 15px;
    margin-top: 10px;
    height: 450px;
    background-color: black;
`

export const MascotImg = styled.div`
    border-radius: 15px;
    margin: 10px auto;
    height: 300px;
    width: 300px;
    background-color: black;

`
export const CtaButtonWrapper = styled.div`
    text-align: center;


`
export const MascotImgWrapper = styled.div`
    text-align: center;


`

export const CtaButton = styled.button`

    margin-top: 20px;

    display: inline-block;
    border-radius: 4px;
    background-color: #FF5722;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    padding: 12px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
  
`

export const HeroBg = styled.div`

    z-index: -5;
    position: absolute;
    top: 0;
    right:0;
    left: 0;
    height:  80%;
    width: 100%;
    background-color: #303F9F;
    

`

export const NavBarWraper =styled.div`
    z-index: 15;
    position: fixed;
    top: 0;
    max-height: 80px;
    height: 70px;
    background-color:#303F9F ;
    width: 100%;
    height: 80px;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.8);


`  
export const Logo = styled.h1`
    margin: 0;
    z-index: 30;
`

export const NavItems = styled.div`


    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    a{
        color:white;
        text-decoration: none;
        font-weight: 400;
        &:hover{
            color: #FF5722;
        }
    }

    @media (max-width: 864px) {
        visibility: hidden;
   
  }

    @media (max-width: 768px) {
        visibility: hidden;
   
  }

   
`

export const MobileMenu = styled.div`
    display: none;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    max-height: 100vh;
    
    

    transform: ${props => (props.visibility ? "translateY(0%)":"translateY(-150%)")};
 
    background-color: #303F9F ;

    flex-direction: column;
    align-items: center;

    text-decoration:none;
    color: white;
    font-size: 1.25rem;

    transition: ease-in-out 0.5s;

    a{
        color: white;
        margin: 20px;
    }

    @media (max-width: 864px) {
        display: flex;


  }



`

export const NavBar = styled.div`
    max-width: 1240px;
    margin: auto;
    display:  flex;
    justify-content: space-around;
    align-items: center;
    
    h1{
        color: white;
    }

    

`


export const MobileMenuToggle = styled.button`
    z-index: 30;
    display: none;
   
    

    @media (max-width: 864px) {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 35px;
        height: 30px;
        background-color: transparent;
        border: none;
    
  }

`




export const MenuBar = styled.div`
    width: 100%;
    height: 2px;
    background-color: white;
`



