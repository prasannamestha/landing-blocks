import { Box, Input, Stack, StackProps, useColorMode } from '@chakra-ui/core'
import React, { ReactNode, useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Button } from './Button'
import { Col } from './layout'

export type EmailFormProps = {
    cta?: ReactNode
    placeholder?: ReactNode
    animate?: any
    fingerprint?: ReactNode
    value?: string
    onChange?: any
    onSubmit?: any
} & StackProps

export function EmailForm({
    cta = 'Notify me',
    placeholder = 'Enter your email',
    animate = undefined,
    fingerprint = '',
    value = '',
    onChange = console.log,
    onSubmit = console.log,
    ...rest
}: EmailFormProps) {
    const { colorMode } = useColorMode()
    return (
        <Stack
            justify='flex-start'
            width='auto'
            flexDirection={['column', null, 'row']}
            // align='center'
            fontSize='text'
            {...rest}
        >
            <Input
                focusBorderColor='primary'
                onChange={(e) => onChange(e.target.value)}
                value={value}
                shadow='sm'
                bg={{
                    dark: 'rgba(255,255,255, .2)',
                    // light: 'rgba(0,0,0,.03)',
                    light: '#fff',
                }[colorMode]}
                minW='250px'
                minH='40px'
                type='email'
                name='email'
                placeholder={placeholder}
            />
            <Box ml='20px' />
            <Col w={['100%', null, 'auto']}>
                <Button
                    onClick={onSubmit}
                    shadow='sm'
                    m='0'
                    px='10px'
                    textAlign='center'
                >
                    {cta}
                </Button>
            </Col>
        </Stack>
    )
}

const MessageBox = (props) => {
    return <Box minH='1em' {...props} />
}

export function MailchimpForm({
    url,
    ...rest
}: { url: string } & EmailFormProps) {
    const [email, setEmail] = useState('')
    const { colorMode } = useColorMode()
    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <Stack>
                    <EmailForm
                        value={email}
                        onSubmit={() => subscribe({ EMAIL: email })}
                        onChange={setEmail}
                        {...rest}
                    />
                    {status === 'sending' && (
                        <MessageBox
                            color={
                                { light: 'blue.600', dark: 'blue.300' }[
                                    colorMode
                                ]
                            }
                        >
                            sending...
                        </MessageBox>
                    )}
                    {status === 'error' && (
                        <MessageBox
                            color={
                                { light: 'red.500', dark: 'red.300' }[colorMode]
                            }
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                    {status === 'success' && (
                        <MessageBox
                            color={
                                { light: 'green.500', dark: 'green.300' }[
                                    colorMode
                                ]
                            }
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                </Stack>
            )}
        />
    )
}
