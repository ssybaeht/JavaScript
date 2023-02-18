function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imge')
    var data = new Date
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora sao ${hora}:${min}`

    if (hora>=0 && hora<12)
    {
        img.src = 'assets/manha.png'
        document.body.style.background = '#dcba9e'
    } else if (hora >=12 && hora <18){
        document.body.style.background = '#fac35c'
        img.src = 'assets/tarde.png'
    } else{
        document.body.style.background = '#12273a'
        img.src = 'assets/noite.png'
    }
}