import Persona from './Persona';

class Joven extends Persona {
  constructor(nombre, apellidos, edad, colegio, numJuguetes) {
    super(nombre, apellidos, edad);
    this.colegio = colegio;
    this.numJuguetes = numJuguetes;
  }

  mostrar = () => {
    return "La Persona " + this.nombreCompleto() + " es un joven y estudia en '" + 
      this.colegio + "' y tiene " + this.numJuguetes + " juguetes.";
  }
}

export default Joven;