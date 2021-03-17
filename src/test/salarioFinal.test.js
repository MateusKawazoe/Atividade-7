const validate = require('../model/funcionario')
const salarioFinal = require('../main/salarioFinal')

describe('Salario Final', () => {
    let funcionario, errors

    test('Testando um funcionário válido', () => {
        funcionario = {
            nome: "Lucas",
            email: "leaozinho_leao@hotmail.com",
            salarioBase: 3000.00,
            cargo: "Desenvolvedor"
        }

        errors = validate.validate(funcionario)
        expect(errors[0]).toBe(undefined)
        expect(errors[1]).toBe(undefined)
        expect(errors[2]).toBe(undefined)
        expect(errors[3]).toBe(undefined)
    })
})