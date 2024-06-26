import {obtenerPuntajePorCantidadPruebas, obtenerPuntajePorCantidadLineas, obtenerPuntajePorCobertura, obtenerPuntajeTotalPorCommit, obtenerRetroalimentacionPorPuntajePruebas, obtenerRetroalimentacionPorPuntajeLineas, obtenerRetroalimentacionPorCobertura} from "./totalizador.js";


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
    it("Si el numero de lineas por commit es mayor a 20 entonces y menor a 35 el puntaje es de 50 puntos ejemplo: obtenerPuntajePorLineas(15) => 50", () => {
        expect(obtenerPuntajePorCantidadLineas(30)).toEqual(50);
    });
    it("Si el numero de lineas por commit es mayor a 35 el puntaje es de 0 puntos ejemplo: obtenerPuntajePorLineas(15) => 0", () => {
        expect(obtenerPuntajePorCantidadLineas(40)).toEqual(0);
    });
    it("Retornamos la cantidad de cobertura que obtuvo el proyecto ejemplo: obtenerPuntajePorCobertura(100) => 100", () => {
        expect(obtenerPuntajePorCobertura(100)).toEqual(100);
    });
    it("Retornamos el puntaje total por commit", () => {
        expect(obtenerPuntajeTotalPorCommit(obtenerPuntajePorCantidadLineas(30),obtenerPuntajePorCantidadPruebas(1),obtenerPuntajePorCobertura(90))).toEqual(80);
    });
    it("Retornamos la retroalimentacion correspondiente al puntaje de 100 de cantidad de pruebas por commit", () => {
        expect(obtenerRetroalimentacionPorPuntajePruebas(obtenerPuntajePorCantidadPruebas(1))).toEqual("Cantidad de pruebas correctas");
    });
    it("Retornamos la retroalimentacion correspondiente al puntaje de 0 de cantidad de pruebas por commit", () => {
        expect(obtenerRetroalimentacionPorPuntajePruebas(obtenerPuntajePorCantidadPruebas(3))).toEqual("Tienes mas de una prueba en este commit, recuerda que tienes que tener maximo 1 prueba por commit.");
    });
    it("Retornamos la retroalimentacion correspondiente al puntaje de 100 de cantidad de lineas por commit", () => {
        expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(15))).toEqual("Cantidad de lineas correctas");
    });
    it("Retornamos la retroalimentacion correspondiente al puntaje de 50 de cantidad de lineas por commit", () => {
        expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(30))).toEqual("Tienes una cantidad de lineas superior a lo recomendado, recuerda que maximo tienes que tener 20 lineas por commit");
    });
    it("Retornamos la retroalimentacion correspondiente al puntaje de 50 de cantidad de lineas por commit", () => {
        expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(40))).toEqual("Tienes una cantidad de lineas excesivamente superior a lo recomendado, recuerda que maximo tienes que tener 20 lineas por commit");
    });
    it("Retornamos la retroalimentacion correspondiente a la cobertura del commit para el puntaje menor 100", () => {
        expect(obtenerRetroalimentacionPorCobertura(obtenerPuntajePorCobertura(90))).toEqual("Tienes lineas de codigo que pueden mejorarse en el commit");
    });
    it("Retornamos la retroalimentacion correspondiente a la cobertura del commit para el puntaje igual a 100", () => {
        expect(obtenerRetroalimentacionPorCobertura(obtenerPuntajePorCobertura(100))).toEqual("Cobertura del commit correcta");
    });


});