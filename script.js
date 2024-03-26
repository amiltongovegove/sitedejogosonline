//Menu Responsivo

let a = window.document.getElementById('itens')

function menu() {
    if (a.style.display == 'block') {
        a.style.display = 'none'
    } else { 
       a.style.display = 'block'
    } 
}

function tamanho() {
    if (window.innerWidth > 768) {
        a.style.display = 'flex'
    } else {
        a.style.display = 'none'
    }
}

//-------------------------------------
