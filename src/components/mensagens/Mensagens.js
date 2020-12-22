import React from 'react';
import './Mensagens.css';

export class Mensagens extends React.Component {

  state = {
    listaDeMensagens: []
  }

  onChangeNomeUsuario = (event) => {
    // console.log(event.target.value)
    this.setState({ nomeUsuario: event.target.value })
  }
  onChangeMensagem = (event) => {
    // console.log(event.target.value)
    this.setState({ mensagemUsuario: event.target.value })
  }

  limparCampos = () => {
    this.state.nomeUsuario = ""
    this.state.mensagemUsuario = ''
  }


  enviarMensagem = () => {
    const novaMensagem = { nomeUsuario: this.state.nomeUsuario, mensagemUsuario: this.state.mensagemUsuario }
    const arrayProvisorio = this.state.listaDeMensagens
    arrayProvisorio.push(novaMensagem)

    this.setState({ listaDeMensagens: arrayProvisorio })
    // console.log(this.state.listaDeMensagens.mensagemUsuario)
    this.limparCampos()
  }

  deletarMensagem = (numberKey) => {
    console.log(numberKey)
    const novaLista = this.state.listaDeMensagens
    novaLista.splice(numberKey,1)

    this.setState({listaDeMensagens: novaLista})
    console.log(novaLista)
  }

  oiMsg = () =>{console.log('oi')}

  render() {


    const mensagensEmLista = this.state.listaDeMensagens.map((msg) => {
      let numberKey = this.state.listaDeMensagens.indexOf(msg)
      return (
        
        <p onDoubleClick={() => this.deletarMensagem(numberKey)} key={numberKey} ><strong>{msg.nomeUsuario} :</strong> {msg.mensagemUsuario}</p>
          
      )

    })
    return (
      <div className="blocoMensagens">
        <div className="escreverMensagens">
          <ul>
            {mensagensEmLista}
          </ul>
        </div>
        <div className="escreverEntradas">
          <div>
            <input onChange={this.onChangeNomeUsuario} value={this.state.nomeUsuario} placeholder="Usuário" id="usuario"></input>
          </div>
          <div className="campoMensagem">
            <input onChange={this.onChangeMensagem} value={this.state.mensagemUsuario} placeholder="mensagem" id="mensagemEscrita"></input>
            <button id="enviar" onClick={this.enviarMensagem}>Enviar</button>
          </div>
        </div>
      </div>
    )
  }
}
