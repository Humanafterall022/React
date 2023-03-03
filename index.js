ReactDOM.render(<h1>Hola</h1>, document.getElementById("root"))

const h1 = document.createElement("h1")
h1.textContent="gato"
h1.className= "header"
document.getElementById("root").append(h1)