
import style from './Jumbotron.module.css'

export const Jumbotron = () => {
  return (

    <div className={style.container}>
       


      <h1>Countries API</h1>

        <div className={style.postitContainer}>
          <div className={style.tapeDecor}></div>
          <div className={style.postitZero}>
            <p><span> ↑ Add an Activity</span> to do at Country </p>
          </div>
        </div>
      
        <div className={style.postitContainer}>
          <div className={style.tapeDecor}></div>
          <div className={style.postitOne}>
            <p><span>Click on the flag</span> to get more information</p>
          </div>
        </div>


        <div className={style.postitContainer}>
          <div className={style.tapeDecor}></div>
          <div className={style.postitTwo}>
            <p><span>Filter the countries</span> alphabetically or by population ↓</p>
          </div>
        </div>

        <div className={style.postitContainer}>
          <div className={style.tapeDecor}></div>
          <div className={style.postitThree}>
            <p><span>Search a country</span> by its name ↓</p>
          </div>
        </div>


    </div>
  )
}

