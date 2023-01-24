import { Link } from 'react-router-dom'
import style from './Landing.module.css'


export const Landing = () => {
  return (
    <div className={style.containerLanding}> 
      
      <img src={require('../../images/landing_world.png')} alt="MI imagen que no se ve" />

      <div className={style.infoLanding}>
          <h1>Hi! </h1>
          <h2>Segundo title</h2>
          <p>Let's learn more about the contries around the world </p>
       
          <Link to="/home">
            <button>Let's Start !</button>
          </Link>
      </div>
    </div>
  )
}
