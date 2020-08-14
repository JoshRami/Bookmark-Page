const questions = [...document.getElementsByClassName("question")];
questions.forEach(question =>{
  let answer =  question.getElementsByClassName("answer")[0];
  answer.classList.toggle("hidden");
});

questions.forEach(question =>{
    let answer =  question.getElementsByClassName("answer")[0];
    let button = question.getElementsByClassName("button")[0];
    let buttonImg = button.getElementsByTagName("path")[0];
    const buttonImgColorClosed = "#5267DF";
    const buttonImgColorOpen = "#FA5757";
    button.addEventListener("click", ()=>{
        button.classList.toggle("transform");
        button.classList.toggle("rotate-180");
        if (answer.classList.contains("hidden")){
            answer.classList.replace("hidden","block");
            buttonImg.setAttribute("stroke", buttonImgColorOpen)
        }
        else if (answer.classList.contains("block")){
            answer.classList.replace("block","hidden");
            buttonImg.setAttribute("stroke", buttonImgColorClosed)
        }
    });
});
