import React from 'react'
import {CardWrapper, CardOverlay, CardImage, CardInfo, CardLinks,CardTitle } from './projectElement'
import {FaFacebook} from 'react-icons/fa'


const Index = (props) => {
    return (
        <CardWrapper picture={props.picture} color={props.color} >
            <CardOverlay></CardOverlay>
            <CardImage ></CardImage>
            <CardInfo>
                <CardTitle>Some title</CardTitle>
            </CardInfo>
            <CardLinks>
                <FaFacebook size={40} ></FaFacebook>
                <FaFacebook size={40} ></FaFacebook>
                <FaFacebook size={40} ></FaFacebook>


            </CardLinks>
        </CardWrapper>
    )
}

export default Index
