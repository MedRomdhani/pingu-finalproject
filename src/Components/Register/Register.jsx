import Styles from "./Register.module.css";
import { useFormik } from "formik";

export default function Register() {

  function submitRegister(){
    console.log('submit')
  }
  function validate(values){
    let errors={};
    let phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    let emailRegex = /^[A-Z0-9._X+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.name){
      errors.name = "Name is required!";
    } else if (values.name.lenght < 3){
      errors.name = "Name minlenght is 3";
    } else if(values.name.length > 10){
      errors.name = "Name maxlength is 10";
    }
    if(!phoneRegex.test(values.phone)){
      errors.phone = "Phone number invalid";
    } else if(!values.phone){
      errors.phone = "Phone is required";
    }
    if(!values.email){
      errors.email = "Email is required";
    } else if(!emailRegex.test(values.email)){
      errors.email = "Email invalid";
    }
    if(!values.password){
      errors.password = "Password is required";
    }
    if(!values.rePassword){
      errors.rePassword = "rePassword is required";
    }
    return errors;
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validate,
    onSubmit: submitRegister,
  })
  return (
    <>
    <div className="w-75 mx-auto py-5">
    <h3>Register Now</h3>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" className="form-control" id="name" name="name" />
        {formik.errors.name && formik.touched.name && <div className="alert alert-danger mt-2 p-2">{formik.errors.name}</div>}

        <label htmlFor="phone">Phone:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" className="form-control" id="phone" name="phone" />
        {formik.errors.phone && formik.touched.phone && <div className="alert alert-danger mt-2 p-2">{formik.errors.phone}</div>}

        <label htmlFor="email">Email:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" id="email" name="email" />
        {formik.errors.email && formik.touched.email && <div className="alert alert-danger mt-2 p-2">{formik.errors.email}</div>}

        <label htmlFor="password">Password:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control" id="password" name="password" />
        {formik.errors.password && formik.touched.password && <div className="alert alert-danger mt-2 p-2">{formik.errors.password}</div>}

        <label htmlFor="rePassword">RePassword:</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" className="form-control" id="rePassword" name="rePassword" />
        {formik.errors.rePassword && formik.touched.rePassword && <div className="alert alert-danger mt-2 p-2">{formik.errors.rePassword}</div>}

        <button type="submit" className="btn bg-main text-white mt-2">Register</button>
      </form>
    </div>

    </>
  );
}
