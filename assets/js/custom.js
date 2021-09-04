const slides=document.querySelector(".slider").children;
   const indicatorImages=document.querySelector(".slider-indicator").children;

    for(let i=0; i<indicatorImages.length; i++){
    	indicatorImages[i].addEventListener("click",function(){
         
           for(let j=0; j<indicatorImages.length; j++){
             indicatorImages[j].classList.remove("active");
           }
            this.classList.add("active");
            const id=this.getAttribute("data-id");
           for(let j=0; j<slides.length; j++){
           	slides[j].classList.remove("active");
           }

            slides[id].classList.add("active");

    	})
    }



    const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});