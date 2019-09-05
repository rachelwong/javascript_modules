import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
    font-family: 'Open Sans', 'Roboto', Arial, Helvetica, sans-serif;
    color: red;
`

export default function App(props) {
    return (
        <div className="app">
            <Heading>Hello, {props.name}!</Heading>
        </div>
    )
}
