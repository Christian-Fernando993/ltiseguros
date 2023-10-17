import { createStitches } from "@stitches/react";
import localFont from 'next/font/local' // local font

const BROmnyBold = localFont({ src: '../assets/fonts/FontsFreeNetBROmnyBold.ttf', weight: '400' })
const BROmnyMedium = localFont({ src: '../assets/fonts/FontsFreeNetBROmnyMedium.ttf', weight: '400' })
const BROmnyRegular = localFont({ src: '../assets/fonts/FontsFreeNetBROmnyRegular.ttf', weight: '400' })


export const { styled, globalCss, keyframes, getCssText, theme } = 
createStitches({
    theme: {
        colors: {            
            // Cores
            azul: "#5a78ff",
            roxo: "#3C3246",
            // Tons de Cinza
            branco:"#FFFFFF",
            cinza:"#857F8B",
        },
        fonts:{
            BROmnyBold: `${BROmnyBold.style.fontFamily}, sans-serif`,
            BROmnyMedium: `${BROmnyMedium.style.fontFamily}, sans-serif`,
            BROmnyRegular: `${BROmnyRegular.style.fontFamily}, sans-serif`,
        },
    }, 
});