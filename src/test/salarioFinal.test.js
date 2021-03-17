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

    it('Testando salário de desenvolvedor maior ou igual a 3000.00', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 3000.00, 'DESENVOLVEDOR')
        expect([2400.00]).toBeDeepCloseTo([salarioFinal(funcionario.cargo, funcionario.salarioBase)], 2)
    })

    it('Testando salário de desenvolvedor menor que 3000.00', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 2000.00, 'DESENVOLVEDOR')
        expect([1800.00]).toBeDeepCloseTo([salarioFinal(funcionario.cargo, funcionario.salarioBase)], 2)
    })

    it('Testando salário de DBA maior ou igual a 2000.00', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 2521.75, 'DBA')
        expect([1891.31]).toBeDeepCloseTo([salarioFinal(funcionario.cargo, funcionario.salarioBase)], 2)
    })

    it('Testando salário de DBA menor que 2000.00', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 1533.00, 'DBA')
        expect([1303.05]).toBeDeepCloseTo([salarioFinal(funcionario.cargo, funcionario.salarioBase)], 2)
    })
    it('Testando salário de testador maior ou igual a 2000.00', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 2521.75, 'TESTADOR')
        expect([1891.31]).toBeDeepCloseTo([salarioFinal(funcionario.cargo, funcionario.salarioBase)], 2)
    })

    it('Testando salário de testador menor que 2000.00', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 1533.00, 'TESTADOR')
        expect([1303.05]).toBeDeepCloseTo([salarioFinal(funcionario.cargo, funcionario.salarioBase)], 2)
    })

    it('Testando salário de gerente maior ou igual a 5000.00', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 7581.00, 'GERENTE')
        expect([5306.7]).toBeDeepCloseTo([salarioFinal(funcionario.cargo, funcionario.salarioBase)], 2)
    })

    it('Testando salário de gerente menor que 5000.00', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 4911.00, 'GERENTE')
        expect([3928.8]).toBeDeepCloseTo([salarioFinal(funcionario.cargo, funcionario.salarioBase)], 2)
    })

    test('Testando cargo inválido', () => {
        funcionario = new Funcionario('Lucas', 'leaozinho_leao@hotmail.com', 4911.00, 'LUCAS')
        expect('Cargo não existe!').toBe(salarioFinal(funcionario.cargo, funcionario.salarioBase))
    })
})