import Link from "next/link";
import {
  Container,
  Main,
  Head,
  Icons,
  Linkedin,
  Github,
  Email,
  Footer,
} from "../styles/home";

export default function Home() {
  return (
    <Container>
      <Main>
        <Head>
          <img
            src="https://avatars1.githubusercontent.com/u/17276957?s=460&u=910b24d7b50d03b485ecd27ba68866b361c1ee83&v=4"
            alt="Imagem do Portifólio"
          />
          <h1>JAIME BARBOSA SANTANA</h1>
          <p>Fullstack Developer</p>
        </Head>

        <Icons>
          <a
            href="https://www.linkedin.com/in/jaimebs/"
            target="_blank"
            title="www.linkedin.com/in/jaimebs"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/jaimebs"
            target="_blank"
            title="github.com/jaimebs"
          >
            <Github />
          </a>
          <a
            href="mailto:jaimebs@gmail.com"
            target="_blank"
            title="jaimebs@gmail.com"
          >
            <Email />
          </a>
        </Icons>
        <Footer>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </Footer>
      </Main>
    </Container>
  );
}
