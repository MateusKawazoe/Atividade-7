module.exports = class Funcionario{
    constructor(nome, email, salarioBase, cargo) {
        this.setNome(nome)
        this.setEmail(email)
        this.setSalarioBase(salarioBase)
        this.setCargo(cargo)
    }

    setNome(nome) {
        this.nome = nome
    }

    setEmail(email) {
        this.email = email
    }

    setSalarioBase(salarioBase) {
        this.salarioBase = salarioBase
    }

    setCargo(cargo) {
        this.cargo = cargo
    }
}