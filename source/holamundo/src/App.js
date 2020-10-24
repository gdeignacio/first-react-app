import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Contador from './components/Contador';
import Bienvenida from './components/Bienvenida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
          { /*<Saludo nombre='Martín' apellido='San José de Vicente' /> */ }
          {/*<Contador /> */}
          <Bienvenida nombreUsuario='ADMIN' />
        
        
      </header>
    </div>
  );
}

export default App;
