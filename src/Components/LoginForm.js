import React, {useState} from 'react'



const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      const [errors, setErrors] = useState({})

      const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData, [name] : value
        })
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}

        if (!formData.username.trim()){
            validationErrors.username = 'Username is required'
        }

        if (!formData.email.trim()){
            validationErrors.email = 'Email is required'
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
            validationErrors.email = 'Email is not valid'
        }

        if (!formData.password.trim()){
            validationErrors.password = 'Password is required'
        } else if(formData.password.length < 6){
            validationErrors.password = 'Password should be atleast 6 characters'
        }

        if (formData.confirmPassword !== formData.password){
            validationErrors.confirmPassword = "Password not matched"
        }

        setErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0){
            alert("FORM SUBMITTED SUCCESSFULLY")
        }
      }
    return(
        <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
            <div>
                <label>Username:</label>
                <input type='text' name='username' placeholder='Username' autoComplete='off' onChange={handleChange}/>
                {errors.username && <span>{errors.username}</span> }
            </div>
            <div>
                <label>Email:</label>
                <input type='email' name='email' placeholder='example@gmail.com' autoComplete='off' onChange={handleChange}/>
                {errors.email && <span>{errors.email}</span> }
            </div>
            <div>
                <label>Password:</label>
                <input type='password' name='password' placeholder='******' autoComplete='off' onChange={handleChange}/>
                {errors.password && <span>{errors.password}</span> }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' name='confirmPassword' placeholder='******' autoComplete='off' onChange={handleChange}/>
                {errors.confirmPassword && <span>{errors.confirmPassword}</span> }
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default LoginForm;
