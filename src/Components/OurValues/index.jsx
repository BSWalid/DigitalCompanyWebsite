import React from 'react';

import {
    ValuesWrapper,
    ValuesTitleWrapper,
    ValuesTitle,
    ValuesDescription,
    ValueCard,
    ValueTopHalf,
    ValueLowHalf,
    ConnectionLine,
    ValueImageWrapperLeft,
    ValueImageWrapperRight,
    ImageCircle,
    ValueImage,
    ValueContentWrapperLeft,
    ValueContentWrapperRight,
    ValueTitle,
    ValueDescription
} from './ourValuesElements';

const Index = () => {

    return (
        <>
            <ValuesWrapper>
                <ValuesTitleWrapper>
                    <ValuesTitle>Our Values</ValuesTitle>
                    <ValuesDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi est molestias cupiditate at! Nesciunt id illum, voluptates quidem consectetur nobis veniam molestiae eos aspernatur itaque impedit nulla esse odio.</ValuesDescription>
                </ValuesTitleWrapper>

                <ValueCard>
                    <ValueTopHalf>
                        <ConnectionLine>------</ConnectionLine>
                    </ValueTopHalf>

                    <ValueLowHalf>
                        <ValueImageWrapperLeft>
                            <ImageCircle>
                                <ValueImage>LeftImage</ValueImage>
                            </ImageCircle>
                        </ValueImageWrapperLeft>

                        {/* <ValueImageWrapperRight>
                            <ImageCircle>
                                <ValueImage>RightImage</ValueImage>
                            </ImageCircle>
                        </ValueImageWrapperRight> */}

                        {/* <ValueContentWrapperLeft>
                            <ValueTitle>Value ValueIndex</ValueTitle>
                            <ValueDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed consectetur nisi nam soluta blanditiis veritatis repudiandae ut voluptates autem error dicta alias, aut aliquam odio fuga laudantium. Sit, laboriosam.</ValueDescription>
                        </ValueContentWrapperLeft> */}

                        <ValueContentWrapperRight>
                            <ValueTitle>Value ValueIndex</ValueTitle>
                            <ValueDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed consectetur nisi nam soluta blanditiis veritatis repudiandae ut voluptates autem error dicta alias, aut aliquam odio fuga laudantium. Sit, laboriosam.</ValueDescription>
                        </ValueContentWrapperRight>
                    </ValueLowHalf>
                </ValueCard>
            </ValuesWrapper>
        </>
    )
}
export default Index
