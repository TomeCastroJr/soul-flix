import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { entrarGoogle, loginUsuario } from "../firebase/auth";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function entrar(data) {
    loginUsuario(data.email, data.senha).then(() => {
      toast.success("Bem-vindo(a)!");
      navigate("/filmes");
    }).catch(() => {
      toast.error("Email e/ou senha incorreta!");
    });
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success("Bem-vindo (a)!");
      navigate("/filmes");
    });
  }

  return (
    <main className="login">
      <form className="form-section mt-5" onSubmit={handleSubmit(entrar)}>
        <h1>Login</h1>
        <hr />
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: "O email é obrigatório" })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: { value: 6, message: "Mínimo de 6 caracteres." },
            })}
          />
          {errors.senha && (
            <small className="invalid">{errors.senha.message}</small>
          )}
        </div>
        <Button variant="primary" className="mt-1 w-100" type="submit">
          Entrar
        </Button>
        <Button
          onClick={handleEntrarGoogle}
          variant="danger"
          className="mt-1 w-100"
          type="button"
        >
          Entrar com o Google
        </Button>
        <p>Novo por aqui ?</p>
        <Link className="btn btn-primary" to="/cadastro">ainda não possui conta ?</Link>
      </form>
    </main>
  );
}

export default Login;
