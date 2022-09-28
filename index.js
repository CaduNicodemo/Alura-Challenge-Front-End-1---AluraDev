const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('.editor')
const botao = document.querySelector('.botao_Highlight')
const borda = document.querySelector('.caixa_editor')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = '<code class="editor hljs ${linguagem.value}" contenteditable="true"></code>'
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener(
    'click',
    () => {
        aplicaHighlight()
    })