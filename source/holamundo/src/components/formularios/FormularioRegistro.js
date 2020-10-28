import React, { Component } from 'react'

export default class FormularioRegistro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
            localidad: ''
        }
    }

    manejarCambios = (event) => {
        const nombreElemento = event.target.name; // Cogemos el elemento por su nombre
        this.setState({ [nombreElemento]: event.target.value }); // actualizamos el estado por el nombre
    }
    
    enviarRegistro = (event) =>  {
        event.preventDefault();
        console.table(this.state);
    }

    render() {
        return (
            <form onSubmit={this.enviarRegistro}>
                <div>
                    <label>Nombre: </label>
                    {/* NOMBRE */}
                    <input type="text" name="nombre" onChange={this.manejarCambios} />
                    {/* DESCRIPCIÓN */}
                    <textarea name="descripcion" onChange={this.manejarCambios} />
                    {/* LOCALIDAD */}
                    <select name="localidad" onChange={this.manejarCambios}>
                        <option value="Málaga">Málaga</option>
                        <option value="Granada">Granada</option>
                        <option value="Sevilla">Sevilla</option>
                    </select>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        )
    }
}
