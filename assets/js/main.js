//Nota: Dejé los getter y setter comentados para comprobar los métodos solicitados en requerimientos

//Crear funcion constructora para Consutorio
function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes || [];
}

//Crear la función constructora para Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}

//Instanciar objetos para pacientes en 3 variables: p1, p2 y p3, utilizando instrucción "new"
p1 = new Paciente("Pedro K", "35", "11.111.111-1", "diagno 1");
p2 = new Paciente("Isabel K", "36", "12.111.111-1", "diagno 2");
p3 = new Paciente("Samuel K", "37", "13.111.111-1", "diagno 3");

/* Instanciar ahora un objeto para “Consultorio”, al cual llamaremos “c1”. Según el diagrama
UML debe recibir el nombre del consultorio y el arreglo con los objetos de los pacientes, 
utiizando la instrucción "new" 
*/
c1 = new Consultorio("Centro Médico Deportivo", [p1, p2, p3]);

//Para agregar nuevos datos, debemos instanciar un nuevo objeto para pacientes
p4 = new Paciente("Maggie K", "31", "14.111.111-1", "diagno 5");

/* Crear el método que nos permita agregar “n” cantidad de pacientes por consultorio
Consultorio.prototype.agregar_paciente = function (paciente) {
  this.pacientes.push(paciente);
};
*/

/*Para pasar este nuevo objeto a la persona, utilizaremos el método creado
denominado “agregar_paciente”, pasando como argumento el nuevo objeto creado
para pacientes “p4” 
c1.agregar_paciente(p4); 
*/

/* Crear un método que permita mostrar todos los datos de los usuarios registrados*/
Consultorio.prototype.mostrarDatosUsuarios = function () {
  var usuarios = this.pacientes;
  console.table(usuarios);
};
c1.mostrarDatosUsuarios();

/* Crear un método mediante la propiedad prototype que permita buscar los datos de los usuarios 
por nombre. Probaré con el nombre "Pedro K"*/
Consultorio.prototype.buscarPorNombre = function (nombreBuscado) {
  var usuarios = this.pacientes;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre.includes(nombreBuscado)) {
      return usuarios[i];
    }
  }
};
c1.buscarPorNombre("Pedro K");
console.table(c1.buscarPorNombre("Pedro K"));

/* Se deben mostrar todos los pacientes del consultorio "Centro Médico Deportivo" con sus 
datos personales(más adelante con getter y setter estos datos estarán protegidos y no se 
mostrarán). Revisamos en consola:*/
console.log(c1);

/* Agregamos Getters y Setters para Consultorio: nombre (consultorio) y pacientes (del consultorio).
function Consultorio(nombre, pacientes) {
  var _nombre = nombre;
  var _pacientes = pacientes || [];

  Object.defineProperty(this, "_nombre", {
    get: function () {
      return _nombre;
    },
    set: function (nuevoNombre) {
      _nombre = nuevoNombre;
    },
  });

  Object.defineProperty(this, "_pacientes", {
    get: function () {
      return _pacientes;
    },
  });
}
*/

/*Implementar métodos getters y setters para poder acceder y modificar los datos de los pacientes 
function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;

  Object.defineProperty(this, "_nombre", {
    get: function () {
      return _nombre;
    },
    set: function (nuevoNombre) {
      _nombre = nuevoNombre;
    },
  });

  Object.defineProperty(this, "_edad", {
    get: function () {
      return _edad;
    },
    set: function (nuevaEdad) {
      _edad = nuevaEdad;
    },
  });

  Object.defineProperty(this, "_rut", {
    get: function () {
      return _rut;
    },
    set: function (nuevoRut) {
      _rut = nuevoRut;
    },
  });

  Object.defineProperty(this, "_diagnostico", {
    get: function () {
      return _diagnostico;
    },
    set: function (nuevoDiagnostico) {
      _diagnostico = nuevoDiagnostico;
    },
  });
}
*/