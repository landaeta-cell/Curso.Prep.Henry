// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
    }
  }
  return gato;

  // var gato = {                    ESTA FUNCION ES IGUAL A LA PRIMERA , SINO QUE CAMBIA POR LAS COMAS (,)
  //   nombre,                       PARA MAS SIMPLICIDAD COMO UN PROGRAMDOR SENIOR, DONDE (GATO) ES UN OBJETO   
  //   edad,                         Y PROPIEDAD SON (nombre, edad) y el agumento viene siendo (nombre,) (edad,)
  //   meow: ()=>{
  //     return "Meou!";
  //   }
  // }
  // return gato;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  
  objeto[metodo]();

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  var multiplicacion = objetoMisterioso.numeroMisterioso * 5;
  return multiplicacion;

  // return objetoMisterioso.numeroMisterioso * 5;  ESTE ES OTRO METODO MAS DIRECTO
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  if ( objeto.hasOwnProperty(unaPropiedad)) delete objeto[unaPropiedad]
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:

  var usuario = {
    nombre,
    email,
    password,
  }
  return usuario;

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  if ( usuario.email) return true
  else return false;
}


function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  return objeto.hasOwnProperty(propiedad)
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:

  if (usuario.password === password) return true;
  else return false;
}

var usuario = {username: "william", password: "123"}
console.log(verificarPassword(usuario, "123"))


function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:

  usuario.password = nuevaPassword;
  return usuario;
  
}

var usuario = { username: "landa", password: "1990"}
console.log(actualizarPassword(usuario, "32"))


function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:

  usuario.amigos.push(nuevoAmigo)
  return usuario;
}
var obj = { amigos: []}
console.log(agregarAmigo(obj, "william"))
console.log(agregarAmigo(obj, "perdro"))
console.log(agregarAmigo(obj, "juan"))


function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  for ( var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}
var usuarios = [{esPremium: false}, {esPremium: false}, {esPremium: false}]
console.log(pasarUsuarioAPremium(usuarios))


function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  var suma = 0;
  for ( var i = 0; i < usuario.posts.length; i++) {
    suma += usuario.posts[i].likes;
  }
  return suma;
}
var obj ={posts:[{id: "1", title: "aventuras en js", likes: 10,},
                 {id: "2", title: "soy hennry", likes: 100,},
                 {id: "3", title: "que es java", likes: 35,}
                ]
              }
console.log(sumarLikesDeUsuario(obj))


function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto[ "calcularPrecioDescuento" ] = ()=> {
    return producto.precio - producto.precio * producto.porcentajeDeDescuento;
  }
  return producto

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
