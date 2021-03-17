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

    test('Testando um funcionário inválido', () => {
        funcionario = {
            nome: "Lu",
            email: "leaozinho_leao",
            salarioBase: "3000.00"
        }

        errors = validate.validate(funcionario)
        expect(errors[0].message).toBe('Nome é obrigatório e deve ter no mínimo 3 letras e no máximo 45!')
        expect(errors[1].message).toBe('E-mail inválido ou em branco!')
        expect(errors[2].message).toBe('Salário base é obrigatório e só aceita números!')
        expect(errors[3].message).toBe('Cargo é obrigatório!')
    })
})