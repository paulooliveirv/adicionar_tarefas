setInterval(()=>{
    let novaHora =  new Date();
    let ano = novaHora.getFullYear();
    let mes = novaHora.getMonth()+1;
    let dia = novaHora.getDate();
    let hora =novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo =novaHora.getSeconds();

    minuto = zero(minuto);
    segundo = zero(segundo);
    document.getElementById("dataCompleta").textContent = dia + "/" + mes + "/" +ano;
    document.getElementById("hora").textContent = hora + ":" + minuto + ":" +segundo;
}, 1000);

function zero(x){
    if (x < 10){
        x = '0'+x;
    }
    return x;
}
