export const baseFontSize = 14

const breakpoints = {
    sm: 576,
    md: 768,
    lg: 991,
    xl: 1280,
}
const baseSpace = 16

export const theme = {
    breakpoints:{
        sm: 576,
        md: 768,
        lg: 991,
        xl: 1280,
    },
    space: {
        xs: baseSpace,
        s: baseSpace * 1.5,
        m: baseSpace * 2,
        l: baseSpace * 3,
        xl: baseSpace * 4,
        xxl: baseSpace * 5,
        xxl2: baseSpace * 6,
        xxl3: baseSpace * 7,
        xxl4: baseSpace*8,
        xxl5: baseSpace * 9,
        xxl6: baseSpace * 10,
        xxl7: baseSpace * 11,
        xxl8: baseSpace * 12,
        xxl9: baseSpace * 13,
        xxl10: baseSpace * 14,
        xxl11: baseSpace * 15,
        xxl12: baseSpace * 16,
        xxl13: baseSpace * 17,
        xxl14: baseSpace * 18,
        xxl15: baseSpace * 19,
        xxl16: baseSpace * 20,
    },
    print: {
        breakpoint: 'print',
    },
    // Legacy below
    lineHeights: {
        paragraph: 1.5,
        heading: 1.25,
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },
    fontSizes: {
        xl6: `${70 / baseFontSize}rem`,
        xl5: `${52 / baseFontSize}rem`,
        xl4: `${48 / baseFontSize}rem`,
        xl3: `${36 / baseFontSize}rem`,
        xxl: `${28 / baseFontSize}rem`,
        xl: `${20 / baseFontSize}rem`,
        l: `${18 / baseFontSize}rem`,
        m: `${16 / baseFontSize}rem`,
        s: `${14 / baseFontSize}rem`,
        xs: `${12 / baseFontSize}rem`,
        xxs: `${8 / baseFontSize}rem`,
    },
    fontFamilies: {
        montserrat: `'Montserrat', sans-serif`,
        sevenOneCaps: `'SevenOneCaps', sans-serif`,
        sevenOneHighlight: `'SevenOneHighlight', sans-serif`,
    },
    border: {},
    media: {
        sm: `@media only screen and (min-width: ${breakpoints.sm}px), print`,
        md: `@media only screen and (min-width: ${breakpoints.md}px), print`,
        lg: `@media only screen and (min-width: ${breakpoints.lg}px), print`,
        xl: `@media only screen and (min-width: ${breakpoints.xl}px), print`,
        down: {
            xl: `@media only screen and (max-width: ${breakpoints.xl - 1}px`,
            lg: `@media only screen and (min-width: ${breakpoints.lg - 1}px`,
            md: `@media only screen and (min-width: ${breakpoints.md - 1}px`,
            sm: `@media only screen and (min-width: ${breakpoints.sm - 1}px`,
        },
        browser: {
            ie11: `@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)`,
        },
    },
    colors: {
        red: '#E52F42',
        blue: '#0E2B56',
        white: '#FFFFFF'
    },
    borderRadius: 4,
    borderRadiusSizes: {
        xs: 3,
        s: 8,
        m: 12,
        l: 24,
        xl: 48,
        xxl: 72,
        top: {
            xs: `4px 4px 0 0`,
            s: `12px 12px 0 0`,
            m: '24px 24px 0 0',
            l: '48 48px 0 0',
            xl: '72px 72px 0 0',
        },
    },
    layout: 740,
    zIndices: {
        backgroundAd: -100,
        content: 0,
        stickyContent: 100,
        overlay: 200,
        popover: 300,
        header: 400,
        wash: 500,
        modal: 600,
        banner: 700,
        overlayAd: 800,
    },
    transition: {
        all: 'all 0.4s ease-in-out',
        durationAndTimingFunc: '0.4s ease-in-out',
    },
}

export const containerMaxWidths = {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
}

