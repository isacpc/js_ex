let armvar = []                                                         // Array que vai conter os valores, tem que ficar fora da função, pois se ficar dentro, vai resetar valor toda vez que a function for executada
let textoarea = document.getElementById('visualent')                    // pega select
let res = document.getElementById('res')                                // pega div2

function add() {
    let nument = document.getElementById('nument')                       // pega input (elemento não pode ficar de fora, pois seu valor será sempre nulo)
    let valor = Number(nument.value)                                     // pega valor numérico do input
                
    res.innerHTML = ''                                                   // toda vez essa função rodar a div2 apaga

    if (nument.value.length == 0 || valor < 1 || valor > 100) {          //AUTENTICAÇÃO se não houver nada no input OU valor < 1 OU valor > 100
        if (nument.value.length == 0) {                                  //AUTENTICAÇÃO   
            alert('Não há nada a ser adicionado!')                       //AUTENTICAÇÃO
        } else if (valor < 1 || valor > 100) {                           //AUTENTICAÇÃO
            alert('Apenas valores entre 0 e 100 por favor!')             //AUTENTICAÇÃO
        }  
    } else {
        if (armvar.indexOf(valor) == -1) {                               //AUTENTICAÇÃO Só vai armazenar valor no array e mostrar mensagem de adicionado, se o valor não for existente na array
            armvar.push(valor)                                           // Adiciona esse valor à última posição
            let opcao = document.createElement('option')                 // Criar tag option que vai dentro do select, armazenada na let opcao
            opcao.text = `Valor ${valor} adicionado`                     // Cria o texto do option
            textoarea.appendChild(opcao)                                 // Adiciona o option como filho do select
        } else {
            alert('Valor já adicionado')                                 //AUTENTICAÇÃO se já encontrado o valor
        }
    }
}

 

function final() {
if (textoarea.length == 0) {
    alert('Adicione pelo menos 1 elemento')
} else {

    if (nument.value == '') {
        add()
    } else {

    armvar.sort(compara)
    res.innerHTML = `<p>Ao todo temos ${armvar.length} número(s) cadastrados</p>`
    res.innerHTML += `<p>O maior valor é ${armvar[armvar.length - 1]}</p>`
    res.innerHTML += `<p>O menor valor é ${armvar[0]}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma()}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma()/armvar.length}</p>`      
    }
}
}



function compara(a, b) {
    if (a == b) {
        return 0
    }
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }        
}

function soma() {
    let c = 0
    let x = 0
        while (c <= armvar.length - 1) {
            x = x + armvar[c]
            c++
        } 
        return x
    }

function zera() {
    
    let nument = document.getElementById('nument') 
    res.innerHTML = ''
    textoarea.innerText = ''
    armvar = [] 
    nument.value = ''
    
}

