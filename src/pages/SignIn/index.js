import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import Logo from "../../Assets/Logo.png";
import { login } from "../../services/auth";
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Form, Container } from "./styles";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      toast.error("Preencha e-mail e senha para continuar!");
    } else if( password.length<4){
      toast.warn("A senha deve ter no mínimo 4 dígitos");
    }    
    else {
      try {
        const response = await axios.post(`http://localhost:5000/usuarios`, { email, password });
        login(response.data.token);
        this.props.history.push("/register");
      } catch (err) {
        toast.error("Houve um problema com o login, verifique suas credenciais. T.T");
      }
    }
  };

  render() {
    return (
        <Container>
          <ToastContainer />
            {/* <Form> */}
            <Form onSubmit={this.handleSignIn}>
                <img src={Logo} alt="Logo" />
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                
                  <button type="submit">
                      <h3>Entrar</h3>
                  </button>
                <hr />
                <Link to="/signup">Criar conta grátis</Link>
            </Form>
        </Container>
    )
  }
}

export default withRouter(SignIn);