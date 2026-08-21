

function displayQuestionAnswer(n){
    console.log("was clicked");
    let questionAnswer = document.querySelector(`#question${n}`);
    console.log(questionAnswer);

    if(questionAnswer.style.display == "none" || questionAnswer.style.display == ""){
        questionAnswer.style.display = "block";
    } else {
        questionAnswer.style.display = 'none';
    }
}