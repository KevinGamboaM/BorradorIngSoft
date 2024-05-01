import obtenerPuntajePorCommit from "./totalizador.js";
describe("Totalizador", () =>{
    it("Si el numero de pruebas por commit es menor o igual a 1 entonces el puntaje es de 100 puntos ejemplo: generar(1) => 1", () => {
      expect(obtenerPuntajePorCommit(1)).toEqual(100);
    });
  });