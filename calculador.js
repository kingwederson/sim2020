var candidatos = 33
function ajustador(){
    var numcad = 9
    var pacotes = []
    for(var i = 0; i<candidatos;i++){
        pacotes.push(window.document.getElementsByClassName('votador')[i].value)
    }
    var somapac = Number(0)
    for(var i = 0; i<candidatos;i++){
        somapac = Number(Number(somapac)+Number(pacotes[i]))
    }
    var votos = []
    for(var i = 0; i<candidatos;i++){
        votos.push(parseInt(4290*(Number(pacotes[i])/Number(somapac))))
        window.document.getElementsByClassName('mostrador')[i].innerText = votos[i]
    }
    var votosDEM = 0
    var votosMDB = 0
    var votosPSD = 0
    for(var i = 1; i<14;i++){
        votosDEM = votosDEM + votos[i]
    }
    for(var i = 14; i<28;i++){
        votosMDB = votosMDB + votos[i]
    }
    for(var i = 28; i<candidatos;i++){
        votosPSD = votosPSD + votos[i]
    }
    window.document.getElementById('somadoDEM').innerText = votosDEM
    window.document.getElementById('somadoMDB').innerText = votosMDB
    window.document.getElementById('somadoPSD').innerText = votosPSD
    var votosGERAL = votosDEM + votosMDB + votosPSD
    var QE = parseInt(votosGERAL/9)
    var cadDEM = parseInt(votosDEM/QE)
    var cadMDB = parseInt(votosMDB/QE)
    var cadPSD = parseInt(votosPSD/QE)
    window.document.getElementById('cadDEM').innerText = cadDEM
    window.document.getElementById('cadMDB').innerText = cadMDB
    window.document.getElementById('cadPSD').innerText = cadPSD
    var mediaDEM = votosDEM/(cadDEM+1)
    var mediaMDB = votosMDB/(cadMDB+1)
    var mediaPSD = votosPSD/(cadPSD+1)
    while((cadDEM+cadMDB+cadPSD)<numcad){
        if((mediaDEM > mediaMDB) && (mediaDEM > mediaPSD)){
            cadDEM = cadDEM+1
            mediaDEM = votosDEM/(cadDEM+1)
            window.document.getElementById('cadDEM').innerText = cadDEM
        }else if((mediaMDB > mediaDEM) && (mediaMDB > mediaPSD)){
            cadMDB = cadMDB + 1
            mediaMDB = votosMDB/(cadMDB+1)
            window.document.getElementById('cadMDB').innerText = cadMDB
        }else if((mediaPSD > mediaDEM) && (mediaPSD > mediaMDB)){
            cadPSD = cadPSD + 1
            mediaPSD = votosPSD/(cadPSD+1)
            window.document.getElementById('cadPSD').innerText = cadPSD
        }else{
            cadDEM = cadDEM+1
            mediaDEM = votosDEM/(cadDEM+1)
            window.document.getElementById('cadDEM').innerText = cadDEM
        }
    }
}