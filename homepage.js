document.querySelector("#aboutMeBio").style.display = "none";
document.querySelector(".hiddenByDefualt").style.display = "none";

function displayAboutMeBio(){

    let aboutMeBio = document.querySelector("#aboutMeBio");

    if (aboutMeBio.style.display == "none") {

        aboutMeBio.style.display = "block";

    } else {
    aboutMeBio.style.display = 'none'
    }
};

function displayQuestionAnswer(n){
    console.log("was clicked");
    let questionAnswer = document.querySelector(`#question${n}`);
    console.log(questionAnswer);

    if(questionAnswer.style.display == "none"){
        questionAnswer.style.display = "block";
    } else {
        questionAnswer.style.display = 'none';
    }
}