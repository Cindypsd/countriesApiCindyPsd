import { Link } from 'react-router-dom'
import style from './Landing.module.css'


export const Landing = () => {
  return (
    <div className={style.containerLanding}> 
      
      <img src={require('../../images/landing_world.png')} alt="World map" />

      <div className={style.infoLanding}>
          <h1>Welcome</h1>
          <h1>to the Contries API</h1>
          <p>Here you can learn more about the countries of the world </p>
       
          <Link to="/home">
            <button>Let's Start !</button>
          </Link>
      </div>
    </div>
  )
}
