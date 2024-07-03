import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signInWithGoogle } from '../../firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleIcon from '../assets/google-icon.png'

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
 
      toast.success('Logged in successfully!', {
        position: toast.POSITION.TOP_CENTER
      });
    },
  });

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result.user);
     
      toast.success('Logged in with Google successfully!', {
        position: 'top-center'
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light ">
      <div className="border shadow rounded w-25 p-4">
        <form onSubmit={formik.handleSubmit}>
          <h2 className='text-center  pt-2 pb-4 fw-bold' style={{color:'green'}}>Login</h2>
          <div className='mt-4 mb-3 ps-2 pe-2' style={{fontSize:'14px'}}>
            <label htmlFor="email">Email Address: </label>
            <input
              className='form-control'
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error" style={{ fontSize: '12px', color: 'red' }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div style={{fontSize:'14px'}} className='mb-4 ps-2 pe-2'>
            <label htmlFor="password">Password:</label>
            <input
              className='form-control'
              id="password"
              type="password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error" style={{ fontSize: '12px', color: 'red' }}>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="w-100 d-flex ps-2 pe-2 justify-content-center" >
            <button style={{fontSize:'14px'}} className='btn btn-success mb-2 w-100 mt-2 fw-bold' type="submit">Log in</button>
          </div>
        </form>
        <p className="text-center m-0 mb-1" style={{fontSize:'14px'}}>
          OR
        </p>
        <div className="w-100 d-flex justify-content-center ps-2 pe-2 pb-2 align-items-center">
          <button  style={{fontSize:'14px'}}  onClick={handleGoogleLogin} className="btn border-success w-100 fw-bold">
           <img src={googleIcon} alt="google-icon" width={'20px'} height={'20px'} /> Login with Google
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default LoginPage;
