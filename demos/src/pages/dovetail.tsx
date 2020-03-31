import React from 'react'
import Head from 'next/head'
import {
    Hero,
    Heading,
    LandingProvider,
    SubHeading,
    Divider,
    Col,
    Feature,
    HowItWorks,
    FeaturesList,
    NavBar,
    Footer,
    SectionTitle,
    TestimonialsLogos,
    FeaturesGrid,
    TopBanner,
} from 'react-landing/src'
import { Button } from 'react-landing/src/Button'
import { GradientRect, CurlyWire } from 'react-landing/src/decorations'
import { Box } from '@chakra-ui/core'

// background: linear-gradient(45deg,#e9fcff 30%,#fdf2ed 60%);
// FF593D

const Page = () => (
    <LandingProvider primary='#5A38AC'>
        <TopBanner
            dark
            bg='#24114D'
            heading='Check out more landing pages, we have plenty'
            cta='Learn More'
            bullet='New'
        />
        <NavBar
            logo={<img width='140px' src='/dovetail/logo.svg' />}
            navs={[
                <a>Why DatoCMS</a>,
                <a>Learn</a>,
                <a>Marketplace</a>,
                <a>Pricing</a>,
                <Button>try for free!</Button>,
            ]}
        />
        <Hero
            heading={'Make analysis enjoyable'}
            subhead='Discover patterns across a variety of qualitative research methods and unstructured data. Dovetail is analysis software you’ll love to use.'
            image={<img src='/dovetail/hero.png' />}
            cta='Try free for 7 days'
        />
        <FeaturesList
            heading=''
            floatingElement={
                <CurlyWire
                    opacity={0.1}
                    stroke='#5A38AC'
                    maxW='pageContainer'
                />
            }
            features={[
                {
                    heading: 'Make sense of data',
                    subhead:
                        'Dovetail is a powerful way to discover patterns across interviews, usability testing, survey responses, and more',
                    icon: <img width='60px' src='dovetail/feature1.svg' />,
                },
                {
                    heading: 'Build your taxonomy',
                    subhead:
                        'Organize tags into a hierarchy with intuitive controls like drag & drop, and extend your project with global tags.',
                    icon: <img width='60px' src='dovetail/feature2.svg' />,
                },
                {
                    heading: 'Visualize your research',
                    subhead:
                        'Turn qualitative data into quantitative data with highlights, and visualize your work with a variety of beautiful charts.',
                    icon: <img width='60px' src='dovetail/feature3.svg' />,
                },
            ]}
        />
        <Feature
            heading='From raw data to insights'
            subhead='Simply select text and highlight to add tags. Discover patterns across interview transcripts, usability testing notes, survey responses, and more.'
            bg='#FFF0D4'
            direction='column'
            floatingElement={
                <CurlyWire
                    opacity={0.6}
                    stroke='#FFB300'
                    // maxW='pageContainer'
                />
            }
            image={
                <Box shadow='lg'>
                    <video
                        autoPlay
                        muted
                        src='/dovetail/video1.mp4'
                        poster='/dovetail/videoposter.webp'
                        width='100%'
                    />
                </Box>
            }
        />
        <FeaturesGrid
            heading='Analysis features'
            subhead='Make sense of interview notes, transcripts, survey responses, and more.'
            features={[
                {
                    heading: 'Highlights',
                    subhead:
                        'Select text and highlight paragraphs, sentences, or words to tag them.',
                    icon: <img width='60px' src='dovetail/feature1.svg' />,
                },
                {
                    heading: 'Charts',
                    subhead:
                        'Visualize your tags with multiple charts including a bar chart, pie chart, radar plot, and more.',
                    icon: <img width='60px' src='dovetail/feature2.svg' />,
                },
                {
                    heading: 'Tag management',
                    subhead:
                        'asily modify your tags during analysis with controls like edit, copy, move, and merge.',
                    icon: <img width='60px' src='dovetail/feature3.svg' />,
                },
                {
                    heading: 'Search',
                    subhead:
                        'Search the full text of research data and insights across all projects in your workspace.',
                    icon: <img width='60px' src='dovetail/feature3.svg' />,
                },
                {
                    heading: 'Highlights',
                    subhead:
                        'Select text and highlight paragraphs, sentences, or words to tag them.',
                    icon: <img width='60px' src='dovetail/feature1.svg' />,
                },
                {
                    heading: 'Charts',
                    subhead:
                        'Visualize your tags with multiple charts including a bar chart, pie chart, radar plot, and more.',
                    icon: <img width='60px' src='dovetail/feature2.svg' />,
                },
                {
                    heading: 'Filtering',
                    subhead:
                        'asily modify your tags during analysis with controls like edit, copy, move, and merge.',
                    icon: <img width='60px' src='dovetail/feature2.svg' />,
                },
                {
                    heading: 'Search',
                    subhead:
                        'Search the full text of research data and insights across all projects in your workspace.',
                    icon: <img width='60px' src='dovetail/feature3.svg' />,
                },
                {
                    heading: 'Bulk Edit',
                    subhead:
                        'Select text and highlight paragraphs, sentences, or words to tag them.',
                    icon: <img width='60px' src='dovetail/feature3.svg' />,
                },
                {
                    heading: 'Project',
                    subhead:
                        'Visualize your tags with multiple charts including a bar chart, pie chart, radar plot, and more.',
                    icon: <img width='60px' src='dovetail/feature1.svg' />,
                },
                {
                    heading: 'Tag management',
                    subhead:
                        'asily modify your tags during analysis with controls like edit, copy, move, and merge.',
                    icon: <img width='60px' src='dovetail/feature3.svg' />,
                },
                {
                    heading: 'Search',
                    subhead:
                        'Search the full text of research data and insights across all projects in your workspace.',
                    icon: <img width='60px' src='dovetail/feature3.svg' />,
                },
            ]}
        />
        <Divider />
        <Footer
            businessName='Prismic'
            columns={{
                Developers: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
                Company: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
                Product: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
            }}
        />
    </LandingProvider>
)

export default Page
