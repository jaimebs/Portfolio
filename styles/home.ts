import styled from "styled-components";

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

export const Head = styled.header`
  max-width: 396px;
  height: 502px;
  text-align: center;
  padding: 66px 44px 44px;
  background: #fff;
  border-radius: 4px;
  opacity: 85%;

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
