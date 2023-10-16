// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript }  from "next/document"
import { getCssText } from "@/styles"

export default function MainStyle() {
    return(
        <Html lang="pt-br">
            <Head>
                <link href="https://fonts.cdnfonts.com/css/bromny-black" rel="stylesheet" />
                <style id="stiches" dangerouslySetInnerHTML={{__html: getCssText()}}></style>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}