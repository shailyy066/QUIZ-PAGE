const quizDB = [
    {
        question: "Q1: What is the color of Apple ?",
        a: "Red/Green",
        b: "Yellow",
        c: "Magenta",
        d: "Purple",
        ans: "ans1",
    },
    {
        question: "Q2: What is the color of Banana ?",
        a: "Red/Green",
        b: "Yellow",
        c: "Magenta",
        d: "Purple",
        ans: "ans2",
    },
    {
        question: "Q3: What is the color of Strawberry ?",
        a: "Red",
        b: "Yellow",
        c: "Magenta",
        d: "Purple",
        ans: "ans1",
    },
    {
        question: "Q4: What is the color of Orange?",
        a: "Red/Green",
        b: "Orange",
        c: "Magenta",
        d: "Purple",
        ans: "ans2",
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let t = 20;
let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questions = quizDB[questionCount];
    question.innerHTML = questions.question;
    option1.innerHTML = questions.a;
    option2.innerHTML = questions.b;
    option3.innerHTML = questions.c;
    option4.innerHTML = questions.d;

}

loadQuestion();


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnselem) => {
        if(curAnselem.checked){
            answer = curAnselem.id
        }
    })

    return answer;
} 

const deselectAll = () => {
    answers.forEach((curAnselem) => curAnselem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} </h3> 
            <button class="btn" onclick= "location.reload()"> PLAY AGAIN !</button>    
        `;

        showScore.classList.remove('scoreArea');
        
    }
})