// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript }  from "next/document"
import { getCssText } from "@/styles";

export default function MainStyle() {
    return(
        <Html lang="pt-br">
            <Head>
                <style id="stiches" dangerouslySetInnerHTML={{__html: getCssText()}}></style>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}