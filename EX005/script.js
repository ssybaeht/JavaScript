let tnum = document.querySelector('input#tnum')
let num = Number(tnum.value)
let tab = document.getElementById('lista')
let valores = []

function adicionar(){

    if (isNumber(num) && !inLista(num, valores)){
        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado!`
        tab.appendChild(item)


    } else{
        window.alert('[ERRO] Numero invalido ou ja adicionado na lista.' )

    }
}



function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function isNumber(n){
    if(Number(n)>= 1 && Number(n)<= 100){
        return true
    } else{
        return false
    }
}