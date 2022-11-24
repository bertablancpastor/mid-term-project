
const emailForm = (preventForm) => {
    preventForm.preventDefault();
    
    let fullName = document.querySelector("#name").value;
    // let email = document.querySelector("#email").value;
    // let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#message").value;


    fetch("https://jsonplaceholder.typicode.com/posts", {
     
      method: "POST",
      body: JSON.stringify({ 
        title: fullName, 
        userId: 1,
        body: message,
         }),     
      headers: {
        "Content-type": "application/json; charset=UTF-8",
         Accept: "text/plain, application/json",
      },    
    })
      .then((response) => response.json())
      .then((formData) => console.log(formData))
      .then(() => alert("todo correcto"))
      .then(() => inputs.reset())
      .catch((error) => console.log(error));
  };

  // document.querySelector("#emailForm").addEventListener("submit", emailForm);

  let inputs = document.querySelector("#emailForm");
  inputs.addEventListener("submit", emailForm)