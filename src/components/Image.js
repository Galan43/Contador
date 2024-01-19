import { useState } from "react"

export function Puerta(){
    const [puerta,setPuerta] =useState ("abierta")

    function abrir (){
        if(puerta === "cerrada"){
            setPuerta("abierta")
        } 
    }
    function cerrada (){
        if(puerta === "abierta"){
            setPuerta("cerrada")
        } 
    }

    return (
        <>
        <p>La puesta esta: {puerta}</p>
        <div><img alt="puerta" src= {process.env.PUBLIC_URL + "/images/puerta_" + puerta + ".png"}></img></div>
        <button onClick={abrir}>Abrir Imagen</button>
        <button onClick={cerrada}>cerrar Imagen</button>
        </>
    )
}