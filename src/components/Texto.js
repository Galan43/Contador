import { useState } from "react"

export function Texto(){
    // var texto ="Encendido";
    var [texto, setText] = useState("encendido");

    function switch2(){
        if(texto === "encendido"){
            setText("apagado")
        } else{
            setText("encendido")
        }

    }
    return (
        <>
            <div>{texto}</div>
            <button onClick={switch2}>Apagar/Encender</button>
        
            </>
    )
}