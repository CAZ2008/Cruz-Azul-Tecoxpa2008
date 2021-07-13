const CAZ = document.querySelector('.CAZ');
const menu = document.querySelector('.menu-navegacion');




CAZ.addEventListener('click', ()=>{
    menu.classList.toggle("spread")

})
window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != CAZ){
        console.log('cerrar')
        menu.classList.toggle("spread")
        }
    })

  