
function resumeDownload(){

    window.open(
        "https://drive.google.com/file/d/1tTEstrhGrt3Qu95MDwSHQJH_BxyEF2qj/view?usp=sharing"
      );
}



let githubBtn = document.querySelector("#contact-github");

githubBtn.addEventListener('click',function(){
    
    window.open(
        "https://github.com/iamdhanashri",
        "_blank"
      );

})

let linkedinBtn = document.querySelector(".fa-linkedin");

linkedinBtn.addEventListener('click',function(){
    
    window.open(
        "https://www.linkedin.com/in/dhanashri-ahire-374397269/",
        "_blank"
      );

})

let githubBtn2 = document.querySelector("#footer-github");

githubBtn2.addEventListener('click',function(){
    
    window.open(
        "https://github.com/iamdhanashri",
        "_blank"
      );


})

let linkedinBtn2 = document.querySelector("#footer-linkedin");

linkedinBtn2.addEventListener('click',function(){

    window.open(
        "https://www.linkedin.com/in/dhanashri-ahire-374397269/",
        "_blank"
      );

})


let contactBtn = document.querySelector("#contact-btn");

contactBtn.addEventListener('click',function(){
    
    window.location.href = '#contact';

})





let closeBtn = document.querySelector(".closebtn");
let openBtn = document.querySelector(".openbtn");

openBtn.addEventListener("click",function(){
    document.querySelector("#side-window").style.width = "250px";
})
  
closeBtn.addEventListener("click",function(){
    document.querySelector("#side-window").style.width = "0";
})
  

let btnform = document.querySelector("#form-submit");

btnform.addEventListener('click',function(){

    window.location.href = "https://iamdhanashri.github.io/"

})


let navbarColor = document.querySelectorAll(".nav-link");

console.log(navbarColor);
for(let nav of navbarColor){

    nav.addEventListener("click",function(){
    
        let curr = document.querySelector("#nav-bar a.home");
        curr.classList.remove('home');        
        nav.classList.add("home");

    })

}

function eshopperGithub(){

    window.location.href = "https://github.com/iamdhanashri/acceptable-popcorn-8320";

}

function eshopperDeploy(){

    window.location.href = "https://stirring-lokum-bf0ef8.netlify.app/";

}

function fashGithub(){

    window.location.href = "https://github.com/iamdhanashri/tedious-view-7935";

}

function fashDeploy(){

    window.location.href = "https://lucky-queijadas-f6b0ce.netlify.app/";

}


function mailGithub(){

    window.location.href = "https://github.com/iamdhanashri/-average-alarm-4307";

}

function mailDeploy(){

    window.location.href = "https://mailtrap.netlify.app/";

}

function KFCGithub(){

    window.location.href = "https://github.com/iamdhanashri/KFC-Food-Mart";

}

function KFCDeploy(){

    window.location.href = "https://fantastic-pasca-a44276.netlify.app/";

}