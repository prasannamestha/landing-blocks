import { Stack, Text, StackProps, Box } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'

export type FeaturesListProps = {
    heading?: ReactNode
    subheading?: ReactNode
    centerText?: boolean
    features: FeatureProps[]
    animate?: any
} & PageContainerProps

type FeatureProps = {
    heading?: ReactNode
    subheading?: ReactNode
    icon?: ReactNode
    centerText?: boolean
} & StackProps

export function FeaturesList({
    heading = '',
    subheading = '',
    features,
    centerText = false,
    animate = undefined,
    ...rest
}: FeaturesListProps) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer {...rest}>
            {heading && subheading && (
                <Stack
                    as={Faded}
                    spacing='40px'
                    flex='1'
                    textAlign='center'
                    align='center'
                >
                    <Heading
                        lineHeight='50px'
                        fontWeight='medium'
                        fontSize='heading'
                    >
                        {heading}
                    </Heading>
                    <Subheading>{subheading}</Subheading>
                </Stack>
            )}
            <Stack
                as={Faded}
                flexDir='row'
                spacing='20px'
                flex='1'
                flexWrap='wrap'
            >
                {features.map((step, i) => (
                    <Feature
                        minW={['100%', '100%', '0']}
                        flex='1'
                        key={i}
                        centerText={centerText}
                        {...step}
                    />
                ))}
            </Stack>
        </PageContainer>
    )
}

const Feature = ({
    heading = '',
    subheading = '',
    icon = '',
    centerText,
    ...rest
}: FeatureProps) => {
    return (
        <Stack
            textAlign={centerText ? 'center' : 'left'}
            w='auto'
            spacing='20px'
            p='40px'
            {...rest}
        >
            <Col
                minW='40px'
                maxW='140px'
                fontWeight='medium'
                alignSelf={centerText ? 'center' : 'flex-start'}
            >
                {icon}
            </Col>
            <Heading fontSize='subheading'>{heading}</Heading>
            <Box m={0} fontSize='text' opacity={0.6} lineHeight='30px'>
                {subheading}
            </Box>
        </Stack>
    )
}
