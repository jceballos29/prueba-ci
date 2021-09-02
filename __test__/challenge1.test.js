import {suma} from '../index.js'

test("Debería regresar 8 al pasar como argumento 6 y 2", () => {
    let a = 6;
    let b = 2;

    let result = suma(a,b);

    expect(result).toBe(8);
})