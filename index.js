// Add your code here

function submitData(name, email){
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
     })
      })
      .then( function (res) {
        return res.json()
      })
      .then( function (obj) {
        document.body.innerHTML = obj["id"]
      })
      .catch( function (error) {
        document.body.innerHTML = error.message
      })
}

