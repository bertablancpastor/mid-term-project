const infoJson2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then((result) => {

      document.querySelector(".titleProject").innerText = result.title;
      document.querySelector(".textProject").innerText = result.body;

  
    })
  
  }
  
  infoJson2()