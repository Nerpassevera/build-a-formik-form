import React from "react";
import { useFormik } from "formik";
import './App.css';
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values);
      alert('Login Successful');
      formik.resetForm();
    },
    validate: values => {
      let errors = {};
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!values.email) {errors.email = 'Field required' }
      else if (!values.email.match(emailRegex)) {errors.email = "Username should be an email"};
      if (!values.password) errors.password = 'Field required';
      return errors;
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} id='login-form'>

      <div id="emailField">
        <label htmlFor="email">
        Email:
        </label>
      <br/>
      <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}></input>
      {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
      </div>
      <div id="pswField">
        <label htmlFor="password">
        Password:
        </label>
      <br/>
      <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}></input>
      {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
      </div>
      <button id="submitBtn" type="submit" >Submit</button>    
    </form>
  );
}

export default App;