
import { useState } from 'react'
import './App.css'


const Turns = {
  X: `X`,
  O: `O`
}

interface SquareProps {
  children: React.ReactNode
  hanldleClic?: (index: number) => void
  index: number
  isSelected: boolean
}

const hanldleClic  = () =>{
   updateBoard() 
}

const Square = ({ children, hanldleClic, index, isSelected } : SquareProps ) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div onClick={hanldleClic} className={className}>
      {children}
    </div>
  )
}

function App() {


  
const [board,setBoard] = useState( Array(9).fill(null))
const [turn,setTurn] = useState( Turns.X)

const updateBoard = () =>{
  const newTrun = turn === Turns.O ? Turns.X : Turns.O   
  setTurn(newTrun)
}

  return (

    <>
      <main className='board'>
        <h1>Tic-Tac-Toe</h1>
        <section className='game'>
          {board.map((n, index) => {
            return (
              <Square key={index}  index={index} hanldleClic={updateBoard}>
                 
              </Square>
            )
          })
          }
        </section>
        <section className='turn'>
          <Square isSelected={turn===Turns.X}>{Turns.X}</Square>
          <Square isSelected={turn===Turns.O}>{Turns.O}</Square>
        </section>
      </main>
    </>
  )
}

export default App
