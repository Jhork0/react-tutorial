
import { useState } from 'react'
import './App.css'
import Mensaje from './Mensaje'
import Square from './Square'
import {EstadoJuego, Turns, COMBINACIONES_GANADORAS} from './constantes.ts'
import confetti from 'canvas-confetti'
import { Toast } from './Toast.tsx'


function App() {
  
const [board,setBoard] = useState( ()=>{ 
  // inicializa el estado el cual solo se puede inicializar una vez
  const boardFromLocalStorage = window.localStorage.getItem('Board')
  return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)

})
const [turn,setTurn] = useState( ()=>{
  const turnFromLocalStorage = window.localStorage.getItem('Turn')
  return turnFromLocalStorage ?? Turns.X 
 })

const [estadoGames,setEstadoGames] = useState(EstadoJuego.Jugando)
const [ganador, setGanador] = useState<string | null>(null)
const [showToast, setShowToast] = useState(false);

const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(Turns.X)
  setEstadoGames(EstadoJuego.Jugando)
  setGanador(null)
  window.localStorage.removeItem('Board')
  window.localStorage.removeItem('Turn')

}
const isEmpate = (newBoard: (string | null)[]) => {
  return newBoard.every((square) => square !== null)
}


  const comprobarGanador = (tablero: (string | null)[]) => {
  for (const combo of COMBINACIONES_GANADORAS) {
    const [a, b, c] = combo
    if (
      tablero[a] &&
      tablero[a] === tablero[b] &&
      tablero[a] === tablero[c]
    ) {
      return tablero[a] // Devuelve 'X' o 'O'
    }
  }
  return null
}

const updateBoard = ( index: number ) => {
  if( estadoGames !== EstadoJuego.Jugando || board[index] !== null ) return 
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)

  const newTurn = turn === Turns.O ? Turns.X : Turns.O   
  setTurn(newTurn)

  window.localStorage.setItem('Turn', newTurn)
  window.localStorage.setItem('Board', JSON.stringify(newBoard))  

  const ganador = comprobarGanador(newBoard)
    if (ganador) {
      setEstadoGames(EstadoJuego.Ganador)
      setGanador(ganador)
      confetti()
      return
    } else if(isEmpate(newBoard)) {
    setEstadoGames(EstadoJuego.Empate)
    setShowToast(true);
  }


 
}


  return (

    <>
      <main className='board'>
        <h1>Tic-Tac-Toe</h1>
        <button className='button-reinicio' onClick={resetGame}>Reiniciar juego</button>
        <section className='game'>
           {             /* Fundamental esa n  */}
          {board.map((n: string | null, index: number) => {
            return (
              <Square key={index}  index={index} hanldleClick={updateBoard}>
                 {n}
              </Square>
            )
          })
          }
        </section>
        <section className='turn'>
          <Square isSelected={turn===Turns.X}>{Turns.X}</Square>
          <Square isSelected={turn===Turns.O}>{Turns.O}</Square>
        </section>
        <section>
          <Mensaje ganador={ganador}/>
          {showToast && (
        <Toast
         message="¡Empate!"
          onClose={() => setShowToast(false)}
         />
        )}

        </section>
      </main>
    </>
  )
}

export default App




