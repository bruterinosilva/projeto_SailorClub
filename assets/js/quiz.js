var sailor1 = 0
var sailor2 = 0
var sailor3 = 0
var sailor4 = 0
var sailor5 = 0
var contador = 1

function startQuiz() {
    var botaoIniciar = document.getElementById("startQuiz")    
    var pergunta1 = document.getElementById("pergunta1")
    
    pergunta1.classList.add("active")    
    botaoIniciar.remove()
}


function addSailor1() {
    sailor1++
    responder()
}
function addSailor2() {
    sailor2++
    responder()
}
function addSailor3() {
    sailor3++
    responder()
}
function addSailor4() {
    sailor4++
    responder()
}
function addSailor5() {
    sailor5++
    responder()
}


function responder() {
    var quiz = document.getElementById("quiz")
    var perguntas = document.querySelectorAll(".pergunta")
    var qtdPerguntas = quiz.children.length
    var n = 0

    if (contador < qtdPerguntas) {

        
        while (n < perguntas.length) {
            perguntas[n].classList.remove("active")
            n++
        }
        
        quiz.children[contador].classList.add("active")
        contador++
    }else{
        quiz.innerHTML = 
        `
        <h2>Teste finalizado</h2>
                <p>Clique no botão abaixo para exibir os resultados</p>
                <button onclick="results()">Mostrar resultados</button>
        `
    }




}

function results() {
    quiz.innerHTML = 
        `
            <div class="resultsBox">
                <h2>Resultado</h2>
                <p>Sailor Moon: ${sailor1} </p>
                <p>Sailor Vênus: ${sailor2} </p>
                <p>Sailor Netuno: ${sailor3} </p>
                <p>Sailor Call: ${sailor4} </p>
                <p>Sailor Mall: ${sailor5} </p>
            </div>
        
        
        `
}

