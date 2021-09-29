import styled, { keyframes } from 'styled-components'





export const OurProjectsWrapper=styled.div`


    position: relative;
    height: calc(100vh - 80px);
    scroll-snap-align: end;
    width: 100%;
    text-align: center;



`
export const OurProjectsTitle=styled.h1`


    font-size  :30px ;
    font-weight: bold;
    color: #EF5350;


`
export const ButtonsWrapper=styled.div`
        width: 850px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 20px auto;
        gap: 5px;

            @media only screen and (max-width: 700PX) {
                width: 80%;
}


       

`

export const SceneWrapper=styled.div`


        width: 1200px;
        height: 600px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 20px auto;
        position: relative;

            @media only screen and (max-width: 1250px) {
                width: 90%;}

            @media only screen and (max-width: 1000px) {
                  display: none;
       }


`
export const MobileSlilderWrapper = styled.div`


        width: 100%;
        height: 600px;
        justify-content: center;
        margin: 20px auto;
        visibility:hidden;
    

            

        @media only screen and (max-width: 1000px) {
            visibility:visible ;
        }


`
export const ShowMore=styled.div`




`