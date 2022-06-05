var sailor1 = 0
var sailor2 = 0
var sailor3 = 0
var sailor4 = 0
var sailor5 = 0
var contador = 1

function startQuiz() {
    var initQuiz = document.getElementById("initQuiz")    
    var pergunta1 = document.getElementById("pergunta1")
    
    pergunta1.classList.add("active")    
    initQuiz.remove()
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
            <div class="quizResult">
                <h2>Teste finalizado</h2>
                <p>Clique no botão abaixo para exibir os resultados</p>
                <button class="finalizar" onclick="results()">Mostrar resultados</button>
            </div>
        `
    }




}

function results() {
    quiz.innerHTML = 
        `
            <div class="resultsBox">
                <h2>Resultado</h2>
                <div class="metricasBox">
                    <p class="metricas moon">Sailor Moon: <br> ${sailor1} </p>
                    <p class="metricas mercury">Sailor Mercury: <br>${sailor2} </p>
                    <p class="metricas marte">Sailor Marte: <br>${sailor3} </p>
                    <p class="metricas jupiter">Sailor Júpiter: <br>${sailor4} </p>
                    <p class="metricas venus">Sailor Vênus: <br>${sailor5} </p>
                </div>
            </div>
        
        
        `
        var grafico = document.getElementById("grafico")

        grafico.classList.remove("inactive")



        const labels = [
            'Sailor Moon',
            'Sailor Mercury',
            'Sailor Mars',
            'Sailor Jupiter',
            'Sailor Venus',
    
        ];
    
        const data = {
            labels: labels,
            datasets: [{
                label: 'Pontos',
                backgroundColor: [
                'rgb(255, 74, 158)',
                'rgb(85, 85, 255)',
                'rgb(199, 0, 0)',
                'rgb(5, 194, 5)',
                'rgb(255, 117, 37)',
            ],
                borderColor: 'rgb(255, 99, 132)',
                data: [sailor1, sailor2, sailor3, sailor4, sailor5],
            },
        ]
        };
    
        const config = {
            type: 'bar',
            data: data,
            options: {}
        };
    
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
        


}

