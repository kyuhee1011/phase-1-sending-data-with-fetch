


  function submitData (name, email) {
  return fetch('http://localhost:3000/users',{ 
    method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    name:name,
    email: email,
  }),

  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      document.body.innerHTML = object.id;
    })

      .catch(function (error) {
        alert("Oops, wrong information");
        console.log(error.message);
        const p = document.createElement('p')
        p.innerHTML = error.message
        document.body.appendChild(p)
    });
}