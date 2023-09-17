import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';

function ForgetPassword() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Email invalid').required('Your email is required'),
    }),
    onSubmit: () => {
      navigate('/EmailSent');
    },
  });
  return (
    <div className="bg-gray-50 grid grid-cols-1">
      <div className='w-11/12 m-auto'>
        <Link to="/">
          <img src="src/assets/icons/arrow_left.svg" alt="" className="mt-5 text-primary-500" />
        </Link>
      </div>
      <div className="container min-w-full center pt-18 relative flex flex-col justify-center items-center">
        <img className="w-72" src="src/assets/images/lock.png" alt="" />
        <h2 className="mt-5 mb-3">Forgot password?</h2>
        <p
          style={{
            color: 'grey',
          }}
        >
          Enter Your email below and we'll get you back into your account
        </p>
      </div>
      <div className="container min-w-full center pt-2 relative flex flex-col justify-center items-center">
        <form className="w-1/2" onSubmit={formik.handleSubmit}>
          <label className="block mt-5">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              className="mb-2 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
              style={{ border: formik.touched.email && formik.errors.email ? '1px solid red' : '' }}
            />
          </label>
          <div className="mb-4">
            {formik.touched.email && formik.errors.email ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="">
            <Button
              type="submit"
              className="button-primary-lg center button"
              style={{ borderRadius: '10px', backgroundColor: 'rgb(56 133 123 /1)' }}
            >
              Submit
            </Button>
          </div>
        </form>

        <div className="container min-w-full center relative flex flex-col justify-center items-center mt-5">
          <blockquote className="body-text-medium blockquote-form text-gray-500">
            Back to
            <Link to="/">
              <span className="relative font-semibold text-primary-500"> Login</span>
            </Link>
          </blockquote>
        </div>

        <a href="/OnBoarding1">
          <span className="relative font-semibold text-primary-500"> OnBoarding step 1</span>
        </a>
      </div>
    </div>
  );
}

export default ForgetPassword;
