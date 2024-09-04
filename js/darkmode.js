document.addEventListener('DOMContentLoaded', () => {

let darkmode = document.getElementById('darkmode')
let body = document.querySelector('body')

darkmode.addEventListener('click', ()=>{
        darkmode.classList.toggle('dark')
        body.classList.toggle('dark')
})
})