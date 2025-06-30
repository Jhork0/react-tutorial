interface MensajeProps {
  ganador: string | null
}

const Mensaje = ({ganador } : MensajeProps ) => {

 const className = `menssaje-win${ganador ? '-complete' : ''}` 
  
  return (
    <h1 className={className}> 🎉 ¡Ganó {ganador}!</h1>
  )
}

export default Mensaje