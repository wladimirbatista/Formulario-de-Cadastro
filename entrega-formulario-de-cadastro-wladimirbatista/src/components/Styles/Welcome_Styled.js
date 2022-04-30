import styled from "styled-components";

const WelcomeStyled = styled.main `
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(157,74,177,1) 46%, rgba(2,0,36,1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: 'Poppins', sans-serif;

  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .welcome-field {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3rem;
    width: 80%;
    height: 20%;
  }

  .welcome-field h1 {
    color: white;
    font-family: 'Poppins', sans-serif;
  }

  .welcome-field strong {
    background: linear-gradient(to right, white 48%, #E487FB 0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5em;
  }

  .welcome-field h2 {
    color: white;
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }

  .image-chibi {
    width: 13%;
    height: 100%;
    background: none;
  }

  .gif {
    border: 0;
    border-radius: 20px;
    margin-bottom: 3rem;
  }

  button {
    background: #E487FB;
    font-size: 16px;
    font-weight: 700;
    width: 10%;
    height: 10%;
    border: 2px solid white;
    border-radius: 10px;
    color: #3E1149;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
`;

export default WelcomeStyled;