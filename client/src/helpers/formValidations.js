export const validate = (form) => {
  const errors = {};

    if(form.name && form.name.length < 4)
    errors.name = "Add a name for the activity at least 4 characters please";

    if(form.duration && form.duration.length < 2)
    errors.duration = "Add the duration of the activity please"


    return errors
  }



