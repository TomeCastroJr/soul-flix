import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { cadastrarUsuario, entrarGoogle } from '../firebase/auth'
import toast from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'
import "./styles/Cadastro.css"

const Cadastro = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()
  const navigate = useNavigate()

  function cadastrar(dados){
    cadastrarUsuario(dados.nome, dados.email, dados.senha).then( () => {
      toast.success("Bem-vindo (a)")
      navigate("/filmes")
    }).catch( (error) => {
      toast.error("Não foi possível logar" + error.code)
    })
    }

  function handleEntrarGoogle(){
    entrarGoogle().then( () => {
      toast.success("Seja bem vindo")
      navigate("/filmes")
    } )
  }

  return (
    <main className="login-container">
      <form className='form-section' onSubmit={handleSubmit(cadastrar)}>
        <img src="/faviIcon.png" width="150"/>
        <h1>Cadastro</h1>
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            className='form-control' 
            {...register("nome")}
            {...register("nome", { required: true, maxLength: 150 })}
          /> 
          {errors.nome && <small className='invalid'>Nome inválido</small>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className='form-control' 
            {...register("email")}
            {...register("email", { required: true })}
          />
          {errors.email && <small className='invalid'>Email inválido</small>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            className='form-control' 
            {...register("senha")} 
            {...register("senha", { required: true, minLength: 6 })}
          />
          {errors.senha && <small className='invalid'>Senha inválida</small>}
        </div>

        <Button variant='dark' className='mt-3 w-100' type='submit'>Cadastrar</Button>
        <Button 
          variant='danger' 
          className='mt-1 w-100' 
          type='button' 
          onClick={handleEntrarGoogle}>Entrar com o google</Button>
          <p>Já tem acesso ?</p>
          <Link className="btn btn-primary" to="/">Faça login</Link>
      </form>
    </main>
  )
}

export default Cadastro