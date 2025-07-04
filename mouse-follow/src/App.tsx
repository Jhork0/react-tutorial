import "./App.css";
import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enablet, setEnablet] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  console.log(enablet);
  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      console.log("handlemove", { clientX, clientY });
      setPosition({ x: event.clientX, y: event.clientY });
    };
    if (enablet == true) {
      window.addEventListener("pointermove", handleMove);
    }
    // Este es un limpiador de los efectos que tiene en cuenta todas aquellas cosas que vamos a limpiar y que quede de 0
    return () => {
      window.removeEventListener("pointermove", handleMove);
      console.log("Cleanup");
    };
  }, [enablet]);
  return (
    <>
      <main>
        <div
          className="curson-principal"
          style={{
            position: "absolute",
            backgroundColor: "#21d9c6",
            borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            transition: "transform 0.1s ease-out",
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px,${position.y}px)`,
          }}
        />

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
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}
export default App;
