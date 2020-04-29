import React from 'react';

//?Librerías
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* ------------------------------ */
/* Redux */
/* ------------------------------ */

import { Provider } from 'react-redux'
import store from './reducers/store';
//*Componentes
import Header from './components/Header';
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto';
import Editar from './components/EditarProducto';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>

            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={Editar} />

          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
