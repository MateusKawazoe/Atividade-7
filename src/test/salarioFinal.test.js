const { toBeDeepCloseTo } = require('jest-matcher-deep-close-to')
const validate = require('../validate/funcionario')
const Funcionario = require('../model/funcionario')
const salarioFinal = require('../main/salarioFinal')

describe('Salario Final', () => {
    expect.extend({ toBeDeepCloseTo })
    let funcionario, errors

    test('Testando um funcionário válido', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 3000.00, 'DESENVOLVEDOR')

        errors = validate.validate(funcionario)
        expect(errors[0]).toBe(undefined)
        expect(errors[1]).toBe(undefined)
        expect(errors[2]).toBe(undefined)
        expect(errors[3]).toBe(undefined)
    })

    test('Testando um funcionário inválido', () => {
        funcionario = new Funcionario('Lu', 'leaozinho_leao', '3000.00')

        errors = validate.validate(funcionario)
        expect(errors[0].message).toBe('Nome é obrigatório e deve ter no mínimo 3 letras e no máximo 45!')
        expect(errors[1].message).toBe('E-mail inválido ou em branco!')
        expect(errors[2].message).toBe('Salário base é obrigatório e só aceita números!')
        expect(errors[3].message).toBe('Cargo é obrigatório!')
    })

    it('Testando salário de desenvolvedor acima ou igual a 3000.00', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 3000.00, 'DESENVOLVEDOR')
        expect([2400.00]).toBeDeepCloseTo([salarioFinal(funcionario.cargo, funcionario.salarioBase)], 2)
    })
})