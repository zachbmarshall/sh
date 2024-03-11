let questions = [
    { question: "What is the capital of France?", answer: "Test", correct: false },
    { question: "What is the largest planet in our solar system?", answer: "1", correct: false },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "1", correct: false },
    { question: "What is the chemical symbol for water?", answer: "1", correct: false },
    { question: "What year did the Titanic sink?", answer: "1", correct: false },
    { question: "What is the square root of 64?", answer: "1", correct: false },
    { question: "Who painted the Mona Lisa?", answer: "1", correct: false },
    { question: "What is the tallest mountain in the world?", answer: "1", correct: false },
    { question: "What is the capital of Japan?", answer: "1", correct: false },
    { question: "Who invented the lightbulb?", answer: "1", correct: false },
    { question: "What is the largest ocean?", answer: "1", correct: false },
    { question: "What is the chemical symbol for gold?", answer: "1", correct: false },
    { question: "What is the freezing point of water in Fahrenheit?", answer: "1", correct: false },
    { question: "Who is known as the 'Father of Computers'?", answer: "1" },
    { question: "What is the chemical symbol for iron?", answer: "1", correct: false },
    { question: "What is the speed of light in a vacuum?", answer: "1", correct: false }
];

function handleClick(number) {
    let questionIndex = number - 1;
    let question = questions[questionIndex].question;
    let answer = questions[questionIndex].answer;

    let userAnswer = prompt(question);

    let cells = document.querySelectorAll('.col-3');
    let cell = cells[number - 1];
    

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        questions[questionIndex].correct = true;
        cell.style.backgroundColor = 'green';
    }

    else {
        questions[questionIndex].correct = false;
        cell.style.backgroundColor = 'red';
    }
    
    if (questions.every(question => question.correct === true)) { 
        document.getElementById('congrats-message').style.display = 'block'; 
    }

}
