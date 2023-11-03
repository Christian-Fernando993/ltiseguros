import { globalCss, styled } from './index'

export const globalStyles = globalCss({
    "*": {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        fontFamily: "$BROmnyBold",
        listStyle: "none",
    },
    html:{
        fontSize: "62,5%"
    },
    body: {
        "-webkit-font-smoothing": "antialiased",
        backgroundColor: "$azul",
        color: "$branco"
    },
    img: {
        maxWidth: "100%",
        display: "block"
    },
    button: {
        cursor: "pointer"
    }
})


export const Container = styled("div", { 
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 72px',
    "@media(max-width: 991px)":{
        padding: "0 30px",
    },
    "@media(max-width: 380px)":{
        padding: "0 15px",
    },
})