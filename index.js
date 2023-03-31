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

    });



    $('.scroll-up').click(function () {
        $('html').animate({ scrollToP: 0 });
    });



    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
    })

});


