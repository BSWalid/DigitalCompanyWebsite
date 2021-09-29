import styled, { keyframes } from "styled-components";


const scaleIn = keyframes`
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
`;

export const CardInfo= styled.div`
z-index: 100;
    position: absolute;
    height: 100px;
    width: 100%;
    bottom: 0;
    transform:translateY(100%);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform ease 500ms;
    



` 
export const CardLinks= styled.div`
        position:absolute;
        width: 50px;
        height: 70%;
        top: 15%;
        right: 0;
        transform: translateX(100%);
        transition: transform ease 500ms;
        display:flex;
        flex-direction:column;
        justify-content: space-around;


`

export const CardOverlay= styled.div`
            z-index: 10;
         
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.8;
            transition: ease 0.5s;
           



`
export const CardWrapper= styled.div`
overflow: hidden;
position:relative;

    animation:${scaleIn} 500ms;
    background-image: url("${props=>props.picture}");
    background-repeat: no-repeat;
    
    



    width: 400px;
    height: 300px;
     &:hover{

        ${CardOverlay}{
                opacity: 0 ;
            }
        ${CardInfo}{
            transform: translateY(0%);
        }
        ${CardLinks}{
            transform: translateX(0%);
        }
        

     }

    @media only screen and (max-width: 900px) {
                
                width: 300px;
                height: 200px;}

`

export const CardImage= styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;


  

`

export const CardTitle= styled.h3`
    color: white;

    


`
