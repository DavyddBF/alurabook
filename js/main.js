const containerTitulo = document.getElementById('container__titulo')

containerTitulo.addEventListener('click', botaoHome)
containerTitulo.addEventListener('mouseover', () => {
    containerTitulo.style.cursor = 'pointer'
})

function botaoHome() {
    window.open('index.html')
}