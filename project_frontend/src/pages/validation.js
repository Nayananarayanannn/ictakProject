

//Signup Form Validations
export function SignupValidation ( values )  {
    const errors = {};
    const emailRegex  = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.username){
        errors.username = 'Username is required'
    }
    if(!values.email){
        errors.email = 'Email is required';
    }else if(!emailRegex.test(values.email)){
        errors.email = 'Email is invalid';
    }
    if(!values.password){
        errors.password = 'Password is required'
    }else if( values.password.length < 8 ){
        errors.password = 'Password is too short'
    }
    return errors;
}

//Login Form Validations
export function loginValidation ( values )  {
    const errors = {};
    
    
    if(!values.username){
        errors.email = 'Username is required';
    }
    if(!values.password){
        errors.password = 'Password is required'
    }else if( values.password.length < 8 ){
        errors.password = 'Password is too short'
    }
    return errors;
}




