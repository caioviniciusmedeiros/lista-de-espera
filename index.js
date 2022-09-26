alert("Seja bem vindo!")
let names
let list = []
let menu = prompt("Qual procedimento deseja? \n1- Adicionar paciente \n2- Consultar paciente \n3-Sair")
let pacient

do{
    switch (menu){
        case "1":
            names = prompt("Insira o nome do paciente!")
            list.push(names)
            alert("Lista de espera: " + "\n\n" + list)
            menu=prompt("Deseja fazer mais algum procedimento? \n1- Adicionar paciente \n2- Consultar paciente \n3-Sair")
            break
        case "2":
            pacient = list.shift()
            alert("O paciente " + pacient + " irá ser atendido!")
            menu=prompt("Deseja fazer mais algum procedimento? \n1- Adicionar paciente \n2- Consultar paciente \n3-Sair")
            break
        case "3":
            alert("Saindo...")
            break
        default:
            menu = ("Opção invalida, por favor escolha uma opção valida \n1- Adicionar paciente \n2- Consultar paciente \n3-Sair")
            break
        }

}while(menu !== "3")

if (names == null  || names == undefined){
    alert("A lista de espera está vazia")
}else{
    alert("Lista de espera atual: " + "\n\n" + list)
}