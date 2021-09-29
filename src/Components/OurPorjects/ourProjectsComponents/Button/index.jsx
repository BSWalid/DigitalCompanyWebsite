import React from 'react'
 import styled from 'styled-components'
 import{Button} from './buttonElements'

const Index = (props) => {

  
    return (
        <Button
            onClick={props.click} 
            selected={props.selected} >
            {props.name}
            
        </Button>
    )
}

export default Index
