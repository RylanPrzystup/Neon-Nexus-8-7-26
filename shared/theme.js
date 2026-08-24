
if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light")
}


function checkTheme(){
    if (localStorage.getItem('theme') == "light"){
        document.querySelector(".promotionsSection").style.backgroundColor = "white";
        document.querySelector("#promtotionHeader").style.color = "black";
        
    }
    else{
        document.querySelector(".promotionsSection").style.backgroundColor = "#3a3a49";
        document.querySelector("#promtotionHeader").style.color = "white";

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