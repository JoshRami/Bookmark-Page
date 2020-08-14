const emailInput = document.getElementById("emailInput");
const emailWrapper = document.getElementById("emailWrapper");
const emailForm = document.getElementById("emailForm");
const emailIsEmpty = document.getElementById("emaileEmptyMsg");
const emailErrorMsg = document.getElementById("emaileErrorMsg");


emailWrapper.classList.remove("border-3");
emailWrapper.classList.remove("bg-palette-tomato");

emailInput.addEventListener("input",()=>{
    emailIsEmpty.classList.replace("block","hidden");
    if(emailInput.validity.valid){
        emailErrorMsg.classList.replace("block","hidden");
        emailWrapper.classList.remove("border-3");
        emailWrapper.classList.remove("bg-palette-tomato");

    }
    else{
        emailErrorMsg.classList.replace("hidden","block");
        emailWrapper.classList.add("bg-palette-tomato");
        if(!emailWrapper.classList.contains("border-3")){
            emailWrapper.classList.add("border-3");
        }
    }
});
emailForm.addEventListener("submit",(e)=>{
    if(emailInput.value === ""){
        emailIsEmpty.classList.replace("hidden","block");
        emailWrapper.classList.add("border-3");
        emailWrapper.classList.add("bg-palette-tomato");
        e.preventDefault();
    }
    if(!emailInput.validity.valid){
        e.preventDefault();
    }
    
})