import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom';

//?Importando el dispath y el selector
import { useDispatch, useSelector } from 'react-redux'
import { editarProductoAction } from '../actions/productoAction';


const EditarProducto = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    //? Nuevo state de producto
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    })

    const productoEditar = useSelector(state => state.productos.productoEditar);

    useEffect(() => {
        guardarProducto(productoEditar)
    }, [productoEditar])

    //?Leer los datos del formulario
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, precio } = producto;




    const submitEditarProducto = (e) => {
        e.preventDefault();

        dispatch(editarProductoAction(producto));

        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weigth-bold">
                            Editar Producto
                        </h2>
                        <form onSubmit={submitEditarProducto}>
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button
                                className="btn btn-primary font-weigth-bold text-uppercase d-block w-100 ">
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
