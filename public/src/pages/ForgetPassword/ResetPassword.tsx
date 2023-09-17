import { useState } from 'react';
import Button from '../../components/Button/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .test('has-lowercase', 'Password must have at least one lowercase character', (value) => /[a-z]/.test(value))
    .test('has-uppercase', 'Password must have at least one uppercase character', (value) => /[A-Z]/.test(value))
    .test('has-number', 'Password must have at least one number', (value) => /\d/.test(value))
    .test('has-special-character', 'Password must have at least one special character', (value) =>
      /[!@#$%^&*]/.test(value),
    ),
});

function ResetPassword() {
  const navigate = useNavigate();
  const [typePassword, setTypePassword] = useState('password');

  //const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  const togglePassword = () => {
    setTypePassword((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (_values) => {
      navigate('/RasswordResetSuccess');
    },
  });

  return (
    <div className="bg-gray-50 grid grid-cols-1">
      <div className='w-11/12 m-auto'>
        <Link to="/ForgetPassword">
          <img src="src/assets/icons/arrow_left.svg" alt="" className="mt-5 text-primary-500" />
        </Link>
      </div>
      <div className="container min-w-full center pt-18 relative flex flex-col justify-center items-center">
        <img className="w-72" src="src/assets/images/lock.png" alt="" />
        <h2 className="mt-5 mb-3">Reset Password</h2>
        <p
          style={{
            color: 'grey',
          }}
        >
          Please create a new password
        </p>
      </div>
      <div className="container min-w-full center pt-10 relative flex flex-col justify-center items-center">
        <form className="w-1/2" onSubmit={formik.handleSubmit}>
          <label className="block">
            <input
              type={typePassword}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // validate={validatePassword}
              placeholder="Create a password"
              className="mb-2 form-input appearance-none px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ..."
              style={{ border: formik.touched.password && formik.errors.password ? '1px solid red' : '' }}
            />
            <button
              type="button"
              style={{ position: 'absolute', top: '20%', transform: 'translateX(-40px)' }}
              onClick={togglePassword}
            >
              {typePassword === 'password' ? (
                <img alt="eye" src="src/assets/icons/eye_closed.svg" />
              ) : (
                <img alt="eye" src="src/assets/icons/eye_open.svg" />
              )}
            </button>
          </label>
          {/* <div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-start ml-6 peer-invalid:visible text-danger-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div> */}
          <div className="mb-9">
            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '37%' }}>
              <div>
                <ul>
                  <li className={`${formik.errors.password == 'min error' ? 'text-danger-500' : ''}`}>
                    8 characters minimum
                  </li>
                  <li className={`${formik.errors.password == 'lower case error' ? 'text-danger-500' : ''}`}>
                    1 lowercase
                  </li>
                  <li className={`${formik.errors.password == 'upper case error' ? 'text-danger-500' : ''}`}>
                    1 uppercase
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className={`${formik.errors.password == 'special character error' ? 'text-danger-500' : ''}`}>
                    1 special character
                  </li>
                  <li className={`${formik.errors.password == 'number error' ? 'text-danger-500' : ''}`}>1 number</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-5">
            <Button
              type="submit"
              className="button-primary-lg center button"
              style={{ borderRadius: '10px', backgroundColor: 'rgb(56 133 123 /1)' }}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
