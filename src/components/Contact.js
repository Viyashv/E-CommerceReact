import React from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
  let { register, handleSubmit, formState: { errors } } = useForm();
  function CollectionData(data){
    console.log(data);
    
  }
  return (
    <section className="gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius:"1"+"rem"}}>
              <div className="card-body p-5 text-center">

                <form className="mb-md-5 mt-md-4 pb-5" onSubmit={handleSubmit(CollectionData)}>

                  <h2 className="fw-bold mb-2 text-uppercase">Contact Us</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <div data-mdb-input-init className="form-outline form-white mb-4 form-floating">
                    <input type="text" id="Username" className="form-control form-control-lg" placeholder='' {...register('Username', { required: true , maxLength: 10 ,minLength:4 , pattern:/^[a-zA-Z]+$/})} />
                    <label className="form-label text-dark" htmlFor="Username">User Name</label>
                  </div>
                  <p className='text-danger'>
                    {errors.Username && errors.Username.type =="required" && "User name is requried"}
                    {errors.Username && errors.Username.type =="minLength" && "User name should be at least minlength 4"}
                    {errors.Username && errors.Username.type =="maxLength" && "User name should be maxlength 10"}
                    {errors.Username && errors.Username.type =="pattern" && "User name should only contains alphabets and no special characters"}
                  </p>
                  <div data-mdb-input-init className="form-outline form-white mb-4 form-floating text-dark">
                    <input type="number" id="Phone_no" className="form-control form-control-lg" placeholder='' {...register('Phone_no', { required: true ,min:10 , max:10})} />
                    <label className="form-label" htmlFor="Phone_no">User Phone Number</label>
                  </div>

                  {/* <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
