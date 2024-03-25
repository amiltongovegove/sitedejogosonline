//Menu Responsivo
let a = window.document.getElementsByClassName('itens')[0]
function menu() {
    if (a.style.display == 'block') {
        a.style.display = 'none'
    } else { 
       a.style.display = 'block'
    } 
}
function move() {
    if (a.style.display == 'none') {
        a.style.display = 'flex'
    }
}
