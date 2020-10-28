import React from 'react';
import PropTypes from 'prop-types';

// Importamos nuestro componente Filter
import FilterContainer from '../containers/FilterContainer';
// Importamos la clase css
import '../../../styles/Filter.css';

const FilterOptions = () => {
    return (
        <div className='filtros'>
            <FilterContainer filter='SHOW_ALL'>
                {/* CHILDREN QUE SE PASA A FILTER */}
                {/* Los que pinta realmente es un <Filter /> */}
                {/* Al cuál le pasa un children que es el texto que hay entre las etiquetas */}
                ALL 
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                {/* CHILDREN QUE SE PASA A FILTER */}
                ACTIVE 
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                {/* CHILDREN QUE SE PASA A FILTER */}
                COMPLETED
            </FilterContainer>
        </div>
    );
};


export default FilterOptions;
