import { useState } from "react"


export const useForm = (intialForm = {}) => {
  const [formState, setFormState] = useState({intialForm})

  const changeHandler = (event) => {
    const property = event.target.name 
    const value = event.target.value

    setFormState({
      ...formState, 
      [property ]: value})
    }


  return {
    formState,
    changeHandler
  }

}
