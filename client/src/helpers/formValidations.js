const regexName = /\d/i;

export const validate = (form) => {
  const errors = {};

    if( form.name.length < 3 || regexName.test(form.name))
      errors.name = "Please, type a name with at least 3 characters and only letter";

    if(form.duration && form.duration.length < 2)
    errors.duration = "Add the duration of the activity please"


    return errors
}



