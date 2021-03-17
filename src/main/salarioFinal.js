module.exports = (cargo, salario) => {
    switch (true) {
        case cargo === "DESENVOLVEDOR":
            if (salario >= 3000.00)
                return salario * 0.8
            return salario * 0.9
        case cargo === "DBA":
            if (salario >= 2000.00)
                return salario * 0.75
            return salario * 0.85
        case cargo === "TESTADOR":
            if (salario >= 2000.00)
                return salario * 0.75
            return salario * 0.85
        case cargo === "GERENTE":
            if (salario >= 5000.00)
                return salario * 0.7
            return salario * 0.8
        default:
            return "Cargo não existe!"
    }
}