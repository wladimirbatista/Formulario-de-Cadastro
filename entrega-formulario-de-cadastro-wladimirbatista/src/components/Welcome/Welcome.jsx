import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import WelcomeStyled from "../Styles/Welcome_Styled";
import gif from "./../img/animaKenzie-git.gif"
import img from "./../img/chibi-kakashi.png"

const Welcome = () => {

  const params = useParams()

  let navigate = useNavigate()

  const backFormPage = () => {
    navigate("/")
  }

  return(
    <WelcomeStyled>
      <div className="welcome-container">
        <div className="welcome-field">
          <img className="image-chibi" src={img}/>
          <h1>{params.name}, seja bem-vindo a <strong>AnimaKenzie.</strong></h1>
          <h2>Seu cadastro foi realizado com sucesso.</h2>
        </div>
        <figure>
          <img className="gif" src={gif}/>
        </figure>
        <button onClick={backFormPage}>Voltar</button>
      </div>
    </WelcomeStyled>
  )
}

export default Welcome;