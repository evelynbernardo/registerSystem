import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../Assets/Logo.png";

import api from "../../services/api";

import { Form, Container } from "./styles";

class Register extends Component {
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
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else if(password.length<4) {
      this.setState({ error: "Por insira uma senha com no minimo 4 caracteres" });
    } else {
      try {
        await api.post("/users", { username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
      alert("Registrado");
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <div class="field">
            {/* <label for="name">Nome</label> */}
            <input
              type="text"
              placeholder="Nome"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          
          <div class="field">
            {/* <label for="name">CPF</label> */}
            <input
              type="text"
              placeholder="CPF"
              onChange={e => this.setState({ cpf: e.target.value })}
            />
          </div>
          
          <div class="field">
            {/* <label for="name">E-mail</label> */}
            <input
              type="email"
              placeholder="Endereço de e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          
          <div class="field">
              {/* <label for="name">CEP</label> */}
              <input
              type="text"
              placeholder="CEP"
              min="4"
              onChange={e => this.setState({ cep: e.target.value })}
            />
          </div>
          
          <div class="field-group">
            <div class="field">
                {/* <label for="name">Rua</label> */}
                <input
                type="text"
                placeholder="Rua"
                min="4"
                onChange={e => this.setState({ rua: e.target.value })}
                />
            </div>
            <div class="field">
              {/* <label for="name">Rua</label> */}
              <input
              type="number"
              placeholder="N"
              min="4"
              onChange={e => this.setState({ number: e.target.value })}
              />
            </div>
          </div>
          
          <div class="field">
            {/* <label for="name">Bairro</label> */}
            <input
              type="text"
              placeholder="Bairro"
              min="4"
              onChange={e => this.setState({ bairro: e.target.value })}
            />
          </div>

          <div class="field">
            {/* <label for="name">Cidade</label> */}
            <input
            type="text"
            placeholder="Cidade"
            min="4"
            onChange={e => this.setState({ cidade: e.target.value })}
            />
          </div>
          
          <button type="submit">Registrar</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Register);