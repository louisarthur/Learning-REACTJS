import React, { Component } from 'react';
// vimos a criação de um component através de função, agora iremos através de classe, criar
//um novo component, futuramente usaremos por função

// iremos guarda estados dentro do componente, toda uma vez que uma váriavel do componente precisar ser manipulada
//chamamos a variável de estado,
//primeiro vamos estudar componentização por classe, pois era antigamente usádo
class TechList extends Component {
  //obrigatório o método render
  state = {
    techs: ['React', 'Node', 'React-Native', 'Redux', 'Total-React']
  };
  //o estado do componente obrigatóriamente tem que ter esse nome state.
  //para funcionar o state supracitado, preciso instalar o plugin do babel
  //yarn add @babel/plugin-proposal-class-properties -D
  //utilizei uma tag fragment <> </>  para importar as coisas desse retorno
  //diretamente para a div APP, caso contrário, teria que ser criado uma nova div,
  // para conseguir retornar mais de uma tag html, separada.
  render() {
    return (
      <>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input type="text" />
      </>
    );
  }
}
export default TechList;
