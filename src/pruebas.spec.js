import obtenerPuntajePorCantidadPruebas from "./totalizador.js";

describe("Totalizador", () =>{
    it("Si el numero de pruebas por commit es menor o igual a 1 entonces el puntaje es de 100 puntos ejemplo: ontenerPuntajePorCommit(1) => 100", () => {
      expect(obtenerPuntajePorCantidadPruebas(1)).toEqual(100);
    });
    it("Si el numero de pruebas por commit es menor o igual a 1 entonces el puntaje es de 100 puntos ejemplo: ontenerPuntajePorCommit(1) => 100", () => {
        expect(obtenerPuntajePorCantidadPruebas(2)).toEqual(0);
      });
  });