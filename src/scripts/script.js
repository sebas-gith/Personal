const menu_btn = document.getElementById('hamburguer')
const mobile_menu = document.getElementById('mobile-nav')

mobile_menu.childNodes.forEach(a => {
    a.addEventListener('click', function () {
        mobile_menu.classList.toggle('is-active')
        menu_btn.classList.toggle('is-active')
    })
})

menu_btn.addEventListener('click', function () {
    mobile_menu.classList.toggle('is-active')
    menu_btn.classList.toggle('is-active')
})