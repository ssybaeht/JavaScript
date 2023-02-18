function tabuada(){
    let tnum = document.querySelector('input#tnum')
    let num = Number(tnum.value)
    let tab = document.getElementById('tabuada')

    if (tnum.value.length == 0){
        window.alert('[ERRO] Por favor, preencha os campos em branco!')
        tab.innerHTML = ''
    } else{
        tab.innerHTML = ''
        for (let i = 1; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}` 
            tab.appendChild(item)
        }
    }
}