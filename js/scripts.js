let questions = [
    { question: "NEXT HINT: As above so below", answer: "simon", correct: false },
    { question: "NEXT HINT: Got ?", answer: "emmaus", correct: false },
    { question: "NEXT HINT: Package delivered", answer: "fish", correct: false },
    { question: "NEXT HINT: This youngest of 8 piggys went to market", answer: "creature", correct: false },
    { question: "NEXT HINT: Welcome to the happiest place on Earth", answer: "thirty", correct: false },
    { question: "NEXT HINT: Fuji, Granny Smith, honeycrisp, Ted Lasso, Silo, Severance", answer: "hour", correct: false },
    { question: "NEXT HINT: Where rubber meets the road", answer: "good", correct: false },
    { question: "NEXT HINT: Why so serious?", answer: "palm", correct: false },
    { question: "NEXT HINT: Cleanliness is next to Godliness", answer: "hosanna", correct: false },
    { question: "NEXT HINT: You better be'leaf' it", answer: "sacrament", correct: false },
    { question: "NEXT HINT: FF", answer: "fulfil", correct: false },
    { question: "NEXT HINT: The greatest addition to Mom's house", answer: "skull", correct: false }
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
