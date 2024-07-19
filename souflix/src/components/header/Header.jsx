import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../firebase/auth'
import { UsuarioContext } from '../../contexts/UsuarioContext'

const Header = () => {
  const usuario = useContext(UsuarioContext)
  const navigate = useNavigate();

  function handleLogout(){
    logout().then( ()=> {
      navigate("/")
    })
  }

  return (
    <header>
        <Navbar bg='dark' variant="dark" expand="md">
          <Container fluid>
            <Link to="/">
              <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" alt="imagem" width="32px" />
            </Link>

            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className='ms-auto'>
                {usuario && <Link className='nav-link' to="/filmes">Filmes</Link>}
                {!usuario && <Link className='nav-link' to="/login">Login</Link>}
                {!usuario && <Link className='nav-link' to="/cadastro">Cadastro</Link>}
                {usuario && <span className='text-light nav-link'>{usuario.displayName}</span> }
                {usuario && <Button variant='outline-light' onClick={handleLogout}>
                  Sair
                </Button>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header