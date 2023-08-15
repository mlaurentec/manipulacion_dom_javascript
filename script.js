const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const image = document.getElementById('image_github');

function btnOnClick() {
  // const sumaInputs = input1.value + input2.value;
  // pResult.innerText = "Resultado: " + sumaInputs;
  let usuario = input1.value
  const url = `https://api.github.com/users/${usuario}`;
    fetch(url)
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => {
        // Manipula los datos recibidos como desees
        let src_avatar = data.avatar_url
        pResult.innerHTML = data.bio
        console.log(data.bio)

        
        console.log(src_avatar);
        image.src = src_avatar;
        
 
    })
    .catch(error => {
        // Manejo de errores
        pResult.innerHTML = 'Error al realizar la solicitud: ' + error.message;
    });
    
}


function limpiar(){
  pResult.innerHTML = "";
  image.src= '';
}

