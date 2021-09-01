import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'

function CustomerCreate() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const body = {
      email: data.email,
      password: data.password
    }

    axios.post('http://127.0.0.1:4444/create-customer', body)
      .then(res => console.log(res))
  };

  return (
    <div className="container mt-5">
      <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="my-5">Add customer</h4>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control" id="nameInput" {...register("email")} name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea3" className="form-label">Password</label>
          <input type="password" className="form-control" id="passwordInput" {...register("password")} name="password" />
        </div>
        <button className="btn btn-primary mt-3">Add Customer</button>
      </form>
    </div>
  )
}

export default CustomerCreate
