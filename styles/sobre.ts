import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 414px) {
    padding: 10px;
  }
`;

export const Main = styled.div`
  max-width: 547px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 45px 44px 44px;
  background: #fff;
  border-radius: 6px;
  opacity: 85%;

  @media (max-width: 414px) {
    padding: 10px;
  }
`;

export const Head = styled.header`
  text-align: center;

  h1 {
    font-size: 20px;
    color: #313f47;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;

export const Section = styled.section`
  font-size: 17px;
  text-align: justify;
  margin-bottom: 10px;
  span {
    font-weight: bold;
  }
`;

export const Languages = styled.div`
  background: #ee7752;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 10px;
  transition: transform 0.2s;

  h3 {
    margin-bottom: 5px;
  }

  &:hover {
    transform: translateX(10px);
  }
`;

export const Frameworks = styled(Languages)`
  background: #23a6d5;
`;

export const Outher = styled(Languages)`
  background: #e73c7e;
  flex: 1;
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
