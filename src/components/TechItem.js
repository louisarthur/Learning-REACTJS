import React from 'react';
import PropTypes from 'prop-types';
//tech e ondelete são propriedades enviadas da classe principal, que possui as funções e os estados
// os métodos não podem estar aqui, pois eles modificam os estados.
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      {/* quando se renderiza a tela, o handledelete já iria deletar todos os elementos,
      para ele não fazer isso, colocaremos uma pré-function para ele executar somente, quando
      o botão for acionado. */}
      {/* ok, essa parte me bugou um pouco, mas tenho que entender como ao pressionar o button,
      o react reconheceu o tipo da tecnologia. */}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

//o default props é necessário para quando não se é fornecido o parametro tech, utilizarmos
TechItem.defaultProps = {
  tech: 'Oculto'
};
// restringindo que não seja recebido coisas difente.
//conceito de proptypes.
TechItem.protoTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
