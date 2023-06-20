import { useEffect, useState } from "react";

export const useForm = (initialForm, validateForm) => {
    const [form , setForm] = useState(initialForm);
    const [errors , setErrors] = useState({});
    const [success , setSuccess] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    };

    const handleSubmit = (e) => {
        handleChange(e);
        e.preventDefault();
        setErrors(validateForm(form));
        setIsSubmitted(true);

    };

    useEffect(() => {
        if(isSubmitted && Object.keys(errors).length === 0){
            setSuccess(true);
        }else{
            setSuccess(false);
        }
    }, [errors, isSubmitted]);

    
     

  return {
    success,
    form,
    errors, 
    handleChange, 
    handleSubmit
  }
}


