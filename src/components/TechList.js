import React, { Component } from 'react';
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
    techs: ['React', 'Node', 'React-Native', 'Redux', 'Total-React']
  };
  //o estado do componente obrigatóriamente tem que ter esse nome state.
  //para funcionar o state supracitado, preciso instalar o plugin do babel
  //yarn add @babel/plugin-proposal-class-properties -D
  //utilizei uma tag fragment <> </>  para importar as coisas desse retorno
  //diretamente para a div APP, caso contrário, teria que ser criado uma nova div,=
  // para conseguir retornar mais de uma tag html, separada.
  // o react só adiciona dois ou mais elementos html utilizando um container, esse fragment é
  // um tipo de container, só que generico.

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
            {this.state.techs.map(tech => (
              <li key={tech}>
                {tech}
                {/* quando se renderiza a tela, o handledelete já iria deletar todos os elementos,
                para ele não fazer isso, colocaremos uma pré-function para ele executar somente, quando
                o botão for acionado. */}
                {/* ok, essa parte me bugou um pouco, mas tenho que entender como ao pressionar o button,
                o react reconheceu o tipo da tecnologia. */}
                <button onClick={() => this.handleDelete(tech)} type="button">
                  Remover
                </button>
              </li>
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
