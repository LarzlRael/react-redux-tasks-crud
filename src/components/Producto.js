import React from 'react'
import { useHistory } from 'react-router-dom';

//?Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoAction';
//?Librarias de tercer

import swal from 'sweetalert2';

const Producto = ({ producto }) => {

    const dispatch = useDispatch();
    const history = useHistory(); //? HABILITAR el hisory para la redireccion
    //?Confirmar si se desea eliminar
    const confirmarEliminarProducto = id => {
        //?Preguntar al usuario


        swal.fire({
            title: '¿Estas seguro de eliminar?',
            text: "un producto se va eliminar no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!!!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                //?Pasarlo al action
                dispatch(borrarProductoAction(id));

                swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    const redireccionarEdicion = (producto) => {
        dispatch(obtenerProductoEditar(producto));
        //?haciendo la redireccion de con el use history
        history.push(`/productos/editar/${producto.id}`)
    }

    const { nombre, precio, id } = producto;
    return (
        <tr>
            <td>{nombre}</td>
            <td>
                <span className="font-weigth-bold">${precio}</span>
            </td>
            <td className="acciones">
                <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={() => redireccionarEdicion(producto)} >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>

        </tr >
    )
}

export default Producto;
