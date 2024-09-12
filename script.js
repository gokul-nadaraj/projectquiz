const questions=[
    {
        question:"which is largest aniaml in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Lion",correct:false}
        
        ]
    },
    {
        question:"which is smalest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false}
        
        ]
    },
    {
        question:"which is smalest country in the world?",
        answers:[
            {text:"Vatican city",correct:false},
            {text:"Bhutan",correct:true},
            {text:"Nepal",correct:false},
            {text:"Sri lanka",correct:false}
        
        ]
    },
    {
        question:"which is largest desert in the world?",
        answers:[
            {text:"kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true}
        
        ]
    },
    {
        question:"which is largest desert in the world?",
        answers:[
            {text:"kalahari",correct:false},
            {text:"Gobi",correct:true},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:false}
        
        ]
    }
];
const questionElement=document.getElementById("question");
const answerbuttons=document.getElementById("answer_buttons");
const nextButton=document.getElementById("next_btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion()
}
function showQuestion(){
    resetState()
    let currentQuestion=questions[currentQuestionIndex];
    let questionNO=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNO +". "+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
    nextButton.style.display="none"
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild)
    }
}

function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect =selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct")
    }
    else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if (button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled =true;
    });
    nextButton.style.display="block"
}

function showScore(){
    resetState()
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";
}

function handleNextbutton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}

nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length){
        handleNextbutton()
    }
    else{
        startQuiz()
    }
})

startQuiz();
