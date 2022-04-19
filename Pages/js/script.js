const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let quizScore =0;


startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',()=>{
    currentQuestionIndex ++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions=questions.sort(() => Math.random -0.5);
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    quizScore=0;
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.ineerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.ass('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChils(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.conrrect;
    setStatusClass(document.body,correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button,button.dataset.correct);
    });
    if(shuffledQuestions.length > correctQuestionIndex + 1 ){
        nextButton.classList.remove("hide");
    }
    else{
        startButton.innerText = "restart";
        startButton.classList.remove("hide");

    }
    if(selectedButton.dataset = correct){
        quizScore++;
    }
    document.getElementById('right-answers').innerText=quizScore;
}


function setStatusClass(element,correct) {
    clearStatusClass(element);
    if(correct){
        element.classlist.add("correct");
    }else {
        element.classlist.add("wrong");
    }
}



function clearStatusClass(element){
    element.classlist.remove('correct');
    element.classlist.remove('wrong');
}

const questions = [
    {
        question: 'here is my first question, answer is A',
        answers:[
            { text: 'A', correct: true},
            { text: 'B', correct: false},
            { text: 'C', correct: false},
            { text: 'D', correct: false},
        ],
    },

    {
        question: 'here is my second question, answer is B',
        answers:[
            { text: 'A', correct: false},
            { text: 'B', correct: true},
            { text: 'C', correct: false},
            { text: 'D', correct: false},
        ],
    },

    {
        question: 'here is my third question, answer is C',
        answers:[
            { text: 'A', correct: false},
            { text: 'B', correct: false},
            { text: 'C', correct: true},
            { text: 'D', correct: false},
        ],
    },
]