import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <div> 
      <h1>Bienvenidios</h1>

      <h2>Country API</h2>

      <Link to="/home">
        <button>INICIAR</button>
      </Link>
    </div>
  )
}
