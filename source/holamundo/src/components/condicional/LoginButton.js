import React from 'react';

export function LoginButton(props) {
    return(
        <button className="btn btn-primary" onClick={props.pulsar}>
            Iniciar sesión
        </button>
    );
}