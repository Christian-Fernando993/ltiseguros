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
        position: "relative",
        // background: `url(${bgHero.src}) no-repeat top center`,
        bottom: 0,
        left: 0,
        with: "100%",
        height: 300,
        zIndex: -1,
    }
})

export const ContexText = styled("div", {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    // flex: 1,
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
        right: 85,
        Image: {
            maxWidth: "682px",
            height: "926px",
        }
    },
    "@media(max-width: 1270px)":{
        ".right": {
            right: -50
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
            }
        },
        ".right": {
            position: "inherit",
            top: 0,
            // left: 0,

            ".modelo": {

            }
        }
    }
})