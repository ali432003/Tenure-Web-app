import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import './SignUp.css'
interface FormSignUp {
  email: string;
  password: string;
}

export default function SignUp() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [typePassword, setTypePassword] = useState('password');

  const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   setPassword(event.target.value);
  // };

  const togglePassword = () => {
    setTypePassword(prevType => prevType === 'password' ? 'text' : 'password');
    //event.preventDefault();
    // if (typePassword === 'password') {
    //   setTypePassword('text');
    //   return;
    // } else {
    //   setTypePassword('password');
    //   return;
    // }
  };

  const validatePassword = (password: string) =>{
    let error;
    if(!password){
      error = 'Required password';
    } else if(!passwordPattern.test(password)){
      error = "Invalid password";
    }
    return error;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Email invalid').required('email is required.'),
      password: yup.string().required('Your email or password is incorrect.'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-gray-50 grid grid-cols-1">
      <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
        <img className="w-72 phone:w-24 tablet:w-32" src="src/assets/icons/logo_icon.svg" alt="Tenure logo" />
        <h2 className="flex flex-col center largest-text text-gray-500">Create an account</h2>
      </div>
      <div className="container min-w-full center pt-10 relative flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit}>
          <label className="block">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              className={`input-selected mb-2 form-input px-4 py-3 w-96 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500`}
              style={{ border: formik.touched.email && formik.errors.email ? '1px solid red' : '' }}
            />
          </label>
          <div className='mb-4'>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-start ml-6 mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <label className="block">
            <div className="pl-5">
              <input
                type={typePassword}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
               // validate={validatePassword}
                placeholder="Create a password"
                className="mb-2 form-input appearance-none px-4 py-2 w-96 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ..."
                style={{ border: formik.touched.password && formik.errors.password ? '1px solid red' : '' }}
              />
              <button type="button" className="relative end-36p phone: end-8p " onClick={togglePassword}>
                {typePassword === 'password' ? (
                  <img  alt="eye" src="src/assets/icons/eye_closed.svg" />
                ) : (
                  <img alt="eye" src="src/assets/icons/eye_open.svg" />
                )}
              </button>
            </div>
          </label>
          {/* <div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-start ml-6 peer-invalid:visible text-danger-500 text-sm">{formik.errors.password}</div>
            ) : null}
          </div> */}
          <div className='mb-9'>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
              <div>
                <ul>
              <li>8 characters minimum</li>
              <li>1 lowercase</li>
              <li>1 uppercase</li>
              </ul>
              </div>
              <div>
                <ul>
              <li>1 special character</li>
              <li>1 number</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="px-5">
            <Button type="submit" className="button-primary-lg center button" style={{borderRadius:'10px', backgroundColor:"rgb(56 133 123 /1)"}}>
              Sign Up
            </Button>
          </div>
        </form>
      </div>
      <div className="container min-w-full center relative flex flex-col justify-center items-center">
        <blockquote className="body-text-medium blockquote-form p-10 text-gray-500">
          By signing up, you agree to our
          <span className="relative font-semibold text-primary-500"> Terms & Conditions</span>
          and
          <span className="relative font-semibold text-primary-500"> Privacy Policy</span>
        </blockquote>
      </div>
      <div className="container min-w-full center relative flex flex-col justify-center items-center">
        <blockquote className="body-text-medium blockquote-form text-gray-500">
          Already have an account?
          <a href="/Login">
            <span className="relative font-semibold text-primary-500"> Login</span>
          </a>
        </blockquote>
      </div>
    </div>
  );
}
