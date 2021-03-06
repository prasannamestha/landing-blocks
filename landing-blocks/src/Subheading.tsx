import { Heading as H, HeadingProps } from '@chakra-ui/core'
import React, { Fragment } from 'react'

export function Subheading(props: HeadingProps) {
    if (!props.children) {
        return <Fragment />
    }
    const as = typeof props.children === 'string' ? 'h2' : 'span'
    return (
        <H
            as={as}
            m={0}
            opacity={0.7}
            fontWeight='normal'
            fontSize='subheading'
            {...props}
        />
    )
}



