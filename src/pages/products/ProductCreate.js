import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

function ProductCreate() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const body = {
      name: {
        en: data.name
      },
      productType: {
        key: data.productType
      },
      slug: {
        en: data.slug
      },
      published: true
    }

    axios.post('http://127.0.0.1:4444/create-product', body)
      .then(res => console.log(res))
  };

  return (
    <div className="container mt-5">
      <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="my-5">Add product</h4>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" {...register("name")} name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea2" className="form-label">productType</label>
          <input type="text" className="form-control" id="exampleFormControlInput2" {...register("productType")} name="productType" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea3" className="form-label">Slug</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" {...register("slug")} name="slug" />
        </div>
        <button className="btn btn-primary mt-3">Add product</button>
      </form>
    </div>
  )
}

export default ProductCreate
