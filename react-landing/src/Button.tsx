import React, { FC, Fragment, forwardRef } from 'react'
import { Button as B, HeadingProps, ButtonProps } from '@chakra-ui/core'
import { Children } from 'react'
import get from 'lodash.get'
import Color from 'color-js'
import { useTheme } from 'emotion-theming'
import { useColor } from './support'

export const Button = forwardRef(
    ({ bg = 'primary', ...props }: ButtonProps & { href?: string }, ref) => {
        const realBg = useColor(bg)
        const lightness = Color(realBg as any).getLightness()
        // console.log({ lightness })
        const isDark = lightness < 0.7
        const color = isDark ? 'white' : 'black'
        // console.log('bg', bg)
        // console.log('color', color)
        if (!props.children) {
            return <Fragment />
        }
        return (
            <B
                ref={ref}
                as={props.href ? 'a' : 'button'}
                px='20px'
                d='block'
                width='auto'
                color={color}
                bg={bg}
                fontSize='18px'
                fontWeight='medium'
                _hover={{ bg: color, color: bg as string }}
                {...props}
            />
        )
    },
)