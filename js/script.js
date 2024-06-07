// Declaração de variáveis
const allQuestion = document.querySelector("#questions") // trocar o texto da pergunta
const answersBox = document.querySelector("#answers-box") // colocar as alternativas
const quizzContainer = document.querySelector("#quizz-container")
const scoreContainer = document.querySelector("#score-container")
const letters = ["a", "b", "c", "d"]

let points = 0
let actualQuestion = 0

// Perguntas
const questions = [
    {
      "question": "PHP foi desenvolvido para qual fim?",
      "answers": [
        {
          "answer": "back-end",
          "correct": true
        },
        {
          "answer": "front-end",
          "correct": false
        },
        {
          "answer": "Sistema operacional",
          "correct": false
        },
        {
          "answer": "Banco de dados",
          "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
      ]
    },
]

// Substituição do layout pela primeira questão
function init() {
    // criar a primeira pergunta
    createQuestion(0)
}

// Cria uma pergunta
function createQuestion(i) {    
    // Limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll("button") //a, b, c, d
    
    oldButtons.forEach(function(btn) {
        btn.remove() // limpa as alternativas da pergunta
    })

    // Alterar o texto da pergunta (textContent)
    const questionText = allQuestion.querySelector("#question-text")
    const questionNumber = allQuestion.querySelector("#question-number")

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1

    // Insere as alternativas
    questions[i].answers.forEach(function(answer, i) {
        // Cria o template do botão do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true)
        const letterBtn = answerTemplate.querySelector(".btn-letter")
        const answerText = answerTemplate.querySelector(".question-answer")

        letterBtn.textContent = letters[i]
        answerText.textContent = answer['answer']

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        // remover hide e template class
        answerTemplate.classList.remove("hide")
        answerTemplate.classList.remove("answer-template")

        // inserir as alternativas na tela
        answersBox.appendChild(answerTemplate)

        // inserir evento de click no botão
        answerTemplate.addEventListener("click", function() {
            console.log(this)
        })
    })

    // Incrementa o número da questão
    actualQuestion++
}

// Inicialização
init()