import { connect } from 'react-redux'
import { login } from '../../../store/actions/asyncActions'
import FormLoginReduxSaga from '../../formularios/FormLoginReduxSaga'

const mapStateToProps = (state) => {
    return {
        loged: state.userState.loged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            dispatch(login(email, password));
        }
    }
}

const FormLoginReduxSagaContainer = 
    connect(mapStateToProps, mapDispatchToProps)(FormLoginReduxSaga)

export default FormLoginReduxSagaContainer;
