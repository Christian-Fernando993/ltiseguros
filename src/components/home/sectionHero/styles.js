import { styled } from "../../../styles";
import bgHero from "../../../assets/bg_hero.svg";
import { Container } from "../../../styles/global";

export const SectionHeroStyle = styled("section",{
    position: "relative",
    zIndex: 1,
    with: "100%",
    height: 812,
    paddingTop: 100,
    display: "flex",
    [`${Container}`]: {
        display: "flex",
        alignItems: "flex-start",
    },
    "&:after": {
        content: "",
        width: "100%",
        height: 417,
        background: `url(${bgHero.src}) no-repeat top center`,
        left: 0,
        bottom: 0,
        zIndex: -1,
        position: "absolute",
    },
    "@media(max-width: 1270px)":{
        height: "auto",  
    },
})

export const ContexText = styled("div", {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    ".left": {
        flex: 1,
        maxWidth: 522,
        paddingTop: 152,
        h1: {
            fontFamily: "$BROmnyBold",
            fontSize: "68px",
            fontWeight: 400,
            lineHeight: "68px",
            marginBottom: 31,
        },
        ".paragraph": {
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
            gap: 9,
            ".icon":{
                maxWidth: 55,
                height: 55,
            },
            p:{
                maxWidth: 406,
                fontFamily: "$BROmnyRegular",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
            }
        },
        ".susep":{
            marginLeft: 65,
            p: {
                fontFamily: "$BROmnyRegular",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                marginBottom: 14,
            }
        }
    },
    ".right":{
        position: "relative",
        bottom: 120,
        Image: {
            maxWidth: "682px",
            height: "926px",
        }
    },
    "@media(max-width: 1270px)":{
        ".left":{
            h1:{
                fontSize: 60,
            },
            ".susep":{
                marginLeft: 0,
            }
        },
        ".right": {
            right: -25,
            bottom: 0,
            ".modelo": {
                maxWidth: "500px",
                height: "600px",
            }
        }
    },
    "@media(max-width: 991px)":{
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        ".left":{
            paddingTop: 60,
            maxWidth: "100%",
            h1: {
                textAlign: "center",
            },
            ".paragraph":{
                p:{
                    maxWidth: "100%",
                }
            },
            ".susep":{
                display: "flex",
                alignItems: "center",
                p:{
                    marginBottom: 0,
                    marginRight: 10,
                }
            }
        },
        ".right": {
            position: "inherit",
            top: 0,
            ".modelo": {
                maxWidth: "500px",
                height: "600px",
            }
        }
    },
    "@media(max-width: 680px)":{
        ".left":{
            h1:{
                fontSize: 50,
            },
            ".susep":{
                display: "flex",
                justifyContent: "center",
            }
        },
        ".right": {
            right: 0,
            bottom: 0,
            ".modelo": {
                maxWidth: "280px",
                height: "350px",
            }
        }
    }
})