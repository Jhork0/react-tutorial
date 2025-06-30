
import { useState } from 'react'
import './App.css'
import Mensaje from './Mensaje.tsx'
import Square from './Square.tsx'
import {EstadoJuego, Turns, COMBINACIONES_GANADORAS} from './constantes.ts'


function App() {
  
const [board,setBoard] = useState( Array(9).fill(null))
const [turn,setTurn] = useState( Turns.X)
const [estadoGames,setEstadoGames] = useState(EstadoJuego.Jugando)
const [ganador, setGanador] = useState<string | null>(null)

const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(Turns.X)
  setEstadoGames(EstadoJuego.Jugando)
  setGanador(null)
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

  const newTrun = turn === Turns.O ? Turns.X : Turns.O   
  setTurn(newTrun)

const ganador = comprobarGanador(newBoard)
  if (ganador) {
    setEstadoGames(EstadoJuego.Ganador)
    setGanador(ganador)
    return
  }

  if(newBoard.find(elemento => elemento == null) == false){
    setEstadoGames(EstadoJuego.Empate)
  }
 
}


  return (

    <>
      <main className='board'>
        <h1>Tic-Tac-Toe</h1>
        <button className='button-reinicio' onClick={resetGame}>Reiniciar juego</button>
        <section className='game'>
           {             /* Fundamental esa n  */}
          {board.map(( n , index) => {
            return (
              <Square key={index}  index={index} hanldleClick={updateBoard}>
                 {board[index]}
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
        </section>
      </main>
    </>
  )
}

export default App
