import { Box, Stack } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { Heading } from './Heading'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'
import { removeUndefined } from './support'

export type BannerProps = {
    heading?: ReactNode
    subheading?: ReactNode
    image?: ReactNode
    cta?: ReactNode
    flip?: boolean
    fingerprint?: ReactNode
    animate?: any
} & PageContainerProps

export function Banner({
    heading = '',
    subheading = '',
    cta = '' as ReactNode,
    image = null as any,
    flip = false,
    fingerprint = '',
    animate = undefined,
    ...props
}: BannerProps) {
    const { bg = 'gray.100', background, backgroundColor, ...rest } = props
    const bgs = removeUndefined({ bg, background, backgroundColor })
    const direction = flip ? 'row-reverse' : 'row'
    return (
        <PageContainer {...rest}>
            <Stack
                align='center'
                spacing='40px'
                // isReversed={flip}
                flexDirection={['column', null, direction]}
                w='100%'
                bg='primary'
                borderRadius='10px'
                p='40px'
                {...bgs}
            >
                <Stack
                    spacing='20px'
                    minW='300px'
                    w={image ? 'auto' : '100%'}
                    justify='space-between'
                    flexDirection={['column', null, image ? 'column' : 'row']}
                >
                    <Stack spacing='20px'>
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
                    <Stack w='auto' justify='center'>
                        <Box>{cta}</Box>
                        {fingerprint && (
                            <Box
                                opacity={0.6}
                                fontSize='subtext'
                                lineHeight='26px'
                            >
                                {fingerprint}
                            </Box>
                        )}
                    </Stack>
                </Stack>
                {image && <Box flex='1' />}
                {image && (
                    <Col
                        align='center'
                        // flex='1'
                        minW='300px'
                        minH='100%'
                        // my='-40px'
                    >
                        {image}
                    </Col>
                )}
            </Stack>
        </PageContainer>
    )
}
