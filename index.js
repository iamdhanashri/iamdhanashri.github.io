<<<<<<< HEAD
=======
let tech_stacks=[
    
    {
      "teck_name": "JavaScript",
      "img_link":"https://drive.google.com/uc?export=view&id=1PAdZ31CeY83OFFT-MSACi9bOT6DUfFnY"
    },
    {
      "teck_name": "CSS",
      "img_link":"https://drive.google.com/uc?export=view&id=1csttg5pfFGGt7yE4A1YC2VxNpOPg43DG"
    },
    {
      "teck_name": "HTML",
      "img_link":"https://drive.google.com/uc?export=view&id=1OM8fgg4s361EblZU6k4i4DdUQ3sZxUDC"
    },
    {
      "teck_name": "NodeJS",
      "img_link":"https://cdn.svgporn.com/logos/nodejs.svg"
    },
    {
        "teck_name": "Express JS",
        "img_link":"https://cdn.svgporn.com/logos/express.svg"
      },
      {
        "teck_name": "MongoDB",
        "img_link":"https://cdn.svgporn.com/logos/mongodb.svg"
      },
      {
        "teck_name": "SQL",
        "img_link":"https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png"
      },   
      {
        "teck_name": "AWS",
        "img_link":"https://cdn.svgporn.com/logos/aws.svg"
      },   
    {
      "teck_name": "VS code",
      "img_link":"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
    },
    {
        "teck_name": "Git",
        "img_link":"https://cdn.svgporn.com/logos/git-icon.svg"
      },   


  
  ]
  
  let techStackDiv = document.getElementById("tech");
  
  tech_stacks.forEach(tech=>{
  
  
    let comp = document.createElement("div");
  
    let img = document.createElement("img");
    img.setAttribute("class", "skills-card-img");
    img.src = tech.img_link;
    img.alt= tech.teck_name;
    let name = document.createElement("p");
    name.innerText=tech.teck_name;
    name.setAttribute("class", "skills-card-name");
  
    comp.append(img,name);
  
    techStackDiv.append(comp);  
  })

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
>>>>>>> c6e31f725d6aef0438b81a4cd5fce59e1c1bc803


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