import React from 'react';
import FormLoginReduxSagaContainer from '../components/redux/containers/FormLoginReduxSagaContainer';

const Login = () => {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1>
                        Página del Login
                    </h1>
                    <FormLoginReduxSagaContainer />
                </header>
            </div>
        </div>
    );
}

export default Login;