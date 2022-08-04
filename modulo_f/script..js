    function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = 'agora são ${hora} horas.'
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'fotomanhã.png'
    } else if (hora >= 12 && hora <18) {
        // Boa tarde!
        img.src = 'fotoTarde.png'
    } else {
        // Boa Noite!
        img.src = 'fotoNoite.png'
    }
}