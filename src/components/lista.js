import { useState } from "react";

export function Lista() {const luz = ['apagado', 'encendido al 25%', 'encendido al 50%', 'encendido al 75%', 'encendido al 100%'];
  const [porc, setPorc] = useState(0);
  const [encendido, setEncendido] = useState(true); 

  const incrementar = () => {
    if (porc === luz.length - 1) {
      setPorc(0);
    } else {
      setPorc(porc + 1);
    }
  };

  const regresar = () => {
    if (porc === 0) {
      setPorc(luz.length - 1);
    } else {
      setPorc(porc - 1);
    }
  };

  const resetear = () => setPorc(0);

  const toggleEncendido = () => setEncendido(!encendido); 

  return (
    <>
      <div>
        <div>El porcentaje actual es: {encendido ? luz[porc] : 'Apagado'}</div>
        <button onClick={incrementar} disabled={!encendido}>Aumentar</button>
        <button onClick={regresar} disabled={!encendido}>Disminuir</button>
        <button onClick={resetear}>Resetear</button>
        <button onClick={toggleEncendido}>{encendido ? 'Apagar' : 'Encender'}</button>
      </div>
    </>
  );
}
