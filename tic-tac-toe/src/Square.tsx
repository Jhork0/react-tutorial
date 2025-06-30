interface SquareProps {
  children: React.ReactNode
  hanldleClick?: (index: number) => void
  index?: number
  isSelected?: boolean
}

const Square = ({ children, hanldleClick, index, isSelected } : SquareProps ) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div onClick={() => {if (index !== undefined) hanldleClick?.(index)}} className={className}>
      {children}
    </div>
  )
}


export default Square