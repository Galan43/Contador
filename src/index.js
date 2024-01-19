import React from "react";
import ReactDOM from "react-dom";
import { Contador } from "./components/Contador";
import { Texto } from "./components/Texto";
import { Lista } from "./components/lista";
import { Puerta } from "./components/Image";
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Contador />
    <Texto />
    <Lista />
    <Puerta />

  </>
)

// function Formulario() {
//   const [nombre, setNombre] = React.useState("");
//   const [grupo, setGrupo] = React.useState("");
//   const [opcion, setOpcion] = React.useState("");
//   const [isChecked, setIsChecked] = React.useState(false);

//   function botonClick() {
//     console.log("Boton clickeado");
//   }

//   function leerNombre(e) {
//     setNombre(e.target.value);
//   }

//   function leerGrupo(e) {
//     setGrupo(e.target.value);
//   }

//   function seleccionarOpcion(e) {
//     setOpcion(e.target.value);
//   }

//   function manejarCheckbox() {
//     setIsChecked(!isChecked);
//   }

//   function enviarFormulario(e) {
//     e.preventDefault();
//     console.log("Nombre:", nombre);
//     console.log("Grupo:", grupo);
//     console.log("Opción seleccionada:", opcion);
//     console.log("CheckBox seleccionado:", isChecked);
//     console.log("Formulario enviado");
//   }

//   return (
//     <>
//       <button onClick={botonClick}>Guardar</button>
//       <form onSubmit={enviarFormulario}>
//         <div>
//           <label htmlFor="nombre">Nombre:</label>
//           <input type="text" id="nombre" value={nombre} onChange={leerNombre} />
//         </div>
//         <div>
//           <label htmlFor="grupo">Grupo:</label>
//           <input type="text" id="grupo" value={grupo} onChange={leerGrupo}/>
//         </div>
//         <div>
//           <label>Te gusta la materia::</label>
//           <input type="radio" id="opcion1" name="opcion" value="opcion1" checked={opcion === "opcion1"} onChange={seleccionarOpcion} />
//           <label htmlFor="opcion1">Si</label>
//           <input type="radio" id="opcion2" name="opcion" value="opcion2" checked={opcion === "opcion2"} onChange={seleccionarOpcion} />
//           <label htmlFor="opcion2">No</label>
//         </div>
//         <div>
//           <input type="checkbox" id="checkBox" checked={isChecked} onChange={manejarCheckbox} />
//           <label htmlFor="checkBox">Escuchas musica? (marca si, te gusta)</label>
//         </div>
//         <button type="submit">Enviar</button>
//       </form>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Formulario />);
