document.querySelector("#submit").addEventListener("submit", addPost);

//ENDPOINT
const url = 'https://jsonplaceholder.typicode.com/comments'


function addPost(preventForm) {
    preventForm.preventDefault() // evitar que los usuarios envien info vacia

    // traer el valor del titulo + post


    let email = document.querySelector("#email-suscribe").value //apunta a email


    // fetch () para empujar la info al ENDPOINT
    fetch(url, {
            method: "POST", //siempre mayusculas POST-- parametrizar para que nos devuelva el metodo post para el endpoint
            headers: {
                "Content-type": "application/json", //contenido que recive el fetch
                Accept: "application/json, text/plain", //especificar que queremos estos dos tipos de contenido, se pasa a formato json y tambien en texto
            },
            body: JSON.stringify({
                email: email,
            }), //valores de la variable-- stringify lo pasa a string
        })
        .then((response) => response.json())
        .then((formData) => console.log(formData)) //nos lo devuelve en consola
        .then(() => {
            let message = "";
            message += `
                <div id="message2">
                <h6>Oops! Something went wrong.</h6>
                </div>
                `
        })
        .catch((error) => {
            console.log(error)
        })


    document.querySelector("#email-suscribe").value = "";
}