import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [enablet, setEnablet] = useState(false);

  useEffect(() => {
    console.log("Hola", { enablet });
  }, [enablet]);

  return (
    <>
      <main>
        <h3>Proyecto 3</h3>
        <button
          onClick={() => {
            setEnablet(!enablet);
          }}
        >
          Seguir
          {enablet ? " Desactivar" : " Activar"}
        </button>
      </main>
    </>
  );
}
export default App;
