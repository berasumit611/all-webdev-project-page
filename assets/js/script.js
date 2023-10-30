
// fetch projects
const project_container = document.getElementsByClassName("box-container");
let project='';

fetch('./assets/js/projects.json')
.then(res=>res.json())
.then(data=>{
    
    data.forEach(proj=>{
        // console.log(proj);
        project+=`<div class="box">
        <img src="./assets/projects-img/${proj.image}.jpg" alt="project">
        <div class="content">
          <h3>${proj.name}</h3>
          <p>${proj.desc}</p>
          <div class="view">

            <a href="${proj.live}" target="_blank">Live <i class="fa-solid fa-eye" style="color: #0d0d0d; margin-left:5px;"></i></a>

            <a href="${proj.code}" target="_blank">Code <i class="fa-solid fa-code" style="color: #000000;margin-left:5px;"></i></a>
            
          </div>
          
        </div>
      </div>`;
    });
    project_container[0].innerHTML = project;
    
}) ;


