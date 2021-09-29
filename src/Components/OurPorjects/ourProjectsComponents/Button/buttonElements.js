import styled from "styled-components";

export const Button = styled.div`
padding: 10px;
border-radius: 4px;
background:${props=>props.selected?'white':'#FF5722'}; ;
border: none;
color: ${props=>props.selected?"black":"#FFFFFF"};
text-align: center;
font-size: 18px;
padding: 12px;
width: 250px;
transition: all 0.5s;
cursor: pointer;
border: solid 1px ${props=>props.selected?"#FF5722":"#FFFF"};

@media only screen and (max-width:600px){

    font-size:16px;
    padding: 10px;
}




&:hover{
        background-color: white;
        color:black;
        border: solid 1px #FF5722 ;
    }



`