import React from 'react';
import PropTypes from 'prop-types';

// Componente que va a ofrecer una opción de filtro
// recibirá por props-> active, onClick, children 
// (los elementos que haya dentro de las etiquetas del componente)
const Filter = ({active, onClick, children}) => {

    // Si está activo, simplemente pone el texto
    // por defecto el activo será SHOW_ALL
    if(active){
        return <span className='active'>
                { children }
                </span>
    }
    return (
        <button 
            className='filtro'
            onClick= { (event) => {
                event.preventDefault();
                onClick(); // que viene por props desde el padre (Filter Options)
            }
        }>
            {children}
        </button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Filter;
