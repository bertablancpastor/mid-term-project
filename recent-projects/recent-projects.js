const infoJson2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then((result) => {

      let newTitle = result.title.split(" ")
      let title = `${newTitle[0]} ${newTitle[1]} ${newTitle[2]}`

      document.querySelector(".titleProject").innerText = title;
      document.querySelector(".textProject").innerText = `${result.body} ${result.body} ${result.body} ${result.body}` ;

  
    })
  
  }
  
  infoJson2()