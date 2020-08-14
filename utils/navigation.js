const body = document.getElementsByTagName("body")[0];
const elementsInBody =  [...document.body.children];
const header = document.getElementById("header");
const content = document.getElementById("content");


const hamburgerButton = document.getElementById("hamburger");
const closeHamburgerButton = document.getElementById("close-hamburger");
const optionsMenu = document.getElementById("options");

const logo = document.getElementById("logo");
const logoContainer = document.getElementById("logo").getElementsByTagName("g");
//Get Logo's ChildNodes in order to change it's color fill
const [LogoLetters, logoImage] = [...logoContainer[0].childNodes];
const [logoCircle, logoIcon] = [...logoImage.childNodes];

const buttonsActiveMobileNav = [logo, closeHamburgerButton];

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("hidden");
  closeHamburgerButton.classList.replace("hidden", "block");

  body.classList.toggle("darkblue-background");
  logoIcon.classList.toggle("darkblue-fill");
  logoCircle.classList.toggle("white-fill");
  LogoLetters.classList.toggle("white-fill");

  buttonsActiveMobileNav.forEach((button) => {
    button.classList.toggle(".mobile-background--active");
  });
  optionsMenu.classList.replace("hidden", "block");

  elementsInBody.forEach(element =>{
    if(element.id === content.id){
      let children = [...element.children];  
      children.forEach(child =>{
        if(child !== header){
          child.classList.toggle("hidden")
        }
      });
    }
    else{
      element.classList.toggle("hidden");
    }
  });

});

closeHamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.replace("hidden", "block");
  closeHamburgerButton.classList.replace("block", "hidden");

  body.classList.remove("darkblue-background");
  logoIcon.classList.remove("darkblue-fill");
  logoCircle.classList.remove("white-fill");
  LogoLetters.classList.remove("white-fill");

  optionsMenu.classList.replace("block", "hidden");
  elementsInBody.forEach(element =>{
    if(element.id === content.id){
      let children = [...element.children];  
      children.forEach(child =>{
        if(child === header){
          child.classList.replace("block","hidden")
        }
        else{
          child.classList.replace("hidden","block")
        }
      });
    }
    else{
      element.classList.replace("hidden","block");
    }
  });
});
