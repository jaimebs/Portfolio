import Link from "next/link";
import {
  Container,
  Main,
  Head,
  Footer,
  Section,
  Languages,
  Frameworks,
  Outher,
} from "../styles/sobre";

function Sobre() {
  return (
    <Container>
      <Main>
        <Head>
          <h1>SOBRE</h1>
        </Head>
        <Section>
          Me chamo <span>Jaime Barbosa Santana</span> sou formado em Análise e
          desenvolvimento de Sistemas (2011), desenvolvedor Fullstack, e possuo
          experiência em desenvolvimento de aplicações em projetos com as
          seguintes tecnologias e ferramentas:
        </Section>
        <Languages>
          <h3>Linguagens</h3>
          <p>- JavaScript | TypeScript</p> <p>- Java</p> <p>- C#</p>{" "}
          <p>- .NET</p>
        </Languages>

        <Frameworks>
          <h3>Frameworks</h3>
          <p>- Angular</p> <p>- ReactJS</p> <p>- React Native</p>{" "}
          <p>- NodeJs</p>
        </Frameworks>

        <Outher>
          <h3>Outras ferramentas</h3>
          <p>- Git | GitHub</p>
        </Outher>

        <Footer>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </Footer>
      </Main>
    </Container>
  );
}

export default Sobre;
