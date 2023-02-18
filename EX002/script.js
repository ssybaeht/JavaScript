function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        if (fsex[0].checked){
            gen = 'um homem'
            if (idade>=0 && idade < 10){
                //crianca
            }else if(idade<21){
                //jovem
            }else if(idade<50){
                //adulto
            }else{
                //velho
            }
            
        }else{
            gen = 'uma mulher'
            if (idade>=0 && idade < 10){
                //crianca
            }else if(idade<21){
                //jovem
            }else if(idade<50){
                //adulto
            }else{
                //velho
            }
        }
        res.innerHTML = `Detectamos que voce eh ${gen} de ${idade} anos.`
    }
}