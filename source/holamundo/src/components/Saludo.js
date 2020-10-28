import React, { Component } from 'react'

export default class Saludo extends Component {

    nombre = 'Martín';

    render() {
        return (
            <div>
                Hola, {this.props.nombre} {this.props.apellido}
            </div>
        )
    }
}