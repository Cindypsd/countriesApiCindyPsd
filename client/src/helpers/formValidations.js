
export const nameValidation = (name) => {
  name &&
    name.length < 4 ? setErrors({...errors, name: "Add a name for the activity at leat 4 characters please"}):setErrors({...errors, name: ""})
}
