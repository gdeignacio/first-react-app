import { connect } from 'react-redux';
import Filter from '../components/Filter';

import { setVisibilityFilter } from '../../../store/actions/actions';

// OwnProps son las Props que se le pasan al Container y no al componente
// con el que conecta. En este caso, se le pasa un prop llamado "filter"
const mapStateToProps = (state, ownProps) => {
    return {
        // Estará activo, si el filter de sus props
        // coincide con el filter del state
        active: ownProps.filter === state.filterState // true o false
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            console.log('FILTRO ACTIVADO', ownProps.filter);
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
}

const FilterContainer =  connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
