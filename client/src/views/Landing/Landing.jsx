import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <div> 
      <h1>Bienvenidios</h1>

      <h2>Country API</h2>

     <img src="../../images/2.jpg" alt="MI imagen que no se ve" />
      <p>holaa</p>

      <Link to="/home">
        <button>INICIAR</button>
      </Link>
    </div>
  )
}
