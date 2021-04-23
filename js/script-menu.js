let hide_menu = true
function show_menu() {
    const menu = document.querySelector('.menu')
    const header = menu.parentElement
    const btn_menu = document.querySelector('.btn-menu')
    if(hide_menu) {
        menu.style.display = 'block'
        header.style.height = '100vh'
        btn_menu.style.backgroundImage = 'url(./images/icons/close-icon.svg)'
        hide_menu = false
    }
    else {
        menu.style.display = 'none'
        header.style.height = '8rem'
        btn_menu.style.backgroundImage = 'url(./images/icons/menu-icon.svg)'
        hide_menu = true
    }
}