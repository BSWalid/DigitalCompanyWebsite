import styled  from "styled-components";




export const MembersWrapper=styled.section`

    position: relative;
    height: 800px;
    scroll-snap-align: end;

    margin-bottom: 1000px;
    width: 100%;
    text-align: center;



` 
export const Title=styled.h1`

    font-size  :30px ;
    font-weight: bold;
    color: #EF5350;` 


export const MemberSlider=styled.div`
    width: 80%;
    padding: auto 300px;
    margin: 2rem auto;
    height: 80vh;
    @media (max-width: 1900px) {
        width: 70%;

    }
    @media (max-width: 1700px) {
        width: 90%;

    }
    @media (max-width: 1300px) {
        width: 100%;

    }
  

`
export const MemberSliderPhone=styled.div`

        @media (min-width: 768px) {
                display: none;
            }
            

`

export const Scene = styled.div`
     margin: auto;
     display: flex;
     width: 70%;
`

export const DIV = styled.div`
    height: 300px;
    width: 200x;
    margin: 20px;
    background-color: black;

`