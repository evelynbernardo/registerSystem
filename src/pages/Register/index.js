import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import api from "../../services/api";
import { Form, Container } from "./styles";
import { cpfMask, cepMask } from './mask'
import axios from 'axios'
import {MainHeader} from '../../Components/header/header'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: "",
      cpf: "",
      email: "",
      cep:"",
      logradouro:"",
      numero:"",
      bairro:"",
      localidade:"",
    }
  }
  
  verificaCEP = async (cep) => {
    return await fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(cepResult => {
        return cepResult
    })
    .catch(error => {
        return alert("CEP Inválido");
    })
  }

  handleChange = async (field) => {
    const { name, value } = field
    this.setState({[name]: value})
    if(name === 'cep' && value.length === 8){
        const cepObject = await this.verificaCEP(value)
        if(cepObject.erro){
            return alert("CEP Inválido");
        }
        const {cep, logradouro, bairro, localidade, uf} = cepObject
        this.setState({ cep, logradouro, bairro, localidade, uf})
    }
}

handleBlur = async value => {
  if (value.length === 8){
      this.setState({loading:true})
      const cepObject = await this.verificaCEP(value)
      if(cepObject.erro){
          return alert("CEP Inválido");
      }
      const {cep, logradouro, bairro, localidade, uf} = cepObject
      this.setState({ cep, logradouro, bairro, localidade, uf})
  }
}

  handleSignUp = async e => {
    e.preventDefault();    
    const { nome, cpf, email, cep, logradouro, numero, bairro, localidade} = this.state;
    if (!nome || !cpf || !email || !cep || !logradouro || !numero || !bairro || !localidade) {
      alert("Preencha todos os dados para se cadastrar" );
    } else {
      try {
        await axios.post(`http://localhost:5000/usuarios`, this.state);
        //this.props.history.push("/");
        //console.log(response)
        alert("Registrado");
      } catch (err) {
        console.log(err);
        alert("Ocorreu um erro ao registrar sua conta. T.T" );
      }      
    }
  };

  render() { 
    const { nome, cpf, email, cep, logradouro, numero, bairro, localidade } = this.state

    return (
      <Container>
        <MainHeader />
        <Form onSubmit={this.handleSignUp}>          
          {this.state.error && <p>{this.state.error}</p>}
          <div className="field">
            <input
              name='nome'
              type="text"
              placeholder="Nome"
              onChange={e => this.handleChange(e.target)}
            />
          </div>
          
          <div className="field">
            <input
              name='cpf'
              maxLength='14'
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={e => this.setState({ cpf: cpfMask(e.target.value)})}
            />
          </div>
          
          <div className="field">
            <input
              type="email"
              placeholder="Endereço de e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          
          <div className="field">
            <input name="cep" placeholder="CEP" value={cep} onChange={e => this.handleChange(e.target)} onBlur={e => this.handleBlur(e.target.value)} maxLength={9}/>
          </div>
          
          <div className="field-group">
            <div className="field">
              <input name="logradouro" placeholder="Rua" value={logradouro} onChange={e => this.handleChange(e.target)}/>
            </div>
            <div className="field">
              <input name="numero" placeholder="N" value={numero} onChange={e => this.setState({ numero: e.target.value })}
              />
            </div>
          </div>
          
          <div className="field">
            <input name="bairro" placeholder="Bairro" value={bairro} onChange={e => this.handleChange(e.target)}/>
          </div>

          <div className="field">
            <input name="localidade" placeholder="Cidade" value={localidade} onChange={e => this.handleChange(e.target)}/>
          </div>
          
          <button type="submit">Registrar</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Register);