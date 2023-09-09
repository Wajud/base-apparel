const submitBtn = document.querySelector(".arrow-wrap");
const email = document.querySelector("input");
const errorMessage = document.querySelector("p.error-message");
const errorIcon = document.querySelector("i.exclamation")

const regEx = /^(\w+)@([a-z\d]{2,10})\.([a-z]{2,10})(\.[a-z]{2,10})*$/
submitBtn.addEventListener("click",()=>{
    let emailAddress = email.value;
    if(regEx.test(emailAddress)){
    //    sessionStorage.setItem("Email address", JSON.stringify(emailAddress));
       email.value = " ";       
        hideElement(errorIcon);
        hideElement(errorMessage);
    }
    
    else{
        showElement(errorIcon);
        showElement(errorMessage)
        setTimeout(()=>{
            hideElement(errorIcon);
            hideElement(errorMessage);
        }, 2000)
    }
})

function hideElement(element){
    element.classList.remove("show");
    element.classList.add("hide")
}

function showElement(element){
    element.classList.add("show");
    element.classList.remove("hide")
}