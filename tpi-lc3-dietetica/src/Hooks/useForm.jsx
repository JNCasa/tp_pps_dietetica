import { useEffect, useState } from "react";

export const useForm = (initialForm, validateForm) => {
    const [form , setForm] = useState(initialForm);
    const [errors , setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChange(e);
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            setIsValid(true);
          } else {
            setIsValid(false);
          }

    }; 

  return {
    isValid,
    form,
    errors, 
    handleChange, 
    handleSubmit
  }
}


