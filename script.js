const questions = [{
    q: "What is capital of India?",
    a: [{ text: "Gandhinagar", isCorrect: false },
    { text: "Surat", isCorrect: false },
    { text: "Delhi", isCorrect: true },
    { text: "Mumbai", isCorrect: false }
    ]
 
},
{
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
    { text: "Phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]
 
},
{
    q: "What is the capital of Gujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
 
}
]

let currQuestion = 0;
let score = 0;

function loadQues() {
    let option = document.querySelector('.options')
    let ques = document.querySelector('.question')

    ques.textContent = questions[currQuestion].q;
    option.innerHTML = ''
    for(let i = 0; i < questions[currQuestion].a.length;i++){
        let choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        option.appendChild(choicesdiv);
    }
}

loadQues();

function scoreText(){
    document.querySelector('.score').textContent = `You scored ${score} out of ${questions.length}`
}

function nextQuestion(){
    if(currQuestion < questions.length-1){
        currQuestion++;
        loadQues();
    }else {
        document.querySelector('.options').remove();
        document.querySelector('.question').remove();
        document.querySelector('.btn').remove();
        scoreText()
    }
}

function checkAns(){
    let selectedAns = document.querySelector('input[name="answer"]:checked').value
    if(questions[currQuestion].a[selectedAns].isCorrect){
        score++;
        nextQuestion()
    }else {
        nextQuestion()
    }
}