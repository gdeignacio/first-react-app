import React from 'react';

export default function LogoutButton(props) {
    return(
        <button className="btn btn-primary" onClick={props.pulsar}>
        Cerrar sesión
        </button>
    );
}