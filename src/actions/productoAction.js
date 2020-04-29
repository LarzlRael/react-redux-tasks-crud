import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCAR_PRODUCTOS,
    DERCARGA_PRODUCTOS_EXITO,
    DERCARGA_PRODUCTOS_ERROR,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITO,
    OBTENER_PRODUCTO_ELIMINAR
} from "../types";

import swal from 'sweetalert2';

//?Importando el cliente de axios que creamos
import clienteAxios from '../config/';

//? crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            //?Insertar en la base de datos
            await clienteAxios.post('/productos', producto);

            //? SI todo sale bien, actualiza el state
            dispatch(agregarProductoExitoso(producto))
            swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );

        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true));

            swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            });
        }
    }

}
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

//?Si el producto se guara en la base de datos 

const agregarProductoExitoso = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
//? SI hubo un error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//? funcion para obtener los productos de la base de datos

export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());
        try {
            const respuesta = await clienteAxios.get('/productos');
            console.log(respuesta);
            dispatch(descargaProductosExitosa(respuesta.data))
        } catch (error) {
            console.log(error);
            dispatch(descargaProductosError())
        }
    }
}
const descargarProductos = () => ({
    type: COMENZAR_DESCAR_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = (productos) => ({
    type: DERCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DERCARGA_PRODUCTOS_ERROR,
    payload: true
})

//? Selecciona y elimna y producto
export function borrarProductoAction(id) {
    console.log('este id es ', id);
    return async (dispach) => {
        dispach(obtenerProductoEliminar(id));
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispach(eliminarProductoExito())
            //?Si sel elimina mostrar alerta
            swal.fire(
                'Eliminado',
                'EL registro ha sido eliminado',
                'success'
            )
        } catch (error) {
            dispach(eliminarProductoError());
        }
    }
}

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})
const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})