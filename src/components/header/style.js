import { styled } from "@/styles";

export const HeaderSyle = styled("header", {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 120,
    display: "flex",
    alignItems: "center",
    zIndex: 2023,

    "@lgscreen":{
        background: "#000",
    },
    "@ipad":{
        backgroundColor: "#fff",
    },
    "@celular": {
        backgroundColor: "#008000",
    }
})