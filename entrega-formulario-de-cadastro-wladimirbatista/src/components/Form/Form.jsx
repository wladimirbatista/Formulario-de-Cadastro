import * as yup from 'yup';
import FormStyled from '../Styles/Form-Styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import logoImg from "./../img/pack-logo.png"
import fontImg from "./../img/jp-img.png"
import logoHeader from "./../img/image 1.png"
import animaLogo from "./../img/animeKenzie-logo.png"


const Form = ({userState, setUserState}) => {

  let navigate = useNavigate()

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome é obrigatorio!")
      .min(3, "Mínimo 3 caracteres"),
    email: yup
      .string()
      .email("E-mail Inválido!")
      .required("E-mail é obrigatorio!"),
    password: yup
      .string()
      .required("Senha é obrigatorio!")
      .min(8, "Mínimo 8 caracteres")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, 
      "A senha deve conter pelo menos 8 caracteres, letras maiúsculas e minúsculas, números e caracteres especiais!"),
    confirmPassword: yup
      .string()
      .required("Senha é obrigatorio!")
      .oneOf([yup.ref("password")], "Senha Invalida! Confirmar senha disponibilizada!")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmit = (user) => {
    setUserState([user])
    navigate(`/welcome/${user.name}`)
  }

  const welcomeDirect = () => {
    const user = userState.map((user) => user.name)
    navigate(`/welcome/${user}`)
  }

  return(
    <FormStyled className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='inputs-container'>
        <div className='header'>
          <img src={logoHeader}/>
          <h2>animaKenzie</h2>
        </div>
        <figure>
          <img src={logoImg}/>
          <img src={fontImg}/>
        </figure>
        <div className='input-field'>
          <input type="text" placeholder='Nome' {...register('name')}/>
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className='input-field'>
          <input type="text" placeholder='E-mail' {...register('email')}/>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className='input-field'>
          <input type="password" placeholder='Senha' {...register('password')}/>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className='input-field'>
          <input type="password"placeholder='Confirmar Senha' {...register('confirmPassword')}/>
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>
        <button type="submit">Registrar</button>
        <div className='member-field'>
          <p>Já é membro?</p>
          <button onClick={welcomeDirect}>Clique aqui!</button>
        </div>
      </div>
      <div className='logo-container'>
        <div>
          <figure>
            <img src={animaLogo}/>
          </figure>
        </div>
        <h1>animaKenzie.</h1>
        <p>Assita animes online em HD, legendado ou dublado, no seu celular ou computador.</p>
        <strong>AnimaKenzie, o seu portal de animes online.</strong>
      </div>
    </FormStyled>
  )
}

export default Form;