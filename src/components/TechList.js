import React, { Component } from 'react';
import TechItem from './TechItem';
// vimos a criação de um component através de função, agora iremos através de classe, criar
//um novo component, futuramente usaremos por função

// iremos guarda estados dentro do componente, toda uma vez que uma váriavel do componente precisar ser manipulada
//chamamos a variável de estado,
//primeiro vamos estudar componentização por classe, pois era antigamente usádo
class TechList extends Component {
  //obrigatório o método render
  state = {
    // é criado um novo estado, pois não consegue-se adicionar diretamente ao estado techs, do jeito que está.
    newTech: '',
    techs: []
  };
  //o estado do componente obrigatóriamente tem que ter esse nome state.
  //para funcionar o state supracitado, preciso instalar o plugin do babel
  //yarn add @babel/plugin-proposal-class-properties -D
  //utilizei uma tag fragment <> </>  para importar as coisas desse retorno
  //diretamente para a div APP, caso contrário, teria que ser criado uma nova div,=
  // para conseguir retornar mais de uma tag html, separada.
  // o react só adiciona dois ou mais elementos html utilizando um container, esse fragment é
  // um tipo de container, só que generico.

  //Executado assim que o componente aparece em tela.
  componentDidMount() {
    //capta todos os techs
    const techs = localStorage.getItem('techs');
    //  se for true, ele adiciona ao estado, os techs.
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  // Executado sempre que houver alterações nas props ou no estado.
  componentDidUpdate(prevProps, prevState) {
    //se o próximo estado de techs for diferente do atual, adicione
    //itens no localstorage do navegador em formado de json, pois
    // Não aceita array
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }
  // o menos utilizado, Executado quando o componente deixa de existir.
  componentWillUnmount() {}

  //não se muda o state, portanto é necessário fazer algumas estratégias, para adicionar elementos
  handleInputChange = k => {
    this.setState({ newTech: k.target.value });
  };
  // é necessário utilziar uma arrow function, pois é a unica function que tem acesso a variavél this.
  // as outras, não possuem.
  // o react possui um conceito de IMUTABILIDADE dentro do estado, as váriveis do estado são imutáveis
  // toda vez que é necessário mudar o estado, utilizamos a função SETSTATE()

  handleSubmit = j => {
    //vai prevenir o evento padrão, pois sem isso o butão vai sempre reiniciar a página, pois
    //é um button submit.
    j.preventDefault();
    // é sempre necessário pegar o array que já existe e para isso, para pegar o conteúdo
    // utilizamos o ... (spreadoperator)
    this.setState({ techs: [...this.state.techs, this.state.newTech] });
    this.state.newTech = '';
    console.log(this.state);
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };
  handleDeletePerName = name => {
    this.setState({ techs: this.state.techs.filter(t => t !== name) });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {/* outro conceito interessante é o de propriedades, para enviar uma propriedade,
            para a modulo TechItem, podemos fazer a seguinte coisa, logo após o key utilizaremos o "enviador" */}
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Envie</button>
          <button
            type="button"
            onClick={() => this.handleDeletePerName(this.state.newTech)}
          >
            Delete
          </button>
        </form>
      </>
    );
  }
}
export default TechList;
