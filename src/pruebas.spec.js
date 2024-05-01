import {obtenerPuntajePorCantidadPruebas, obtenerPuntajePorCantidadLineas} from "./totalizador.js";


describe("Totalizador", () => {
    it("Si el numero de pruebas por commit es menor o igual a 1 entonces el puntaje es de 100 puntos ejemplo: obtenerPuntajePorCommit(1) => 100", () => {
        expect(obtenerPuntajePorCantidadPruebas(1)).toEqual(100);
    });
    it("Si el numero de pruebas por commit es mayor a 2 entonces el puntaje es de 0 puntos ejemplo: obtenerPuntajePorCommit(2) => 0", () => {
        expect(obtenerPuntajePorCantidadPruebas(2)).toEqual(0);
    });
    it("Si el numero de lineas por commit es menor o igual a 20 entonces el puntaje es de 100 puntos ejemplo: obtenerPuntajePorLineas(15) => 100", () => {
        expect(obtenerPuntajePorCantidadLineas(15)).toEqual(100);
    });
});