import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Logo from "../../Assets/Logo.png";
import axios from 'axios'
import api from "../../services/api";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      toast.warn("Preencha todos os dados para se cadastrar");
    } else if(password.length<4) {
      toast.warn("Por insira uma senha com no minimo 4 caracteres");
    } else {
      try {
        await axios.post(`http://localhost:5000/users`, this.state);
        toast.success("Registrado");
      } catch (err) {
        console.log(err);
        toast.error("Ocorreu um erro ao registrar sua conta. T.T");
      }
      
    }
  };

  render() {
    return (      
      <Container>
        <ToastContainer/>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            min="4"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
        
      </Container>
    );
  }
}

export default withRouter(SignUp);