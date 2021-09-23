import styled  from "styled-components"
            
            
export const NavBarWraper =styled.div`
    
   
    position: fixed;

    max-height: 80px;
    background-color:#303F9F ;
    width: 100%;
    height: 80px;

`  
export const Logo = styled.h1`
z-index: 30;`

export const NavItems = styled.div`


    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    a{
        color: white;
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



