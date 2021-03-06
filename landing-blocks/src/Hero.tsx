// @jsx jsx
import { Box, Stack } from '@chakra-ui/core'
import { jsx } from '@emotion/core'
import React, { ReactNode } from 'react'
import { Bullet } from './Bullet'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, Row, PageContainerProps } from './layout'
import { Subheading } from './Subheading'
import { clone } from './support'

export type HeroProps = {
    heading?: ReactNode
    subheading?: ReactNode
    cta?: ReactNode
    image?: ReactNode
    bullet?: ReactNode
    fingerprint?: ReactNode
    animate?: any
} & PageContainerProps

export function Hero({
    heading,
    subheading,
    cta,
    image,
    bullet = '',
    fingerprint = '',
    animate = undefined,
    ...rest
}: HeroProps) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer {...rest}>
            <Row
                justify='flex-start'
                w='100%'
                flexDir={['column', 'column', 'row']}
                align='center'
            >
                <Stack
                    as={Faded}
                    maxW={['100%', null, image ? '500px' : '100%']}
                    spacing='40px'
                    align={[
                        'center',
                        'center',
                        image ? 'flex-start' : 'center',
                    ]}
                    textAlign={['center', 'center', image ? 'left' : 'center']}
                >
                    <Col align={['center', null, 'flex-start']}>
                        {bullet && <Bullet my='10px'>{bullet}</Bullet>}
                        <Heading fontSize='46px'>{heading}</Heading>
                    </Col>
                    <Subheading maxW='700px'>{subheading}</Subheading>
                    <Stack align={['center', 'center', 'flex-start']}>
                        <Box>{clone(cta)}</Box>
                        {/* <Button
                            px='40px'
                            bg='primary'
                            d='block'
                            width='auto'
                        ></Button> */}
                        <Box opacity={0.8} fontSize='subtext' lineHeight='26px'>
                            {fingerprint}
                        </Box>
                    </Stack>
                </Stack>
                {image && (
                    <Row flexDir={['column', null, 'row']} as={Faded} flex='1'>
                        <Box ml='40px' mt='40px' flex='1' />
                        <Col
                            align='center'
                            // h='100%'
                        >
                            {image}
                        </Col>
                    </Row>
                )}
            </Row>
        </PageContainer>
    )
}
