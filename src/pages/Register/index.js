import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import api from "../../services/api";
import { Form, Container } from "./styles";
import { cpfMask, cepMask } from './mask'

class Register extends Component {
  constructor(props) {
    super(props)

    //this.state = {cpf:''}
    this.state = {cep: ''}
    this.handleChange = this.handleChange.bind(this)
  }
    handleChange(e){
      //this.setState({ cpf: cpfMask(e.target.value)})
      this.setState({ cep: cepMask(e.target.value)})
    }

  state = {
    name: "",
    cpf: "",
    email: "",
    cep:"",
    rua:"",
    numero:"",
    bairro:"",
    cidade:"",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, cpf, email, cep, rua, numero, bairro, cidade} = this.state;
    if (!name || !cpf || !email || !cep || !rua || !numero || !bairro || !cidade) {
      alert("Preencha todos os dados para se cadastrar" );
    } else {
      try {
        await api.post("/users", { name, cpf, email, cep, rua, numero, bairro, cidade });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        alert("Ocorreu um erro ao registrar sua conta. T.T" );
      }
      alert("Registrado");
    }
  };

  render() {
    //const { cpf } = this.state
    const { cep } = this.state
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
              name='cpf'
              maxLength='14'
              type="text"
              placeholder="CPF"
              //value={cpf}
              //onChange={this.handleChange}
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
              maxLength="9"
              value={cep}
              onChange={this.handleChange}
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