import Styles from "./Register.module.css";
import { useFormik } from "formik";

export default function Register() {

  function submitRegister(){
    console.log('submit')
  }
  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmit: submitRegister,
  })
  return (
    <>
    <div className="w-75 mx-auto py-5">
    <h3>Register Now</h3>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" className="form-control" id="name" name="name" />
        
        <label htmlFor="phone">Phone:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" className="form-control" id="phone" name="phone" />
        
        <label htmlFor="email">Email:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" id="email" name="email" />
        
        <label htmlFor="password">Password:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control" id="password" name="password" />
        <label htmlFor="rePassword">Password:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" className="form-control" id="rePassword" name="rePassword" />
        
        <button type="submit" className="btn bg-main text-white mt-2">Register</button>
      </form>
    </div>

    </>
  );
}
