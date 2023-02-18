var agora = new Date()
var hr = agora.getHours()
var min = agora.getMinutes()
console.log(`Sao exatamente ${hr}:${min}`)
if (hr<12){
    console.log(`Bom dia!`)
}else if (hr < 19){
    console.log(`Boa tarde!`)
}else{
    console.log(`Boa noite!`)
}