import Image from 'next/image'
import Link from 'next/link'

import Logo from "../../assets/Logo_LTI.svg"

import {HeaderSyle} from "./style"
import { Container } from "../../styles/global"


export function Header() {
    return(
        <HeaderSyle>
            <Container>
                <div className="logo">
                    <Link href="/">
                        <Image src={Logo} alt="Logo LTI Seguros"/>
                    </Link>         
                </div>
            </Container>
        </HeaderSyle>
    )
}