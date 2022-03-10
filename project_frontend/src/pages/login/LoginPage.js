import React, { useState} from "react";
import { loginValidation } from "./validation";
import jwt from 'jwt-decode';

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80')] before:bg-cover before:bg-center before:opacity-80 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: ``,
};

const LoginPage = () => {
  
  //Manage Form Inputs
  const [inputs, setInputs] = useState({ username: "", password: "" });

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:8000/api/login',{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password,
      })
    });

    const data = await response.json();
    console.log(data);
    
    if(data.user){
      let user = jwt(data.user);
      
      if(user.username === 'admin'){
        localStorage.setItem('admin', true);
      }else{
        localStorage.setItem('admin', false);
      }
      localStorage.setItem('token', data.user);
      alert('Login successful')
      window.location.href = '/admin';
    }else{
      alert('Please check your username and password')
    }
    console.log(data);
  }

  //Manage Form Errors
  const [errors, setErrors] = useState({});

  // Check Succesful submit
  const [isSubmit, setIssubmit] = useState(false);

  //Manage Form Input Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  //Manage Form Submit
  const handleSubmit = async(event) => {
    event.preventDefault();
    setErrors(loginValidation(inputs));
    setIssubmit(true);
    loginUser(event);
  };

  //Successful Signup validation
  // useEffect(
  //   (event) => {
  //     if (Object.keys(errors).length === 0 && isSubmit) {
  //       alert("Login Successful");
  //       console.log(localStorage.getItem('admin').value);
  //       // navigate('/admin');
  //     }
  //   },
  //   [errors, isSubmit]
  // );

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className="flex items-center min-h-screen ">
              <div className="flex-1 h-full max-w-4xl mx-auto bg-[#1A0911] rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="h-32 md:h-auto md:w-1/2">
                    <img
                      className="object-cover w-full h-full rounded-lg"
                      src="https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80"
                      alt="img"
                    />
                  </div>
                  <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div className="w-full">
                      <div className="flex justify-center">
                        <img
                          src="https://ictkerala.org/wp-content/uploads/2019/01/cropped-ict-ico.png"
                          className=" w-20 rounded-xl"
                          alt="logo"
                        />
                      </div>
                      <h1 className="mb-4 text-2xl font-bold text-center text-white">
                        Login
                      </h1>
                      <form id="login"
                        action="/api/login"
                        onSubmit={handleSubmit}
                        method="post"
                      >
                        <div className="mt-4">
                          <label className="block text-sm">Username</label>
                          <input
                            type="text"
                            name="username"
                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="Username"
                            value={inputs.email}
                            onChange={handleChange}
                          />
                          <p className="text-[#98141D] font-semibold  flex justify-center h-2">
                            {errors.email}
                          </p>
                        </div>
                        <div>
                          <label className="block mt-4 text-sm">Password</label>
                          <input
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="Password"
                            value={inputs.password}
                            onChange={handleChange}
                          />
                          <p className="text-[#98141D] font-semibold flex justify-center h-2">
                            {errors.password}
                          </p>
                        </div>
                        <button
                          className="block w-full px-4 py-2 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#0C1834] border border-transparent rounded-lg active:bg-blue-600 hover:bg-[#714EA2] focus:outline-none focus:shadow-outline-blue"
                          href="#"
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
