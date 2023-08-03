let up = document.querySelector(".volta");
let hamburguer = document.querySelector(".hamburguer").addEventListener('click', () => {
    let aparecer = document.querySelector("#slide");
    let estiloDisplay = window.getComputedStyle(aparecer).display;
    if(estiloDisplay === 'none') {
        aparecer.style.display = 'block'
    }else {
        aparecer.style.display = 'none';
    }
})

up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

function comportamentoScroll() {
    if (window.scrollY === 0) {
        document.querySelector(".volta").style.display = 'none';
    }else {
        document.querySelector(".volta").style.display = 'block';
    }
}

addEventListener('scroll', comportamentoScroll);