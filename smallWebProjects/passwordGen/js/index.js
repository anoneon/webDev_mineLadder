
function generate(){
    let textarea = document.getElementById("password");
    
    let chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-!@#$%^&*()_=|\/?.>,<{[}]'\"`~";
    
    let length = 16;
    
    let password = "";
    for(let i=0;i<length;i++){
        let randomNum = Math.floor(Math.random()*chars.length);
        password+=chars[randomNum];
    }

    textarea.value=password;
}