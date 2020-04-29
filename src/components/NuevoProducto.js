import React, { useState } from 'react'
//? importando los actions de Redux

import { crearNuevoProductoAction } from '../actions/productoAction'
import { useDispatch, useSelector } from 'react-redux'
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertasActions'


const NuevoProducto = ({ history }) => {

    //*Creando el state del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);



    //? Utilizar usa dispatch y te crea una fincion
    const dispatch = useDispatch();

    //?Acceder al state del store por medio del useSlector
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);

    const agregaProducto = (producto) => {
        //? Mandar a llamar el action de productoAction
        dispatch(crearNuevoProductoAction(producto));
    }

    //?Cuando el usuario haga submit
    const submitNuevoProducto = (e) => {
        e.preventDefault();
        //?Validar formulario
        if (nombre.trim() === '' || precio <= 0) {
            const respuesta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center p3 text-uppercase'
            }
            dispatch(mostrarAlerta(respuesta));
            return;
        }
        //?Si no hay errores
        dispatch(ocultarAlertaAction());

        //?crear el nuevo producto
        agregaProducto({
            nombre, precio
        });

        //?Redireccionar
        history.push('/');

    }


    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weigth-bold">
                            Agrear Nuevo Producto
                        </h2>
                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    name="nombre"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button
                                className="btn btn-primary font-weigth-bold text-uppercase d-block w-100 ">
                                Agregar
                            </button>
                            {cargando ? <p>Cargando ...  </p> : null}
                            {error ? <p className="alert alert-danger p2 mt-4 text-center">
                                Hubo un error
                            </p> : null}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
