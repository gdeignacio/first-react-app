import React, { Component } from 'react'

class Contador extends Component {

    constructor(props){
        super(props);
        // Estado privado del componente
        this.state = {
            fecha: new Date(),
            nombre: 'Martín',
            apellido: 'San José de Vicente',
            edad: 29
        }
    }

    componentDidMount(){
        setInterval(()=> {
            this.tick(); //cada segundo ejecutamos tick para actualizar el estado del componente
        }, 1000)
    }

    componentDidUpdate(){
        console.log('CONTADOR-COMPONENTE ACTUALIZADO');
    }

    render() {
        return (
            <div>
                <h2>
                    Hora Actual:
                    { this.state.fecha.toLocaleTimeString() }
                </h2>
                <h2>Datos del Usuario</h2>
                <h3>Nombre: { this.state.nombre}  { this.state.apellido }</h3>
                <h4>EDAD: { this.state.edad }</h4>
            </div>
        )
    }

    tick(){
        this.setState((prevState) => {
            let edad  = prevState.edad +1;
            return {
                ...prevState, // nombre, apellido (para no perdelos en el nuevo estado)
                edad, // actualizo la edad con un nuevo valor
                fecha: new Date() // actualizamos con una nueva fecha
            }
        });
    }
}

export default Contador;