import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import {  useSelector } from 'react-redux';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import style from './Form.module.css'
import { validate, valideSubmit } from '../../helpers/formValidations';




export const Form = () => {

  const countries =  useSelector(state=>state.countries)
  let countriesNames = countries.map(country=> {return {label: country.name , value: country.id}})

  const [form, setForm] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryid:[]
  })


  const [errors, setErrors] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryid:""
  })

  

  const changeHandler = (event) => {
    const property = event.target.name 
    const value = event.target.value

    setErrors(validate({
      ...form, 
      [property ]: value}))


    setForm({
      ...form, 
      [property ]: value})
  }

  const submitHandler= (event) => {
    event.preventDefault()
    
    valideSubmit(form)
    axios.post("http://localhost:3001/activities",form)
      .then(res=>alert(res.data))
      .catch(err=>alert(err))

  }



  // Countries libreria
  const animatedComponents = makeAnimated();

  const selectHandler = (value) => {
    let selectedCountries = value.map(country => country.value)
   
    setForm({
      ...form,
      countryid: selectedCountries
    })
  }

  


  return (
    <div className={style.container}>

      
      <h1>Create an Activity</h1>

        <form onSubmit={submitHandler} className={style.form}>
         
          <div className={style.inputName}>
              <label htmlFor='name' >Name: </label>
              <input type="text" value={form.name} onChange={changeHandler} name="name"/>
              {errors.name && <p className={style.errorText}>{errors.name}</p>}
          </div>



          
          <div className={style.inputLevel}>
            <label htmlFor='level'>Level: </label>

            <input type="radio" id='1' name='level' value='1' onChange={changeHandler} />
            <label htmlFor='1'>1</label>

            <input type="radio" id='2' name='level' value='2' onChange={changeHandler}/>
            <label htmlFor='2'>2</label>

            <input type="radio" id='3' name='level' value='3' onChange={changeHandler}/>
            <label htmlFor='3'>3</label>

            <input type="radio" id='4' name='level' value='4' onChange={changeHandler}/>
            <label htmlFor='4'>4</label>

            <input type="radio" id='5' name='level' value='5' onChange={changeHandler}/>
            <label htmlFor='5'>5</label>
          </div>
          {!form.level && <p className={style.errorSelectText}>Select a level</p>}
            


          <div className={style.inputSeason}>
            <label>Season: </label>

            <input type="radio" id='spring' name='season' value='spring' onChange={changeHandler} />
            <label htmlFor='spring'> Spring</label>

            <input type="radio" id='summer' name='season' value='summer' onChange={changeHandler}/>
            <label htmlFor='summer'>Summer</label>

            <input type="radio" id='fall' name='season' value='fall' onChange={changeHandler}/>
            <label htmlFor='fall'>Fall</label>

            <input type="radio" id='winter' name='season' value='winter' onChange={changeHandler}/>
            <label htmlFor='winter'>Winter</label>
          </div>
            {!form.season && <p className={style.errorSelectText}>Select at season</p>}


          <div className={style.inputDuration}>
            <label>Duration: </label>
            <input type="number" value={form.duration} onChange={changeHandler} name="duration"/>
            <span>minutes</span>
          </div>
          {!form.duration && <p className={style.errorSelectText}>Pleas, tell us how long will it take</p>}

        
          <div className={style.inputCountry}>
              <label htmlFor='countryid'>Countries: </label>
              
          
              {/* <select name="countryid" onChange={changeHandler}>
                  <option >Select</option>
                    { 
                      countriesNames.map(country=>{
                      return <option key={country.value} value={country.value}>{country.label}</option>
                      })
                    }
              </select> */}
            
                <Select 
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    onChange={selectHandler}
                    options={countriesNames} 
                    name="countryid"
                />


          </div>
          {!form.countryid.length && <p className={style.errorSelectText}>Select at least one</p>}

          
         

          <div className={style.confirmForm}>
              <h2>Please check the information</h2>
              <p>Actividad: <span>{form.name}</span></p>
              <p>Dificulty level: <span>{form.level}</span></p>
              <p>Season: <span>{form.season}</span></p>
              <p>Contries: <span>{form.countryid.join(", ")}</span></p>
          </div>
                    

                    {/*  className={!errors ? style.submitButton : style.noDisplay } */}
          
          
          <button type='submit'>Submit Activity</button>
        
        
        </form>
                      
      
           
      
      <Link to="/home">
        <button>Return to Home</button>
      </Link>

    </div>
  )
}
