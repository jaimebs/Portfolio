import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  max-width: 396px;
  height: 502px;
  display: flex;
  flex-direction: column;
  padding: 66px 44px 44px;
  background: #fff;
  border-radius: 6px;
  opacity: 85%;

  @media (max-width: 320px) {
    padding: 10px;
  }
`;

export const Head = styled.header`
  text-align: center;

  img {
    max-width: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 20px;
    color: #313f47;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  p {
    text-transform: uppercase;
  }
`;

export const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 50px;
  fill: #313f47;
  transition: 0.5s;

  &:hover {
    fill: #0073b1;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 50px;
  fill: #313f47;
  transition: 0.5s;

  &:hover {
    fill: black;
  }
`;

export const Email = styled(MdEmail)`
  font-size: 60px;
  fill: #313f47;
  transition: 0.5s;

  &:hover {
    fill: red;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  border-top: 1px solid #313f47;
  padding: 10px 0;
  opacity: 80%;

  a {
    color: #313f47;

    :hover {
      cursor: pointer;
      color: black;
      transition: 0.5s;
    }
  }
`;
