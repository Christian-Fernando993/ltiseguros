import { styled } from "@/styles";
import { Container } from "@/styles/global";

export const FooterStyle = styled("footer", {
    background: "$roxo",
    paddingTop: 50,
    paddingBottom: 50,
})

export const ContentTop = styled("div", {
    ".dados-lti":{
        marginBottom: 52,
        ul:{
            display: "flex",
            justifyContent: "space-between",
            li:{
                grid: "3.2rem",
                maxWidth: "280px",
                h6:{
                    fontFamily: "$BROmnyBold",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    marginBottom: 10,
                },
                p:{
                    color: "$cinza",
                    fontFamily: "$BROmnyRegular",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    ".novo-site": {
                        color: "$branco",
                        fontFamily: "$BROmnyRegular",
                        transition: "color 0.3s ease",
                        "&:hover":{
                            color: "$cinza",
                        }
                    }
                },
                ".email-mobile": {
                    display: "none",
                }
            },
        },
        "@media(max-width: 1280px)": {
            ul: {
                gap: "2rem",
                textAlign: "center",
                flexDirection: "column",
                li:{
                    width: "100%",
                    maxWidth: "100%",
                    h6:{
                        marginBottom: 0
                    }
                },
            },
        },
        "@media(max-width: 380px)": {
            ".email": {
                display: "none",
            },
            ".email-mobile": {
                display: "block !important",
                color: "$cinza",
                fontFamily: "var(--fonts-BROmnyRegular)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "24px",
                justifyContent: "center",
                "&:hover": {
                    color: "$branco", 
                }
            }
        }
    }
})

export const ContentBottom = styled("div", {
    ".copy":{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ".logo-rodape":{
            maxWidth: 61,
            height: "31.396px",
        },
        p:{
            fontFamily: "$BROmnyRegular",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "32px",
            maxWidth: 510,
        },
        "@media(max-width: 1100px)":{
            flexDirection: "column",
            gap: "2rem",
        },
        "@media(max-width: 680px)":{
            textAlign: "center",
            p:{
                lineHeight: "20px",
            }
        }
    }
})