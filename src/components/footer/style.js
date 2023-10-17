import { styled } from "@/styles";

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
                "&:first-child":{
                    maxWidth: 298,
                },
                "&:nth-child(2)":{
                    maxWidth: 331,
                },
                h6:{
                    fontFamily: "$BROmnyBold",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    marginBottom: 16,
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
                        marginLeft: "2px",
                        "&:hover":{
                            color: "$cinza",
                        }
                    }
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
        }
    }
})