import * as landingCards from './svgs/landingCards'

const BASE_PATH = '/docs/'
export const IndexCardsPaths = [
    { icon: landingCards.Hero, title: 'Hero', path: BASE_PATH + 'hero' },
    {
        icon: landingCards.Feature,
        title: 'Feature',
        path: BASE_PATH + 'feature',
    },
    {
        icon: landingCards.FeatureList,
        title: 'Features List',
        path: BASE_PATH + 'featuresList',
    },
    {
        icon: landingCards.FeaturesGrid,
        title: 'Features Grid',
        path: BASE_PATH + 'featuresGrid',
    },
    { icon: landingCards.Footer, title: 'Footer', path: BASE_PATH + 'footer' },
    {
        icon: landingCards.HowItWorks,
        title: 'How It Works',
        path: BASE_PATH + 'howItWorks',
    },
    { icon: landingCards.NavBar, title: 'Nav Bar', path: BASE_PATH + 'navBar' },
    {
        icon: landingCards.TestimonialsLogos,
        title: 'TestimonialsLogos',
        path: BASE_PATH + 'testimonialsLogos',
    },
    {
        icon: landingCards.TopBanner,
        title: 'TopBanner',
        path: BASE_PATH + 'topBanner',
    },
    {
        icon: landingCards.Text,
        title: 'SectionTitle',
        path: BASE_PATH + 'sectionTitle',
    },
]
