import { createStitches } from "@stitches/react";

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
    }, 
});