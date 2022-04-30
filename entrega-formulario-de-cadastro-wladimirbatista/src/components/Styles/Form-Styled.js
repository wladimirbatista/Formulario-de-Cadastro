import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  
  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    min-height: 100vh;
    background: black;
  }

  .header {
    display: flex;
    flex-direction: row;
    width: 22%;
    justify-content: space-around;
    align-items: center;
  }

  .header h2 {
    background: linear-gradient(to right, white 50%, #E487FB 0);
    font-family: 'Poppins', sans-serif;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .inputs-container figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .inputs-container input {
    width: 338px;
    height: 60px;
    border: 2px solid white;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.47);
    color: white;
    font-size: 16px;
    font-weight: 500;
    padding-left: 1rem;
    outline: none;
  }

  .input-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .input-field input::placeholder {
    color: white;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
  }

  .input-field span {
    color: red;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    width: 60%;
    margin-top: 0.5rem;
  }

  .inputs-container button {
    width: 338px;
    height: 60px;
    border: 2px solid white;
    border-radius: 10px;
    background: #E487FB;
    color: #3E1149;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }

  .member-field {
    color: white;
    display: flex;
    width: 45%;
    flex-direction: row;
    justify-content: center;
    /* background: aqua; */
  }

  .member-field button {
    color: #E487FB;
    width: 40%;
    height: 0;
    border: 0;
  }

  .member-field p {
    font-family: 'Poppins', sans-serif;
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    background: #3E1149;
    color: white;
  }

  .logo-container div {
    background: #E487FB;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    position: relative;
  }

  .logo-container img {
    margin-top: 3rem;
    position: relative;
  }

  .logo-container h1 {
    font-size: 80px;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, white 48%, #E487FB 0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 9rem;
  }

  .logo-container p {
    font-size: 18px;
    width: 45%;
    font-family: 'Poppins', sans-serif;
    text-align: center;
  }

  @media screen and (max-width: 320px) {
    .form {
      display: flex;
      flex-wrap: wrap;
    }
  }


`;

export default FormStyled;