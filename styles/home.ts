import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 320px) {
    padding: 10px;
  }
`;

export const Main = styled.div`
  max-width: 396px;
  height: 502px;
  text-align: center;
  padding: 66px 44px 44px;
  background: #fff;
  border-radius: 6px;
  opacity: 85%;
`;

export const Head = styled.header`
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
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 50px;
  fill: #313f47;

  &:hover {
    fill: #0073b1;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 50px;
  fill: #313f47;

  &:hover {
    fill: black;
  }
`;

export const Email = styled(MdEmail)`
  font-size: 60px;
  fill: #313f47;

  &:hover {
    fill: red;
  }
`;
