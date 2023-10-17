import { styled } from "@/styles";

export const HeaderStyle = styled("header", {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 120,
    display: "flex",
    alignItems: "center",
    zIndex: 2023,
    ".logo":{
        "@media(max-width: 991px)":{
            display: "flex",
            justifyContent: "center"
        },
    },
})
