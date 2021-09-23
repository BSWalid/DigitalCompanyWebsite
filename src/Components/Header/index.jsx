import React, { useState } from 'react'




import {NavBarWraper, Logo, NavItems, MobileMenu,NavBar,MobileMenuToggle,MenuBar,MobileMenuToggleClosed,MenuBarClosed} from './headerElements'
import { menuItems } from './Data'
const Index = () => {
    const  showHideMenu = ()=> setmobileMenueVisibility(!mobileMenueVisibility)
    const [mobileMenueVisibility, setmobileMenueVisibility] = useState(false)
    return (
        <>

            <NavBarWraper>
                <NavBar>       
                    <Logo>Logo</Logo>
                    <NavItems>
                        {menuItems.map((menuItem)=>{
                           return <a key={menuItem.menuName} >{menuItem.menuName}</a>
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
            
            
        </>
    )
}

export default Index
