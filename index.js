function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=6 && hora < 12){
        msg.innerHTML += ' Bom dia!'
        img.src = 'manhã.png'
        document.body.style.background ="#e4d4d5"
    }else if (hora >= 12 && hora < 18){
        msg.innerHTML += ' Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = "#beb951"
    } else {
        msg.innerHTML += ' Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = "#58498c"
    }
}