import { Stack } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'

export type FeatureProps = {
    heading?: ReactNode
    subheading?: ReactNode
    image?: ReactNode
    cta?: ReactNode
    flip?: boolean
    animate?: any
} & PageContainerProps

export function Feature({
    heading,
    subheading,
    image = null as any,
    flip = false,
    animate = undefined,
    direction = 'row',
    ...rest
}: FeatureProps) {
    const dir: any = (direction) => (flip ? `${direction}-reverse` : direction)
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer py='80px' {...rest}>
            <Stack
                align='center'
                spacing='40px'
                // isReversed={flip}
                flexDirection={['column', null, dir(direction)]}
            >
                <Stack as={Faded} spacing='20px' flex='1' minW='300px'>
                    <Heading
                        lineHeight='50px'
                        fontWeight='medium'
                        fontSize='heading'
                    >
                        {heading}
                    </Heading>
                    <Subheading
                        lineHeight='34px'
                        m={0}
                        opacity={0.6}
                        fontWeight='normal'
                        fontSize='text'
                    >
                        {subheading}
                    </Subheading>
                </Stack>

                <Col as={Faded} align='center' flex='1' minW='300px'>
                    {image}
                </Col>
            </Stack>
        </PageContainer>
    )
}
