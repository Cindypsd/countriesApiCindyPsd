
import style from './Jumbotron.module.css'

export const Jumbotron = () => {
  return (
    <div className={style.container}>
      <h1>Countries API</h1>
      <p>Let's learn more about the countries around the world!</p>
      <p>Click the flag image to get more info</p>
      <p>Search a country by its name</p>
    </div>
  )
}
