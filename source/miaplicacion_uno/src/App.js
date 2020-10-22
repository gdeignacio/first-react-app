import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Adulto from './models/Adulto';
import Joven from './models/Joven';


class App extends Component {

  persona = { nombre: 'Pepe', edad: 21 };

  adulto1 = new Adulto('Pepe', 'Martinez', 29, 'Desarrollador', true);
  adulto2 = new Adulto('Juan', 'Delgado', 32, 'Taxista', true);
  adulto3 = new Adulto('Vicente', 'Groselles', 27, 'Carnicero', false);
  
  joven1 = new Joven('Andres', 'Torres', 5, 'La Pureza de María', 2);
  joven2 = new Joven('Juan', 'García', 29, 'Ciudad de Bolonia', 12);
  joven3 = new Joven('Luis', 'Rubio', 29, 'San Pedro Pascual', 7);


  arrayPersonas = [this.adulto1, this.joven1, this.adulto2, this.joven2, this.adulto3, this.joven3];

  
  mostrarPersona = (persona) => {
    return `¡Hola! Soy ${persona.nombre} y tengo ${persona.edad} años`;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">¡Mi Listado de Personas!</h1>
        </header>
      <div>
      { this.arrayPersonas.map( (persona, index) => {
        return <div key={index}><h3> { persona.mostrar() }</h3></div>;
        })
      }
      </div> </div>
    );

  }

}

export default App;
