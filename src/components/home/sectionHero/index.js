import Image from "next/image";

import { Container } from "@/styles/global";
import { SectionHeroStyle, ContexText } from "./styles";

import Icon from "../../../assets/icon.svg";
import Susep from "../../../assets/susep.svg";
import Modelo from "../../../assets/Modelo_Hero.png"

export function SectionHero() {
    return(
        <SectionHeroStyle>
            <Container>
                <ContexText>
                    <div className="left">
                        <h1>Seguro Auto para todos</h1>
                        <div className="paragraph">
                            <Image src={Icon} alt="Icone seta pra cima"/>
                            <p>Presente em mais de 1.700 cidades e em todos os estados do Brasil.</p>
                        </div>
                        <div className="susep">
                            <p>Autorizado pela</p>
                            <Image className="icon" src={Susep} alt="Imagem da Susep" />
                        </div>
                    </div>
                    <div className="right">
                        <Image src={Modelo} className="modelo" alt="Mulher com a mão proximo a regiao do coração" />
                    </div>
                </ContexText>
            </Container>
        </SectionHeroStyle>
    )
}