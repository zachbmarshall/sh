let questions = [
    { question: "NEXT LOCATION HINT: I use not Conduction, nor Convection, but Radiation", answer: "simon", correct: false },
    { question: "NEXT LOCATION HINT: Got ?", answer: "emmaus", correct: false },
    { question: "NEXT LOCATION HINT: Package delivered", answer: "fish", correct: false },
    { question: "NEXT LOCATION HINT: This youngest of 8 piggys went to market", answer: "creature", correct: false },
    { question: "NEXT LOCATION HINT: Welcome to the happiest place on Earth", answer: "thirty", correct: false },
    { question: "NEXT LOCATION HINT: Fuji, Granny Smith, honeycrisp, Ted Lasso, Silo, Severance", answer: "hour", correct: false },
    { question: "NEXT LOCATION HINT: Where rubber meets the road", answer: "good", correct: false },
    { question: "NEXT LOCATION HINT: Why so serious?", answer: "palm", correct: false },
    { question: "NEXT LOCATION HINT: Cleanliness is next to Godliness", answer: "hosanna", correct: false },
    { question: "NEXT LOCATION HINT: You better beleaf it", answer: "sacrament", correct: false },
    { question: "NEXT LOCATION HINT: FF", answer: "fulfil", correct: false },
    { question: "NEXT LOCATION HINT: The greatest addition to Mom's house", answer: "skull", correct: false }
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
