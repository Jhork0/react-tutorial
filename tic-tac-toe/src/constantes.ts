export const Turns = {
  X: `X`,
  O: `O`
}

export const EstadoJuego = {
  Empate: `Empate`,
  Jugando: `Jugando`,
  Ganador: `Ganador`
}

export const COMBINACIONES_GANADORAS = [
  [0,1,2], [3,4,5], [6,7,8], // Filas
  [0,3,6], [1,4,7], [2,5,8], // Columnas
  [0,4,8], [2,4,6]           // Diagonales
]