import React,{ components } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './components/saludo'
import Jelou from './components/Hola'//al tener un export por default se puede poner el nombre que se quiera, pero si no hay en Hola un export default debe ser el nombre de la funcion de manera exacta


function App() {
  return (
    <div className="App">
     {/* <Saludo></Saludo>*/}{/*Recordar que las llaves siempre significan objetos, por lo tanto es codigo js*/ }
     <Jelou name="Larry"></Jelou>
     <Jelou name="Bruce"> </Jelou>
     <Jelou name="Root"></Jelou>

    </div>
  );
}

export default App;
