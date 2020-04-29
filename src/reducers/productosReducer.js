import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCAR_PRODUCTOS,
    DERCARGA_PRODUCTOS_EXITO,
    DERCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from "../types";


//? Cada reducer tiene su propio estadio
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoELiminar: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case COMENZAR_DESCAR_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }

        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }

        case DERCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DERCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoELiminar: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            console.log('id de producto eliminar ',state.productoEliminar);
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== 
                state.productoEliminar),
                productoEliminar: null
            }

        default:
            return state;

    }
};