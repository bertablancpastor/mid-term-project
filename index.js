const infoJson = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")

  .then(response => response.json())
  .then((result) => {
    let infoExterna = ""
    let newArray = result.slice(0,3)
    
  newArray.forEach((element,index) => {
    infoExterna += `
    <div  class="recentProjectsListItem" id="infoJson">
                    <div class="projectCard">
                            <img src="./project-assets/projects-section/${index+1}.jpg" alt="1" class="projectImg">
                        <div class ="projectContent">
                            <div class ="projectText">
                                <div class ="projectTitle">${element.title}</div>
                                <div class ="projectDescription">${element.body}</div>
                                <a href="./recent-projects/recent-projects.html" target="_blank" class="projectLink" >Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
    `    
  });

  document.querySelector(".recentProjectsListRole").innerHTML += infoExterna 

  })

}

infoJson()