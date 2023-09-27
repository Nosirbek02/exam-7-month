import React from 'react'
import styled from 'styled-components'

// export const Text=styled.style`
// color: #FB471D;

// `

const CustomText = styled.p`
 ${props => { return 'color: getColor(props.textColor)'}}
`