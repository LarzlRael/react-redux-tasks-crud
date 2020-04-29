import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

//?Muesttra la alerta

export function mostrarAlerta(alerta) {
    return (distpach) => {
        distpach(crearAlerta(alerta))
    }
}

const crearAlerta = (alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

//?Ocultar alerta

export function ocultarAlertaAction() {
    return (distpach) => {
        distpach(ocultarAlerta())
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})