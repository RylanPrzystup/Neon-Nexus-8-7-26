
if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light")
}


function checkTheme(){
    if (localStorage.getItem('theme') == "light"){
        
        if(document.querySelector(".promotionsSection")){
            document.querySelector(".promotionsSection").style.backgroundColor = "white";
            document.querySelector("#promtotionHeader").style.color = "black";}

        else if(document.querySelector(".leftSide")){
            document.querySelector(".rightSide").style.backgroundColor = "white";
            document.querySelector(".leftSide").style.backgroundColor = "white";
            if(document.querySelector('main').classList.remove('forced-theme')){
            document.querySelector('main').classList.remove('forced-theme');}
            else{}
        }
        
    }


    else{

        if(document.querySelector(".promotionsSection")){
            document.querySelector(".promotionsSection").style.backgroundColor = "#3a3a49";
            document.querySelector("#promtotionHeader").style.color = "white";
        }else if(document.querySelector(".leftSide")){
            document.querySelector(".rightSide").style.backgroundColor = "#3a3a49";
            document.querySelector(".leftSide").style.backgroundColor = "#3a3a49";
            document.querySelector('main').classList.add('forced-theme');
        }


    }
}

function changeTheme(){
    if (localStorage.getItem('theme') == "light"){
        localStorage.setItem("theme", "dark")
    }else{
        localStorage.setItem("theme", "light")
    }
    checkTheme()
}

checkTheme()