function clicar(){
    let txtinicio = document.querySelector('input#txtinicio')
    let txtfim = document.querySelector('input#txtfim')
    let txtpasso = document.querySelector('input#txtpasso')
    let res = document.querySelector('div#res')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        window.alert('[ERRO] Por favor, preencha os campos em branco.')
        res.innerHTML = ''
    } else{ 
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        if (inicio < fim){
                for (let c = inicio; c<=fim; c+=passo){
            res.innerHTML += ` ${c}...`
            }
        }else{
            for (let c = inicio; c >= fim; c-=passo){
                res.innerHTML += ` ${c}`
            }
        }
        res.innerHTML += ' Fim!'

        }

    }
    
