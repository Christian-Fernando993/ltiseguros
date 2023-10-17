import { FooterStyle, ContentTop, ContentBottom } from "./style";
import { Container } from "../../styles/global";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/Logo_LTI.svg"

export function Footer() {
    return (
        <FooterStyle>
            <Container>
                <ContentTop>
                    <div className="dados-lti">
                        <ul>
                            <li>
                                <h6>LTI Seguros S/A</h6>
                                <p>Nossa equipe está sempre pronta para tirar suas dúvidas.</p>
                            </li>
                            <li>
                                <h6>Para contratar</h6>
                                <p>
                                    Entre em contato com algum de nossos representantes. 
                                    <Link className="novo-site" href="https://loovi.com.br">
                                         Contratar agora
                                    </Link> 
                                </p>
                            </li>
                            <li>
                                <h6>Ouvidoria LTI</h6>
                                <p>31 3517-5055</p>
                            </li>
                            <li>
                                <h6>Sac LTI</h6>
                                <p>31 3517-5005</p>
                            </li>
                            <li>
                                <h6>Assessoria de imprensa</h6>
                                <p>assessoriadeimprensa@loovi.com</p>
                            </li>
                        </ul>
                    </div>
                </ContentTop>
                <ContentBottom>
                    <div className="copy">
                        <Image className="logo-rodape" src={Logo} alt="Logo LTI Seguro" />
                        <p>© Copyright LTI Seguros S/A - 2020  | Todos os direitos reservados</p>
                        <p>
                            A LOOVI é uma insurtech que oferece serviços de tecnologia, assistência 24h e 
                            produtos de seguros como representante da LTI Seguros S/A 
                            (SUSEP n.º 15414.649321/2021-55).
                        </p>
                    </div>
                </ContentBottom>
            </Container>
        </FooterStyle>
    )
}