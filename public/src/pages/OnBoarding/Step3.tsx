import Button from '../../components/Button/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
function Step3() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema: yup.object().shape({
      amount: yup
        .string()
        .required('Amount is required')
        .test('valid-integer', 'Amount must be an integer', (value) => {
          if (value === undefined || value === null || value === '') {
            return false; // Allow empty values
          }
          return Number.isInteger(Number(value));
        }),
    }),
    onSubmit: () => {
      navigate('/OnBoarding4');
    },
  });
  return (
    <div className="bg-gray-50 grid grid-cols-1">
      <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
        <h1>Set your rewards budget</h1>
        <p style={{ color: 'grey' }} className="mt-2">
          Set your rewards budget for the next year
        </p>
      </div>
      <div>
        <p className="text-gray-400 mt-5 mx-auto text-right w-1/3 ">Step 3/4</p>
      </div>
      <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
        <form className="w-1/3" onSubmit={formik.handleSubmit}>
          <label className="block">
            <input
              type="text"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.amount && formik.errors.amount ? '1px solid red' : '' }}
              placeholder="enter an amount"
              className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
            />
          </label>
          <div className="mb-4">
            {formik.touched.amount && formik.errors.amount ? (
              <div className="text-start ml-6 mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.amount}
              </div>
            ) : null}
          </div>
          <div className="">
            {/* <Button
              type="submit"
              className="button-primary-lg  button mt-5 mb-9 "
              style={{ borderRadius: '10px', backgroundColor: 'rgb(56 133 123 /1)' }}
            >
              <a href="OnBoarding4">Set Budget</a>
            </Button> */}
            <Button
              type="submit"
              className="button-primary-lg  button mt-7 "
              style={{ borderRadius: '10px', backgroundColor: 'rgb(56 133 123 /1)' }}
            >
              <span className="contents">
                Next &nbsp;
                <img
                  src="src/assets/icons/chevron_right.svg"
                  style={{ filter: 'brightness(300%)' }}
                  alt="right_arrow"
                ></img>
              </span>

              {/* {Object.keys(formik.errors).length > 0 ? (
              <span className="contents">
                Set Budget
              </span>
            ) : (
              <a href="/OnBoarding4" className="contents">
                Set Budget
              </a>
            )} */}
            </Button>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-lg font-semibold align-bottom cursor-pointer" style={{ color: 'rgb(56 133 123 /1)' }}>
              <a href="/OnBoarding2">
                <img
                  src="src/assets/icons/chevron_left.svg"
                  alt=""
                  style={{ maxWidth: 'fit-content', display: 'inline', transform: 'translateY(-4px)' }}
                />
                &#9; Previous
              </a>
            </span>
            <span
              className="text-lg font-semibold cursor-pointer"
              style={{ color: 'rgb(56 133 123 /1)', textAlign: 'right' }}
            >
              Skip For Now
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step3;
