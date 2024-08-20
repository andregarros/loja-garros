let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrindo-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrindo-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrindo-menu')
})


var barra = document.getElementById('barra')
var lupa = document.getElementById('lupa')
barra.style.display = "none"
lupa.addEventListener("click", clicar)

function clicar(){
    if(barra.style.display === 'none'){
        barra.style.display = 'block'
        barra.style.display = 'flex'
        barra.style.justifyContent = 'center'
    }else{
        barra.style.display = 'none'
    }
    
}


