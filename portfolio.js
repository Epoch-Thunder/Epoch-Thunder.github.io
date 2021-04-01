const targetElement=document.querySelectorAll(".service")


document.addEventListener("scroll",function(){
    for(let i=0;i<targetElement.length;i++){
        const getElementDistance=targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight*0.2;
        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("show");
        }
    }
})
