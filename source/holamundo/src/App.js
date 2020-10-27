import logo from './logo.svg';
import './App.css';
//import Saludo from './components/Saludo';
//import Contador from './components/Contador';
//import Bienvenida from './components/Bienvenida';
import MisChildren from './components/MisChildren';
import EjemploUseState from './components/hooks/Ejemplo1';
import EjemploOtrosHooks from './components/hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          { /*<Saludo nombre='Martín' apellido='San José de Vicente' /> */ }
          {/*<Contador /> */}
          {/*<Bienvenida nombreUsuario='ADMIN' />*/}
          {/*<MisChildren nombre='Martín'>
            <h2>
                Apellidos: San José de Vicente
            </h2>
          </MisChildren>*/}
          {/* ********HOOKS******** */}
          {/*<EjemploUseState/>*/}
          <EjemploOtrosHooks/>
      </header>
    </div>
  );
}

export default App;
